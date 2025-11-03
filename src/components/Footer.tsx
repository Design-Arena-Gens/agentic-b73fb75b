export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050B1A] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="font-display text-white">Axiom HMI</div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
          Edge · Cloud · Human · AI · Harmony
        </div>
        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Axiom Interface. All signals monitored.
        </div>
      </div>
    </footer>
  );
}
