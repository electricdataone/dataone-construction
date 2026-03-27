import Image from "next/image";

const leadership = [
  {
    name: "Charles-Antoine Beyney",
    title: "CEO, DataOne",
    bio: "Co-founder of BSO. Previously founded Etix Everywhere, sold to Vantage Data Centers. Serial data center entrepreneur driving giga-scale AI infrastructure.",
    image: "/images/charles-antoine.png",
  },
  {
    name: "Michael Ourabah",
    title: "Co-Founder, DataOne & CEO, BSO",
    bio: "Founded BSO at 21, grew it organically with zero PE investment into a global infrastructure company spanning 20+ years and 240+ connected markets.",
    image: "/images/michael-ourabah.png",
  },
  {
    name: "Ryan Morris",
    title: "Owner, Byers Industrial Services & Founder, Triumph Atlantic",
    bio: "Began his career as an electrician with Byers nearly 15 years ago, rising through the ranks to become its owner in 2024. Founded Triumph Atlantic to foster long-term partnerships with organizations that share its values and strategic vision. His leadership is defined by a hands-on approach, dedication to integrity, and a focus on creating meaningful, lasting relationships.",
    image: "/images/ryan-morris.jpg",
  },
  {
    name: "Nick Wagner",
    title: "COO, Triumph Atlantic & COO, Byers Industrial Services",
    bio: "Joined Byers in 2016 as a Journeyman Electrician, advancing to Site Foreman, Project Manager, VP of Business Development, and Chief Operating Officer. Also founded Fritz Staffing to enhance workforce capabilities across the Triumph Atlantic portfolio. Dedicated to top-tier labor, continued growth, and operational excellence.",
    image: "/images/nick-wagner.jpg",
  },
  {
    name: "Danielle Dyjak",
    title: "COO, Byers Industrial Services",
    bio: "Overseeing operations across all Byers divisions — electrical, mechanical, structural, and renewables.",
    image: "/images/danielle-dyjak.jpg",
  },
  {
    name: "Justin Wood",
    title: "SVP Project Management, Byers Industrial & Principal, Triumph Atlantic",
    bio: "Joined Byers in 2018 as Head of Procurement, expanded into Business Development in 2019, and stepped into SVP of Project Management in 2025. Oversees all Byers projects and contributes expertise to support growth across the Triumph Atlantic portfolio.",
    image: "/images/justin-wood.jpg",
  },
  {
    name: "Wade Zane",
    title: "Former VP Project Management, Byers Industrial",
    bio: "Built his career at Byers from project manager to Vice President of Project Management, overseeing national projects across America. With a strong foundation in industrial construction, Wade also founded Stable Works LLC in 2023.",
    image: "/images/wade-zane.jpg",
  },
  {
    name: "Steve Carpenter",
    title: "Head of Estimating, Byers Industrial & Principal, Triumph Atlantic",
    bio: "Began at Byers in 1989, progressing through purchasing, estimating, and project management. Now leads the estimating team supporting Byers' nationwide growth. His ability to develop and maintain personal relationships has been instrumental in helping all Triumph Atlantic companies thrive.",
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
                <Image src="/images/service-construct.png" alt="Byers Industrial construction" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Byers Industrial — The Muscle</h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-sm leading-relaxed">
                  National turnkey industrial contractor since 1972. 1,200+ employees, 12 Master
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl border border-brand-muted/30 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 sm:h-60 bg-gray-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                    {person.name}
                  </h3>
                  <p className="text-brand text-xs sm:text-sm font-medium mt-0.5">
                    {person.title}
                  </p>
                  <p className="mt-2 text-gray-600 text-xs leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            How We Got Here
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              { year: "1972", event: "Byers Electrical Construction founded in Franklinville, NJ" },
              { year: "2004", event: "BSO founded — the parent infrastructure company behind Data One" },
              { year: "2017", event: "Byers expands to nationwide operations across 25 states" },
              { year: "2024", event: "Data One launches as Europe's first giga-scale AI data center platform. Ryan Morris acquires Byers Industrial Services." },
              { year: "2025", event: "Byers delivers Phase 1 of the Vineland 300 MW data center in 20 weeks" },
              { year: "2026", event: "DataOne Construction formed — the self-contained electrical construction division" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 items-start">
                <div className="flex-shrink-0 w-14 sm:w-20 text-right">
                  <span className="text-brand font-bold text-base sm:text-lg">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-brand-muted relative">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-brand" />
                </div>
                <p className="text-gray-600 pb-4 text-sm sm:text-base">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
