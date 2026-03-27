import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/datacenter-interior.jpg"
          alt="Data center infrastructure"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32 md:py-44">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            DataOne Construction
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
              DataOne Construction delivered the complete electrical scope for
              the landmark 300 MW AI data center in Vineland, New Jersey — a
              2.6 million square foot campus built for Nebius Group.
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
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/vineland.png"
              alt="Vineland 300 MW AI Data Center"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-3xl sm:text-4xl font-bold text-white">300 MW</p>
              <p className="text-white/80 text-sm">
                Vineland, NJ &middot; 2.6M sq ft &middot; Expandable to 1 GW
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Global Data Center Footprint
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              DataOne Construction supports the build-out of data center campuses
              across three continents.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Vineland, NJ",
                capacity: "300 MW",
                image: "/images/vineland.png",
                detail: "AI data center for Nebius Group",
              },
              {
                name: "Lyon, France",
                capacity: "200 MW",
                image: "/images/lyon.png",
                detail: "Tier-3 campus, hydroelectric powered",
              },
              {
                name: "Grenoble, France",
                capacity: "200 MW",
                image: "/images/grenoble.png",
                detail: "G42/Core42 AI infrastructure",
              },
            ].map((site) => (
              <div
                key={site.name}
                className="relative rounded-xl overflow-hidden aspect-square group"
              >
                <Image
                  src={site.image}
                  alt={site.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {site.capacity}
                  </p>
                  <p className="text-white font-medium text-sm sm:text-base">
                    {site.name}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">
                    {site.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DataOne Construction */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Why DataOne Construction
            </h2>
            <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Over 50 years of electrical construction excellence,
              purpose-built for the giga-scale AI infrastructure era.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Giga-Scale Expertise",
                description:
                  "Purpose-built for the unique demands of AI data center construction — high voltage, extreme density, rapid deployment timelines.",
                image: "/images/high-density.png",
              },
              {
                title: "Vertically Integrated",
                description:
                  "A self-contained electrical construction division eliminates coordination gaps between data center developer and contractor.",
                image: "/images/service-construct.png",
              },
              {
                title: "Proven Track Record",
                description:
                  "3,000+ projects, an EMR of 0.600, and the Vineland 300 MW campus as proof that we deliver at scale — safely and on time.",
                image: "/images/service-manage.png",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 sm:h-52">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="border-y border-gray-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Certified &amp; Compliant
          </p>
          <Image
            src="/images/certs-badge.png"
            alt="ISO 27001, ISO 14001, ISO 50001, SOC 1, SOC 2, HDS Certifications"
            width={400}
            height={80}
            className="h-16 sm:h-24 w-auto"
          />
        </div>
      </section>

      {/* Parent Company */}
      <section className="bg-gray-950 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest mb-6">
            A division of
          </p>
          <a
            href="https://dataone.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/dataone-eu-logo.png"
              alt="DataOne — Sustainable Datacenter"
              width={400}
              height={90}
              className="h-20 sm:h-28 w-auto mx-auto"
            />
          </a>
          <p className="mt-6 text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            DataOne Construction is the electrical construction division of
            DataOne, Europe&apos;s first giga-scale AI hosting data center platform.
          </p>
          <a
            href="https://dataone.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-brand hover:text-brand-light font-semibold text-sm transition-colors"
          >
            Visit dataone.eu &rarr;
          </a>
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
