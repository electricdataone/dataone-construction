import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Projects
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Delivering at{" "}
            <span className="text-brand">Unprecedented Scale</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our flagship project proves that DataOne Construction can deliver
            giga-scale data center electrical infrastructure — safely, on time,
            and at the highest quality.
          </p>
        </div>
      </section>

      {/* Vineland Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-brand-cyan rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-10 md:p-16">
              <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3">
                American Flagship Project
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Vineland 300 MW AI Data Center
              </h2>
              <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base">Vineland, New Jersey</p>
              <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                DataOne&apos;s landmark AI data center campus in Vineland, New
                Jersey. DataOne Construction served as the exclusive electrical
                contractor, delivering the complete electrical scope for what
                will be one of the largest AI-ready data centers in the United
                States.
              </p>
              <ul className="mt-6 sm:mt-8 space-y-2 text-gray-600 text-sm sm:text-base">
                <li>&#8226; 350 MW IT load</li>
                <li>&#8226; 65,000 sqm over 44 ha of land</li>
                <li>&#8226; Green gas powered</li>
                <li>&#8226; Tier-3 compatible, ISO 27001, 14001, 50001</li>
                <li>&#8226; Phase 1 delivered in 20 weeks</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand/10 to-brand-muted/30 p-6 sm:p-10 md:p-16 flex flex-col justify-center">
              <h3 className="font-bold text-gray-900 mb-4 sm:mb-6 text-sm sm:text-base">Scope of Work</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Complete electrical infrastructure for 300 MW facility",
                  "High voltage switchgear and transformer installation",
                  "Power distribution to support up to 500 KW/rack density",
                  "36 Bergen Engine natural gas generators (403 MW potential)",
                  "Fiber optic backbone and structured cabling",
                  "Cooling system electrical integration",
                  "Building management and monitoring systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm"
                  >
                    <span className="text-brand mt-0.5 font-bold">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Project Timeline
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                phase: "Phase 1",
                date: "Summer 2025",
                description:
                  "150,000 sq ft delivered in 20 weeks. Initial power infrastructure and core electrical systems.",
                status: "Completed",
              },
              {
                phase: "100 MW",
                date: "End of 2025",
                description:
                  "First 100 MW of capacity installed and operational for AI workloads.",
                status: "In Progress",
              },
              {
                phase: "300 MW",
                date: "November 2026",
                description:
                  "Full 300 MW campus completion. All electrical systems operational across 2.6M sq ft.",
                status: "Planned",
              },
              {
                phase: "1 GW",
                date: "Future",
                description:
                  "Campus expansion to 1 GW capacity. DataOne Construction positioned as the electrical partner for all phases.",
                status: "Future",
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl p-6 sm:p-8 border border-brand-muted/30"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 sm:mb-4 ${
                    phase.status === "Completed"
                      ? "bg-brand/10 text-brand"
                      : phase.status === "In Progress"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {phase.status}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {phase.phase}
                </h3>
                <p className="text-brand text-xs sm:text-sm font-medium mt-1">
                  {phase.date}
                </p>
                <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* European Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
          Europe
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          DataOne European Campuses
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
          DataOne Construction supports the electrical infrastructure
          build-out across Data One&apos;s European data center campuses —
          two Tier-3 facilities powered by 100% renewable hydroelectric energy.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Lyon */}
          <div className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 sm:h-56">
              <Image
                src="/images/lyon.png"
                alt="Lyon Data Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-lg">Lyon, France</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xl font-bold text-brand">200 MW</p>
                  <p className="text-xs text-gray-500">Target Capacity</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-brand">20,000 m&sup2;</p>
                  <p className="text-xs text-gray-500">Campus Size</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Tier-3 compatible, 8-hectare campus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Multiple Tier-1 operators (Colt, Orange, SFR)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Hydroelectric &amp; nuclear powered
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  ISO 27001, ISO 14001, ISO 50001 certified
                </li>
              </ul>
            </div>
          </div>

          {/* Grenoble */}
          <div className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 sm:h-56">
              <Image
                src="/images/grenoble.png"
                alt="Grenoble Data Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="text-white font-bold text-lg">Grenoble, France</p>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xl font-bold text-brand">200 MW</p>
                  <p className="text-xs text-gray-500">Target Capacity</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-brand">20,000+ m&sup2;</p>
                  <p className="text-xs text-gray-500">Campus Size</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Tier-3 compatible, 7-hectare campus
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  AI infrastructure deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  Hydroelectric &amp; nuclear powered
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand font-bold">&#10003;</span>
                  ISO 27001, ISO 14001, ISO 50001 certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depth of Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Backed by 3,000+ Projects
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
          DataOne Construction brings decades of complex electrical
          construction experience to every project — from high-voltage
          switchgear and industrial automation to mission-critical power
          distribution systems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { count: "3,000+", label: "Projects Delivered" },
            { count: "50+", label: "Years of Expertise" },
            { count: "1,200+", label: "Skilled Electricians" },
            { count: "25", label: "States Licensed" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-4 sm:p-6 rounded-xl bg-brand-cyan"
            >
              <p className="text-2xl sm:text-3xl font-bold text-brand">{item.count}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Your Next Data Center Project
          </h2>
          <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg">
            Let&apos;s discuss how DataOne Construction can deliver your
            electrical infrastructure at scale.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 sm:mt-8 bg-white text-brand font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-brand-cyan transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
