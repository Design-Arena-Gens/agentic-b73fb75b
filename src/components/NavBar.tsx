import Link from "next/link";

const navItems = [
  { href: "#dynamic-process-canvas", label: "Process Canvas" },
  { href: "#programming-spectrum", label: "Programming" },
  { href: "#asset-graph", label: "Asset Graph" },
  { href: "#ai-augmentation", label: "AI Agents" },
  { href: "#cross-reality", label: "Cross Reality" },
  { href: "#mission-control", label: "Mission Control" }
];

export function NavBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-[#050B1A]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl text-white">
          Axiom HMI
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden rounded-full border border-accent/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent md:inline-flex"
        >
          Initiate Session
        </Link>
      </div>
    </div>
  );
}
