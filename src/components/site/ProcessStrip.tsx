import {
  ClipboardCheck,
  CodeXml,
  Coffee,
  Headphones,
  Lightbulb,
  PenLine,
  Rocket,
} from "lucide-react";

const steps = [
  { icon: Lightbulb, label: "Idea" },
  { icon: PenLine, label: "Plan" },
  { icon: Coffee, label: "Design" },
  { icon: CodeXml, label: "Develop" },
  { icon: ClipboardCheck, label: "Test" },
  { icon: Rocket, label: "Deploy" },
  { icon: Headphones, label: "Support" },
];

function StepRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-start"
      {...(ariaHidden ? { "aria-hidden": "true" } : {})}
    >
      {steps.map((s) => (
        <div
          key={s.label}
          className="relative flex w-28 flex-col items-center gap-3 sm:w-36 md:w-40"
        >
          {/* straight connecting line behind the icons */}
          <span
            aria-hidden="true"
            className="absolute top-8 left-0 h-px w-full bg-primary/25"
          />
          <div className="hex-clip relative z-10 grid size-14 place-items-center bg-primary/70 p-[1.5px] sm:size-16">
            <div className="hex-clip grid size-full place-items-center bg-background">
              <s.icon className="size-5 text-primary sm:size-6" />
            </div>
          </div>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ProcessStrip() {
  return (
    <div className="relative w-full overflow-hidden">
      <style>{`@keyframes tvx-marquee-x { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
      .tvx-marquee { animation: tvx-marquee-x 28s linear infinite; }
      @media (prefers-reduced-motion: reduce) { .tvx-marquee { animation: none; } }`}</style>

      {/* soft edge fades so the loop never shows a hard seam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-background to-transparent sm:w-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-background to-transparent sm:w-20"
      />

      <div className="tvx-marquee flex w-max will-change-transform">
        <StepRow />
        <StepRow ariaHidden />
      </div>
    </div>
  );
}
