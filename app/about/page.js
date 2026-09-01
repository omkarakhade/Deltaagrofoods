import Image from 'next/image';

export default function About() {
  return (
    <div>
      <section className="bg-delta-navy text-white py-16">
        <div className="container-px text-center">
          <h1 className="text-4xl font-extrabold mb-3">About Delta Agro Foods</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Pioneers in frozen food, dedicated to taste, convenience, and
            uncompromising quality.
          </p>
        </div>
      </section>

      <section className="container-px py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
          <Image
            src="/images/about.jpg"
            alt="Delta Agro Foods kitchen"
            fill
            className="object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-extrabold text-delta-navy mb-4">
            Your Trusted Source for Quality
          </h2>
          <p className="text-gray-600 mb-4">
            At Delta Agro Foods, we take pride in being your premier choice
            for excellence in agro-based products. With a commitment to
            quality and innovation, we are dedicated manufacturers and
            exporters of a wide range of frozen package foods, ready-to-eat
            culinary delights, and agro-based products.
          </p>
          <p className="text-gray-600">
            Welcome to Delta Agro Foods, where we are your reliable
            destination for exquisite frozen food creations that encapsulate
            the essence of taste, convenience, and uncompromising quality.
            With a rich history as pioneers in the food industry, we present
            a diverse range of delectable products for discerning palates
            everywhere.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-px grid md:grid-cols-2 gap-10">
          <div className="p-8 rounded-2xl bg-delta-cream border-l-4 border-delta-green">
            <h3 className="text-xl font-bold text-delta-navy mb-3">Our Philosophy</h3>
            <p className="text-gray-600">
              We believe frozen food should be a seamless blend of exceptional
              flavors and unmatched convenience. Our mission is to provide a
              wide spectrum of choices that cater to various tastes and
              occasions, ensuring every meal becomes a memorable culinary
              journey.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-delta-cream border-l-4 border-delta-navy">
            <h3 className="text-xl font-bold text-delta-navy mb-3">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to transform frozen foods into a culinary
              adventure. We believe frozen doesn&apos;t have to mean
              compromised taste — our goal is to simplify meal preparation
              while delighting your palate with extraordinary flavors.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold text-delta-navy mb-5">
            Why Choose Delta Agro Foods?
          </h3>
          <ul className="space-y-4">
            {[
              ['Quality above all', 'Every ingredient tells a story of excellence.'],
              ['Flavor innovation', 'Traditional recipes meet contemporary techniques.'],
              ['Convenience redefined', 'Gourmet dining at your convenience.'],
              ['Catering to diversity', 'From carnivores to vegetarians, starters to mains.'],
              ['Safety and trust', 'Stringent hygiene and safety practices throughout.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="text-delta-green font-bold">•</span>
                <div>
                  <span className="font-semibold text-delta-navy">{title}:</span>{' '}
                  <span className="text-gray-600">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-delta-navy mb-5">
            Our Promise: Beyond the Plate
          </h3>
          <ul className="space-y-4">
            {[
              ['Culinary artistry', 'Creativity and passion in every product.'],
              ['Continuous evolution', 'Pushing boundaries and setting new standards.'],
              ['Global palates', 'A diverse world of flavors, transcending borders.'],
              ['Customer delight', 'Your satisfaction is our true measure of success.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3">
                <span className="text-delta-navy font-bold">•</span>
                <div>
                  <span className="font-semibold text-delta-navy">{title}:</span>{' '}
                  <span className="text-gray-600">{desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-delta-green py-8">
        <div className="container-px text-center">
          <span className="inline-block bg-white text-delta-green font-extrabold text-sm px-6 py-2 rounded-full shadow">
            ✓ 100% CERTIFIED HALAL
          </span>
        </div>
      </section>
    </div>
  );
                }
