import Image from "next/image";

export default function Safety() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/service-construct.png"
          alt="Construction safety"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Safety
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Safety Is Not a Priority.{" "}
            <span className="text-brand">It&apos;s a Value.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Priorities change. Values don&apos;t. At DataOne Construction,
            safety is embedded in every process, every plan, and every person on
            the job site.
          </p>
        </div>
      </section>

      {/* Safety Metrics */}
      <section className="bg-brand-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { value: "0.600", label: "EMR", detail: "40% below the 1.0 industry average" },
              { value: "0.865", label: "TRIR", detail: "Total Recordable Incident Rate" },
              { value: "0.433", label: "DART", detail: "Days Away, Restricted or Transferred" },
            ].map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-6 sm:p-8">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand">{metric.value}</p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mt-2">{metric.label}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{metric.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            2024 Safety Performance Metrics
          </p>
        </div>
      </section>

      {/* Safety Culture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Safety Culture</h2>
            <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              DataOne Construction inherits Byers Industrial Services&apos;
              deeply ingrained safety-first culture. Every employee — from first-day
              apprentice to senior project manager — has stop-work authority.
              No schedule, no budget, no deadline overrides safety.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              We front-load risk: detailed work plans, lift and rigging
              strategies, and hazard assessments are completed before a single
              tool is picked up. Daily toolbox talks and near-miss reporting keep
              awareness sharp throughout every shift.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            {[
              { title: "Stop-Work Authority", detail: "Every team member can halt operations immediately if they identify an unsafe condition — no questions asked." },
              { title: "Pre-Task Risk Reviews", detail: "Detailed hazard assessments, work plans, and lift strategies completed before mobilization begins." },
              { title: "Daily Toolbox Talks", detail: "Crew-level safety briefings every morning covering site-specific hazards and task planning." },
              { title: "Near-Miss Reporting", detail: "Proactive incident identification program that catches risks before they become injuries." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-brand-muted/20">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Certifications & Training
            </h2>
            <Image
              src="/images/certs-badge.png"
              alt="ISO and SOC certifications"
              width={300}
              height={60}
              className="h-10 sm:h-14 w-auto"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              "OSHA 10 & OSHA 30", "NFPA-70E (Arc Flash)", "MSHA Certified", "Confined Space Entry",
              "Fall Protection", "MEWP Certified", "First Aid / CPR / AED", "Respirator Fit Tested",
              "HAZCOM Trained", "Lockout / Tagout (LOTO)", "Petrochem BOP", "TWIC Credential",
              "Rigging & Signaling", "Traffic Control (TCS/TCT)", "Certified Welders", "PIV Operators",
            ].map((cert) => (
              <div key={cert} className="bg-white rounded-lg p-3 sm:p-4 border border-brand-muted/30 text-center">
                <p className="text-xs sm:text-sm font-medium text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Center Safety */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Data Center-Specific Safety
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: "High Voltage Protocols", description: "Specialized procedures for medium and high voltage systems — arc flash analysis, energized work permits, and dedicated safety observers for all HV operations." },
            { title: "Clean Room Standards", description: "Data center environments demand contamination control. Our teams follow strict cleanliness protocols to protect sensitive computing equipment during construction." },
            { title: "Energized Facility Work", description: "Experience working in live data center environments where existing operations cannot be interrupted. Rigorous LOTO and coordination procedures protect both workers and equipment." },
          ].map((card) => (
            <div key={card.title} className="bg-brand-cyan rounded-xl p-6 sm:p-8">
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{card.title}</h3>
              <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
