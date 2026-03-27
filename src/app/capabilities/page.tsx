import Link from "next/link";

const capabilities = [
  {
    title: "High Voltage Installation",
    description:
      "Design, installation, and commissioning of high-voltage electrical systems for data centers handling 100 MW to 1 GW+ capacity. 24/7 emergency response and outage support.",
    specs: [
      "Medium & high voltage switchgear",
      "Transformer installation & testing",
      "Utility interconnection",
      "Emergency power systems",
    ],
  },
  {
    title: "Power Distribution",
    description:
      "Complete power distribution infrastructure supporting rack densities from 60 KW to 500 KW per rack — purpose-built for GPU-intensive AI workloads.",
    specs: [
      "PDU installation & wiring",
      "Busway & cable tray systems",
      "UPS integration",
      "Redundant power feeds (N+2)",
    ],
  },
  {
    title: "Fiber & Cable Infrastructure",
    description:
      "Industrial-scale fiber optic installation, splicing, and testing to support carrier-neutral, AI-agnostic connectivity at data center campuses.",
    specs: [
      "Fiber installation & splicing",
      "Structured cabling systems",
      "Cable tray & wireway installation",
      "Testing & certification",
    ],
  },
  {
    title: "Controls & Automation",
    description:
      "Advanced automation and control systems for data center operations — from BMS integration to environmental monitoring and power management.",
    specs: [
      "Building management systems",
      "Power monitoring & metering",
      "Environmental controls",
      "Equipment automation",
    ],
  },
  {
    title: "Cooling Infrastructure",
    description:
      "Electrical support for three-tier cooling systems including air cooling, direct liquid cooling (DLC), and rear door heat exchangers achieving PUE as low as 1.06.",
    specs: [
      "Chiller plant electrical",
      "DLC system wiring",
      "HVAC controls integration",
      "Heat recovery systems",
    ],
  },
  {
    title: "Renewables & Sustainability",
    description:
      "On-site renewable energy installation including solar arrays, battery energy storage (BESS), and EV charging infrastructure aligned with Data One's net-zero commitment.",
    specs: [
      "Solar array installation",
      "Battery energy storage (BESS)",
      "EV charging infrastructure",
      "Grid-tie & interconnection",
    ],
  },
];

export default function Capabilities() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-sm mb-4">
            Capabilities
          </p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Electrical Construction for{" "}
            <span className="text-brand">Giga-Scale Data Centers</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
            From high voltage installation to fiber infrastructure — every
            capability tuned for the unique demands of AI-ready data center
            construction.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-white border border-brand-muted/30 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-cyan flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-sm bg-brand" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{cap.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {cap.description}
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {cap.specs.map((spec) => (
                  <li
                    key={spec}
                    className="text-sm text-gray-500 flex items-start gap-2"
                  >
                    <span className="text-brand mt-0.5">&#9679;</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Licensing */}
      <section className="bg-brand-cyan py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Licensed Nationwide
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              12 Master Electrician credentials and 35 contractor licenses
              across 25 states — ready to mobilize wherever your project demands.
            </p>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-9 gap-3 max-w-3xl mx-auto">
            {[
              "NJ", "DE", "PA", "NY", "NC", "VA", "WV", "MD", "FL",
              "GA", "AL", "SC", "TX", "LA", "MS", "MO", "KY", "IN",
              "IL", "CO", "UT", "MT", "NV", "AZ", "WA",
            ].map((state) => (
              <div
                key={state}
                className="bg-white rounded-lg py-2 text-center text-sm font-semibold text-brand border border-brand-muted/40"
              >
                {state}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Need a Capability Assessment?
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Let&apos;s discuss your data center project scope and how DataOne
          Construction can deliver.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-8 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
