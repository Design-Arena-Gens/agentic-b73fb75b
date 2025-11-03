"use client";

import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: SectionProps) {
  return (
    <section id={id} className={clsx("mx-auto max-w-7xl px-6 py-20", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <span className="font-display text-sm uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-3 font-display text-4xl font-semibold text-white md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-lg text-slate-300">{description}</p>
        ) : null}
      </div>
      <div className="mt-12">{children}</div>
    </section>
  );
}
