"use client";

import { useState } from "react";
import { allBrands, paths } from "../lib/content";

export default function Router() {
  const [i, setI] = useState(0);
  const brand = allBrands.find((b) => b.id === paths[i].brandId)!;

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <ul className="lg:col-span-7">
        {paths.map((p, idx) => (
          <li key={p.label}>
            <button
              type="button"
              aria-pressed={idx === i}
              onClick={() => setI(idx)}
              className={`w-full border-l-2 py-3 pl-5 text-left font-display text-2xl leading-tight transition-colors sm:text-3xl ${
                idx === i ? "border-ochre text-chalk" : "border-chalk/15 text-chalk/50 hover:text-chalk/80"
              }`}
            >
              {p.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="lg:col-span-5" aria-live="polite">
        <div key={brand.id} className="swap border-t border-ochre pt-6">
          <p className="text-sm text-chalk/60">{brand.role}</p>
          <h3 className="mt-2 font-display text-4xl">{brand.name}</h3>
          <p className="mt-4 max-w-md text-chalk/80">{brand.blurb}</p>
          <a
            href={brand.href}
            className="mt-8 inline-block bg-ochre px-6 py-3 font-medium text-ink transition-colors hover:bg-chalk"
          >
            {brand.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
