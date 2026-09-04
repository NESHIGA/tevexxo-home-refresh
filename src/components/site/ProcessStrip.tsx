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

export function ProcessStrip() {
  return (
    <div className="relative">
      <style>{`@keyframes tvx-pulse-x { from { left: -12%; } to { left: 104%; } }`}</style>
      <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative mx-auto flex min-w-[720px] max-w-4xl items-start justify-between">
          {/* connecting line with travelling pulse */}
          <div
            aria-hidden="true"
            className="absolute top-8 h-px bg-primary/25"
            style={{ left: "calc(100% / 14)", right: "calc(100% / 14)" }}
          >
            <div className="absolute -top-[3px] h-[7px] w-20 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px] animate-[tvx-pulse-x_3.2s_linear_infinite]" />
            <div className="absolute -top-px h-[3px] w-10 rounded-full bg-gradient-to-r from-transparent via-glow to-transparent animate-[tvx-pulse-x_3.2s_linear_infinite]" />
          </div>

          {steps.map((s) => (
            <div
              key={s.label}
              className="relative z-10 flex flex-col items-center gap-3"
              style={{ width: "calc(100% / 7)" }}
            >
              <div className="hex-clip grid size-16 place-items-center bg-primary/70 p-[1.5px]">
                <div className="hex-clip grid size-full place-items-center bg-background">
                  <s.icon className="size-6 text-primary" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
