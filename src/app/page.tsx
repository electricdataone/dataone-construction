import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-brand/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-44">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Data One + Byers Industrial Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-balance">
            Building the Power Behind{" "}
            <span className="text-brand">AI Infrastructure</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            DataOne Construction is the self-contained electrical and
            construction division purpose-built to deliver giga-scale data
            center infrastructure — on time, at scale, with certainty.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/capabilities"
              className="bg-brand hover:bg-brand-light text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-colors text-center"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 hover:border-brand text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-cyan border-b border-brand-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: "300 MW", label: "Vineland Data Center" },
            { value: "50+", label: "Years of Experience" },
            { value: "1,200+", label: "Skilled Workforce" },
            { value: "25", label: "States Licensed" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vineland Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
              Flagship Project
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Vineland 300 MW AI Data Center
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              Byers Industrial Services served as the exclusive electrical
              contractor on DataOne&apos;s landmark 300 MW AI data center in
              Vineland, New Jersey — a 2.6 million square foot campus built for
              Nebius Group.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Phase 1 was delivered in just 20 weeks. The facility supports power
              densities up to 500 KW per rack and is expandable to 1 GW — making
              it one of the largest AI-ready data centers in the United States.
            </p>
            <Link
              href="/projects"
              className="inline-block mt-6 sm:mt-8 text-brand font-semibold hover:text-brand-light transition-colors"
            >
              View Project Details &rarr;
            </Link>
          </div>
          <div className="bg-gradient-to-br from-brand-cyan to-brand-muted/40 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <div className="text-center px-6 sm:px-8">
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand">300 MW</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Vineland, NJ &middot; 2.6M sq ft
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Expandable to 1 GW
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DataOne Construction */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why DataOne Construction
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              We combine Data One&apos;s vision for giga-scale AI infrastructure
              with Byers&apos; half-century of electrical construction
              excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Giga-Scale Expertise",
                description:
                  "Purpose-built for the unique demands of AI data center construction — high voltage, extreme density, rapid deployment timelines.",
              },
              {
                title: "Vertically Integrated",
                description:
                  "A self-contained electrical construction division eliminates coordination gaps between data center developer and contractor.",
              },
              {
                title: "Proven Track Record",
                description:
                  "3,000+ projects, an EMR of 0.600, and the Vineland 300 MW campus as proof that we deliver at scale — safely and on time.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white p-6 sm:p-8 rounded-xl border border-brand-muted/30 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-brand-cyan flex items-center justify-center mb-4 sm:mb-6">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 rounded bg-brand/20 border-2 border-brand" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Ready to Build at Scale?
          </h2>
          <p className="mt-3 sm:mt-4 text-white/80 text-base sm:text-lg">
            Whether you&apos;re planning a new data center campus or scaling
            existing infrastructure, DataOne Construction delivers certainty.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 sm:mt-8 bg-white text-brand font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-brand-cyan transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
