export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-brand font-medium tracking-wider uppercase text-sm mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Let&apos;s Build{" "}
            <span className="text-brand">Something at Scale</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Whether you&apos;re planning a new data center campus, scaling an
            existing facility, or looking to join our team — we&apos;d like to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition text-gray-600">
                  <option>Project Inquiry</option>
                  <option>Career / Employment</option>
                  <option>Partnership / Subcontracting</option>
                  <option>Investor Relations</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand hover:bg-brand-light text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Locations
            </h2>
            <div className="space-y-8">
              <div className="bg-brand-cyan rounded-xl p-8">
                <h3 className="font-bold text-gray-900">Headquarters</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  1100 Grant Avenue
                  <br />
                  Franklinville, NJ 08322
                </p>
                <p className="mt-3 text-gray-600">
                  <span className="font-medium text-gray-700">Phone:</span>{" "}
                  1-800-505-9225
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-700">Hours:</span>{" "}
                  Monday–Friday, 7 AM – 5 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-gray-700">Emergency:</span>{" "}
                  1-800-505-9225, Press 9
                </p>
              </div>

              <div className="bg-brand-cyan rounded-xl p-8">
                <h3 className="font-bold text-gray-900">
                  Vineland Project Office
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  South Lincoln Avenue
                  <br />
                  Vineland, NJ
                </p>
                <p className="mt-3 text-gray-600 text-sm">
                  On-site project management for the 300 MW data center campus.
                </p>
              </div>

              <div className="bg-brand-cyan rounded-xl p-8">
                <h3 className="font-bold text-gray-900">
                  Southeast Division
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Gibsonville, NC
                  <br />
                  <span className="text-sm text-gray-500">
                    New headquarters under construction
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a
                  href="https://dataone.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-brand hover:text-brand-light transition-colors font-medium"
                >
                  dataone.eu &rarr;
                </a>
                <a
                  href="https://byersindustrial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-brand hover:text-brand-light transition-colors font-medium"
                >
                  byersindustrial.com &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
