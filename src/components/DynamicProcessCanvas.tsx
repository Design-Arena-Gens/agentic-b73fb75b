"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

type ProcessNode = {
  id: string;
  label: string;
  position: [number, number, number];
  temperature: number;
  pressure: number;
  throughput: number;
};

type ProcessEdge = {
  source: string;
  target: string;
  flow: number;
};

const thermalColor = (temp: number) => {
  const cold = new THREE.Color("#00F7FF");
  const hot = new THREE.Color("#FF4D4F");
  return cold.clone().lerp(hot, THREE.MathUtils.clamp((temp - 40) / 40, 0, 1));
};

const nodes: ProcessNode[] = [
  {
    id: "ingress",
    label: "Ingress Manifold",
    position: [-6, 0, 0],
    temperature: 43,
    pressure: 1.4,
    throughput: 68
  },
  {
    id: "processor",
    label: "Catalytic Processor",
    position: [0, 0, 0],
    temperature: 71,
    pressure: 1.9,
    throughput: 82
  },
  {
    id: "qc",
    label: "Quality Cycler",
    position: [5, -1, -1],
    temperature: 56,
    pressure: 1.2,
    throughput: 75
  },
  {
    id: "egress",
    label: "Outbound Relay",
    position: [8, 1, 1],
    temperature: 48,
    pressure: 1.1,
    throughput: 91
  }
];

const edges: ProcessEdge[] = [
  { source: "ingress", target: "processor", flow: 0.79 },
  { source: "processor", target: "qc", flow: 0.65 },
  { source: "qc", target: "egress", flow: 0.92 }
];

const Node = ({ node }: { node: ProcessNode }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pulse = useMemo(() => new THREE.Vector3(...node.position), [node]);

  useFrame(({ clock, camera }) => {
    const s = Math.sin(clock.getElapsedTime() * 2 + pulse.x) * 0.12 + 0.88;
    const scale = new THREE.Vector3(s, s, s);
    if (meshRef.current) {
      meshRef.current.scale.copy(scale);
      meshRef.current.lookAt(camera.position);
    }
  });

  return (
    <group position={node.position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.6, 64, 64]} />
        <meshStandardMaterial
          color={thermalColor(node.temperature)}
          emissiveIntensity={0.6}
          emissive={thermalColor(node.temperature)}
        />
      </mesh>
      <Html center>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-lg bg-panel/80 px-3 py-2 text-xs shadow-lg ring-1 ring-white/10 backdrop-blur"
        >
          <div className="font-semibold text-white">{node.label}</div>
          <div className="flex gap-3 text-[11px] text-slate-300">
            <span>Temp {node.temperature.toFixed(1)}°C</span>
            <span>Press {node.pressure.toFixed(2)} bar</span>
            <span>Throughput {(node.throughput / 100).toFixed(2)}%</span>
          </div>
        </motion.div>
      </Html>
    </group>
  );
};

const Flow = ({ edge }: { edge: ProcessEdge }) => {
  const derived = useMemo(() => {
    const source = nodes.find((n) => n.id === edge.source);
    const target = nodes.find((n) => n.id === edge.target);
    if (!source || !target) return null;

    const start = new THREE.Vector3(...source.position);
    const end = new THREE.Vector3(...target.position);
    const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 0.5, 0));

    const curve = new THREE.CatmullRomCurve3([start, mid, end]);
    const points = curve.getPoints(100);
    const flowColor = new THREE.Color("#00F7FF").lerp(
      new THREE.Color("#8C61FF"),
      edge.flow
    );

    return { curve, points, flowColor };
  }, [edge]);

  if (!derived) return null;

  const { curve, points, flowColor } = derived;

  const FlowParticle = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const speed = 0.4 + edge.flow * 0.8;
    const offset = useMemo(() => Math.random(), []);

    useFrame(({ clock }) => {
      if (!meshRef.current) return;
      const t = ((clock.getElapsedTime() * speed) % 1) as number;
      const point = curve.getPoint((t + offset) % 1);
      meshRef.current.position.copy(point);
    });

    return (
      <Trail width={3} color={flowColor} length={50} decay={0.6} stride={5} attenuation={(w) => w}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshBasicMaterial color={flowColor} />
        </mesh>
      </Trail>
    );
  };

  return (
    <group>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap((p) => p.toArray()))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={flowColor} linewidth={2} transparent opacity={0.7} />
      </line>
      <FlowParticle />
    </group>
  );
};

function ReactorCore() {
  const coreRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!coreRef.current) return;
    const t = clock.getElapsedTime();
    coreRef.current.rotation.y = t * 0.2;
    coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <group ref={coreRef} position={[0, -1, 0]}>
      <mesh>
        <torusGeometry args={[1.2, 0.1, 32, 64]} />
        <meshStandardMaterial
          color="#0ff"
          emissive="#0ff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#14233c" transparent opacity={0.65} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial color="#8C61FF" wireframe />
      </mesh>
    </group>
  );
}

export function DynamicProcessCanvas() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-panel to-panel/70 shadow-xl shadow-black/40">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(12,32,72,0.8),transparent_60%)]" />
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center text-sm text-slate-400">
            Preparing process canvas…
          </div>
        }
      >
        <Canvas shadows dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[8, 6, 12]} fov={45} />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.6} color="#8C61FF" />
          <Stars radius={45} depth={30} count={5000} factor={4} fade />
          <ReactorCore />
          {nodes.map((node) => (
            <Node key={node.id} node={node} />
          ))}
          {edges.map((edge) => (
            <Flow key={`${edge.source}-${edge.target}`} edge={edge} />
          ))}
          <OrbitControls enablePan={false} maxDistance={20} minDistance={5} />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-3 left-3 flex gap-3 text-xs">
        <div className="rounded-full bg-white/5 px-3 py-1 text-white/70 backdrop-blur">
          Smart zoom: Plant → Subsystem → Component
        </div>
        <div className="rounded-full bg-white/5 px-3 py-1 text-white/70 backdrop-blur">
          Thermal, stress, flow overlays active
        </div>
      </div>
    </div>
  );
}
