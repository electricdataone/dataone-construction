export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Two Industry Leaders.{" "}
            <span className="text-brand">One Unified Mission.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            DataOne Construction was formed by merging Data One&apos;s
            giga-scale data center vision with Byers Industrial Services&apos;
            50+ years of electrical construction expertise.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">The Story</h2>
            <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              Data One is one of Europe&apos;s fastest-growing data center
              platforms, building giga-scale AI infrastructure across France and
              the United States. As they prepare to go publicly traded, they
              recognized that owning the construction capability — not just the
              facilities — would be a decisive competitive advantage.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              Byers Industrial Services has been building America&apos;s
              industrial infrastructure since 1972. When they took on the
              electrical scope of DataOne&apos;s 300 MW Vineland data center,
              the partnership proved so effective that a permanent merger became
              the obvious next step.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              DataOne Construction is the result: a vertically integrated
              electrical construction division that gives Data One full control
              over the build-out of its data center campuses worldwide.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-brand-cyan rounded-xl p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Data One — The Vision
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm leading-relaxed">
                Giga-scale AI hosting data center platform. 400 MW across
                Europe, 300 MW in the US. Backed by BSO&apos;s 20 years of
                infrastructure expertise. Sustainability-first with 100%
                renewable energy and industry-leading PUE of 1.06.
              </p>
            </div>
            <div className="bg-brand-cyan rounded-xl p-6 sm:p-8">
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Byers Industrial — The Muscle
              </h3>
              <p className="mt-2 sm:mt-3 text-gray-600 text-sm leading-relaxed">
                National turnkey industrial contractor since 1972. 1,200+
                employees, 12 Master Electrician credentials, licensed across 25
                states. 3,000+ projects delivered with an EMR of 0.600 — 40%
                below industry average.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Charles-Antoine Beyney",
                title: "CEO, DataOne",
                bio: "Co-founder of BSO. Previously founded Etix Everywhere, sold to Vantage Data Centers. Serial data center entrepreneur driving giga-scale AI infrastructure.",
              },
              {
                name: "Michael Ourabah",
                title: "Co-Founder, DataOne & CEO, BSO",
                bio: "Founded BSO at 21, grew it organically with zero PE investment into a global infrastructure company spanning 20+ years and 240+ connected markets.",
              },
              {
                name: "Rob Sebia",
                title: "CEO, Byers Industrial Services",
                bio: "Leading Byers through its expansion into data center construction and nationwide growth across the Southeast and beyond.",
              },
              {
                name: "Danielle Dyjak",
                title: "COO, Byers Industrial Services",
                bio: "Overseeing operations across all Byers divisions — electrical, mechanical, structural, and renewables.",
              },
              {
                name: "Nick Wagner",
                title: "SVP Key Projects, Byers Industrial",
                bio: "Managing high-profile projects including the Vineland 300 MW data center campus — DataOne Construction's flagship delivery.",
              },
              {
                name: "Brian Rybaltowski",
                title: "VP Business Development, Byers Industrial",
                bio: "Driving growth and partnerships that position DataOne Construction as the go-to electrical contractor for giga-scale builds.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white p-6 sm:p-8 rounded-xl border border-brand-muted/30"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-brand-cyan flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-brand font-bold text-lg sm:text-xl">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{person.name}</h3>
                <p className="text-brand text-xs sm:text-sm font-medium">
                  {person.title}
                </p>
                <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
          How We Got Here
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              year: "1972",
              event: "Byers Electrical Construction founded in Franklinville, NJ",
            },
            {
              year: "2004",
              event: "BSO founded — the parent infrastructure company behind Data One",
            },
            {
              year: "2017",
              event: "Byers expands to nationwide operations across 25 states",
            },
            {
              year: "2024",
              event: "Data One launches as Europe's first giga-scale AI data center platform",
            },
            {
              year: "2025",
              event: "Byers delivers Phase 1 of the Vineland 300 MW data center in 20 weeks",
            },
            {
              year: "2026",
              event: "DataOne Construction formed — the self-contained electrical construction division",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-14 sm:w-20 text-right">
                <span className="text-brand font-bold text-base sm:text-lg">
                  {item.year}
                </span>
              </div>
              <div className="flex-shrink-0 w-px bg-brand-muted relative">
                <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-brand" />
              </div>
              <p className="text-gray-600 pb-4 text-sm sm:text-base">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
