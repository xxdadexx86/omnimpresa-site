import type { CSSProperties } from "react";

const providers = {
  unicredit: {
    name: "UniCredit",
    src: "/assets/partners/unicredit.png",
    width: 1260,
    height: 844,
  },
  worldline: {
    name: "Worldline",
    src: "/assets/partners/worldline.svg",
    width: 2147,
    height: 355,
  },
  sumup: {
    name: "SumUp",
    src: "/assets/partners/sumup.svg",
    width: 444,
    height: 128,
  },
  futur: {
    name: "FuturEnergy",
    src: "/assets/partners/futur-energy.png",
    width: 900,
    height: 128,
  },
  mobile: {
    name: "1Mobile",
    src: "/assets/partners/1mobile.svg",
    width: 130,
    height: 35,
  },
  ld: {
    name: "L.D. Automation & AI di Loddi Davide",
    src: "/assets/partners/ld-automation-ai.png",
    width: 1381,
    height: 301,
  },
  very: {
    name: "Very Alarm",
    src: "/assets/partners/very-alarm.png",
    width: 535,
    height: 125,
  },
};

export const divisionProviders = {
  finance: ["unicredit", "worldline", "sumup"],
  energy: ["futur"],
  technology: ["mobile"],
  digital: ["ld"],
  security: ["very"],
  academy: [],
} as const;

export function PartnerLogos({
  division,
}: {
  division: keyof typeof divisionProviders;
}) {
  return (
    <div className="provider-logos">
      {divisionProviders[division].map((key) => {
        const provider = providers[key];
        return (
          <span
            key={key}
            className={`provider-logo provider-${key}`}
            style={
              {
                "--logo-ratio": provider.width / provider.height,
              } as CSSProperties
            }
          >
            <img
              src={provider.src}
              alt={provider.name}
              width={provider.width}
              height={provider.height}
              loading="lazy"
            />
          </span>
        );
      })}
    </div>
  );
}
