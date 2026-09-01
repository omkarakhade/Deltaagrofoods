import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="relative bg-white overflow-hidden">
        <div className="container-px py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-delta-gold/10 border border-delta-gold text-delta-gold font-bold text-xs px-3 py-1 rounded-full mb-4">
              100% CERTIFIED HALAL
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-delta-navy leading-tight mb-4">
              Your Trusted Source for{' '}
              <span className="text-delta-green">Quality</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              At Delta Agro Foods, we take pride in being your premier choice
              for excellence in agro-based products — dedicated manufacturers
              and exporters of frozen package foods and ready-to-eat culinary
              delights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products/veg"
                className="bg-delta-green hover:bg-delta-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore Veg Range
              </Link>
              <Link
                href="/products/non-veg"
                className="bg-delta-navy hover:bg-delta-navy/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Explore Non-Veg Range
              </Link>
            </div>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Delta Agro Foods products"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-px py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-delta-green">
          <h2 className="text-xl font-bold text-delta-navy mb-3">
            Our Philosophy
          </h2>
          <p className="text-gray-600">
            We believe frozen food should be a seamless blend of exceptional
            flavors and unmatched convenience — a wide spectrum of choices
            for every taste and occasion.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-delta-navy">
          <h2 className="text-xl font-bold text-delta-navy mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600">
            To transform frozen foods into a culinary adventure — proving
            that frozen doesn&apos;t mean compromised taste, only
            extraordinary flavor made simple.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-px">
          <h2 className="text-3xl font-extrabold text-delta-navy text-center mb-10">
            Why Choose Delta Agro Foods?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ['Quality Above All', 'Every ingredient reflects our unwavering commitment to excellence.'],
              ['Flavor Innovation', 'Traditional recipes blended with contemporary culinary techniques.'],
              ['Convenience Redefined', 'Gourmet dining at your convenience with our frozen delicacies.'],
              ['Catering to Diversity', 'From carnivores to vegetarians — a range for every table.'],
              ['Safety & Trust', 'Stringent hygiene and safety practices throughout production.'],
              ['Halal Certified', '100% certified Halal across our entire product range.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-6 rounded-xl bg-delta-cream hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-delta-green mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-delta-navy mb-4">
          Ready to bring Delta Agro Foods to your table?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-delta-gold text-delta-navy font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
                }
