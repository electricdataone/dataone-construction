import Link from "next/link";

const openings = [
  {
    title: "QA/QC Field Inspector — Electrical",
    location: "Vineland, NJ",
    type: "Full-Time",
    description:
      "Inspect and verify electrical installations at the 300 MW data center campus. Ensure compliance with NEC, project specifications, and DataOne quality standards.",
  },
  {
    title: "QA/QC Field Inspector — Mechanical",
    location: "Vineland, NJ",
    type: "Full-Time",
    description:
      "Inspect mechanical installations including cooling systems, piping, and equipment commissioning at the Vineland data center campus.",
  },
  {
    title: "Journeyman Electrician",
    location: "Vineland, NJ",
    type: "Full-Time",
    description:
      "Perform electrical installations including conduit, wire pulling, terminations, and testing for high-density data center power distribution systems.",
  },
  {
    title: "Electrical Foreman",
    location: "Vineland, NJ",
    type: "Full-Time",
    description:
      "Lead electrical crews on the data center campus. Manage daily work plans, coordinate with other trades, and ensure safety and quality standards.",
  },
  {
    title: "Project Engineer",
    location: "Franklinville, NJ",
    type: "Full-Time",
    description:
      "Support project management for data center electrical scope. Coordinate submittals, RFIs, scheduling, and field engineering support.",
  },
  {
    title: "Fiber Optic Technician",
    location: "Vineland, NJ",
    type: "Full-Time",
    description:
      "Install, splice, and test fiber optic cabling infrastructure for the data center backbone and connectivity systems.",
  },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Careers
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Build the Future of{" "}
            <span className="text-brand">AI Infrastructure</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Join the team building the electrical backbone of the world&apos;s
            largest AI data centers. We&apos;re hiring across trades and
            experience levels.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="bg-brand-cyan py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { value: "1,200+", label: "Team Members" },
            { value: "50+", label: "Years in Business" },
            { value: "0.600", label: "EMR Safety Rating" },
            { value: "25", label: "States Licensed" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-bold text-brand">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
          Open Positions
        </h2>
        <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
          Currently hiring for the Vineland 300 MW data center campus and
          headquarters operations.
        </p>
        <div className="space-y-4">
          {openings.map((job) => (
            <div
              key={job.title}
              className="bg-white border border-brand-muted/30 rounded-xl p-5 sm:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-3 sm:gap-4 mt-1.5 sm:mt-2">
                    <span className="text-xs sm:text-sm text-gray-500">{job.location}</span>
                    <span className="text-xs sm:text-sm text-brand font-medium">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {job.description}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="self-start flex-shrink-0 bg-brand hover:bg-brand-light text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors"
                >
                  Apply
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            Why DataOne Construction
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Cutting-Edge Projects",
                description:
                  "Work on some of the largest and most advanced AI data center campuses being built anywhere in the world.",
              },
              {
                title: "Safety-First Culture",
                description:
                  "An EMR of 0.600 isn't an accident — it's the result of a genuine commitment to sending every worker home safe, every day.",
              },
              {
                title: "Career Growth",
                description:
                  "From apprentice to foreman to project manager — DataOne Construction invests in developing the next generation of electrical construction leaders.",
              },
              {
                title: "Nationwide Reach",
                description:
                  "Licensed in 25 states with projects expanding beyond Vineland. Your career can grow with us geographically.",
              },
              {
                title: "Competitive Compensation",
                description:
                  "Competitive wages, benefits, and the stability of working for a company backed by two strong parent organizations.",
              },
              {
                title: "Industry Impact",
                description:
                  "AI data centers are the defining infrastructure build of this decade. Be part of the team making it happen.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 sm:p-8 border border-brand-muted/30"
              >
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{benefit.title}</h3>
                <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
