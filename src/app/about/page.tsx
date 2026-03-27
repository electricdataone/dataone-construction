import Image from "next/image";

const leadership = [
  {
    name: "Charles-Antoine Beyney",
    bio: "Co-founder of BSO. Previously founded Etix Everywhere, sold to Vantage Data Centers. Serial data center entrepreneur driving giga-scale AI infrastructure.",
    image: "/images/charles-antoine.png",
    portrait: true,
  },
  {
    name: "Michael Ourabah",
    bio: "Founded BSO at 21, grew it organically with zero PE investment into a global infrastructure company spanning 20+ years and 240+ connected markets.",
    image: "/images/michael-ourabah.png",
    portrait: true,
  },
  {
    name: "Ryan Morris",
    bio: "Began his career as an electrician nearly 15 years ago, rising through the ranks to become owner of the construction division in 2024. His leadership is defined by a hands-on approach, dedication to integrity, and a focus on creating meaningful, lasting relationships.",
    image: "/images/ryan-morris.jpg",
  },
  {
    name: "Nick Wagner",
    bio: "Joined the team in 2016 as a Journeyman Electrician, advancing to Site Foreman, Project Manager, VP of Business Development, and Chief Operating Officer. Dedicated to top-tier labor, continued growth, and operational excellence.",
    image: "/images/nick-wagner.jpg",
  },
  {
    name: "Danielle Dyjak",
    bio: "Overseeing operations across all divisions — electrical, mechanical, structural, and renewables.",
    image: "/images/danielle-dyjak.jpg",
  },
  {
    name: "Justin Wood",
    bio: "Joined the team in 2018 as Head of Procurement, expanded into Business Development in 2019, and stepped into SVP of Project Management in 2025. Oversees all projects and ensures the company's continued success.",
    image: "/images/justin-wood.jpg",
  },
  {
    name: "Wade Zane",
    bio: "Built his career from project manager to Vice President of Project Management, overseeing national projects across America. Brings a strong foundation in industrial construction and nationwide project delivery.",
    image: "/images/wade-zane.jpg",
  },
  {
    name: "Steve Carpenter",
    bio: "Began with the company in 1989, progressing through purchasing, estimating, and project management. Now leads the estimating team supporting nationwide growth. His ability to develop and maintain personal relationships has been instrumental in the company's success.",
    image: "/images/steve-carpenter.jpg",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <Image
          src="/images/about-1.png"
          alt="Data center facility"
          fill
          className="object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Two Industry Leaders.{" "}
            <span className="text-brand">One Unified Mission.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            DataOne Construction was formed by merging Data One&apos;s
            giga-scale data center vision with over 50 years of electrical
            construction expertise.
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
              Our electrical construction roots go back to 1972, building
              America&apos;s industrial infrastructure for over five decades.
              When we took on the electrical scope of the 300 MW Vineland
              data center, the results proved that this team was built
              for giga-scale delivery.
            </p>
            <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
              DataOne Construction is the result: a vertically integrated
              electrical construction division that gives Data One full control
              over the build-out of its data center campuses worldwide.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/about-2.png"
              alt="DataOne data center infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Two Companies */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-brand-muted/30">
              <div className="relative h-48 sm:h-56">
                <Image src="/images/service-conceptualize.png" alt="Data One vision" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Data One — The Vision</h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm leading-relaxed">
                  Giga-scale AI hosting data center platform. 400 MW across Europe, 300 MW in the US.
                  Backed by BSO&apos;s 20 years of infrastructure expertise. Sustainability-first with
                  100% renewable energy and industry-leading PUE of 1.06.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-brand-muted/30">
              <div className="relative h-48 sm:h-56">
                <Image src="/images/service-construct.png" alt="Electrical construction" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Construction — The Muscle</h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm leading-relaxed">
                  National turnkey electrical contractor since 1972. 1,200+ employees, 12 Master
                  Electrician credentials, licensed across 25 states. 3,000+ projects delivered with
                  an EMR of 0.600 — 40% below industry average.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Leadership
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base max-w-2xl">
            Combining decades of data center development expertise with
            generations of electrical construction leadership.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[3/4] bg-gray-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className={`object-cover ${person.portrait ? "object-center" : "object-[center_25%]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm">
                    {person.name}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-gray-600 text-[10px] sm:text-xs leading-relaxed line-clamp-4 sm:line-clamp-none">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-950 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 sm:mb-14">
            How We Got Here
          </h2>

          {/* Horizontal timeline — desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-0 right-0 h-px bg-brand/30" />
              <div className="grid grid-cols-6 gap-4">
                {[
                  { year: "1972", event: "Electrical division founded in Franklinville, NJ" },
                  { year: "2004", event: "BSO founded — parent infrastructure company behind Data One" },
                  { year: "2017", event: "Nationwide expansion across 25 states" },
                  { year: "2024", event: "Data One launches as Europe's first giga-scale AI data center platform" },
                  { year: "2025", event: "Phase 1 of Vineland 300 MW data center delivered in 20 weeks" },
                  { year: "2026", event: "DataOne Construction formed as self-contained electrical division" },
                ].map((item, i) => (
                  <div key={i} className="relative pt-10">
                    {/* Dot on the line */}
                    <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand border-4 border-gray-950" />
                    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-brand/40 transition-colors">
                      <p className="text-brand font-bold text-2xl mb-2">{item.year}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical timeline — mobile */}
          <div className="md:hidden space-y-4">
            {[
              { year: "1972", event: "Electrical division founded in Franklinville, NJ" },
              { year: "2004", event: "BSO founded — parent infrastructure company behind Data One" },
              { year: "2017", event: "Nationwide expansion across 25 states" },
              { year: "2024", event: "Data One launches as Europe's first giga-scale AI data center platform" },
              { year: "2025", event: "Phase 1 of Vineland 300 MW data center delivered in 20 weeks" },
              { year: "2026", event: "DataOne Construction formed as self-contained electrical division" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-3 h-3 rounded-full bg-brand mt-1" />
                  {i < 5 && <div className="absolute top-4 left-1.5 w-px h-full bg-brand/20" />}
                </div>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 flex-1 mb-2">
                  <p className="text-brand font-bold text-lg">{item.year}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
