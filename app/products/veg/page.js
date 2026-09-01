import Image from 'next/image';
import Link from 'next/link';
import { vegProducts } from '../../../lib/products';

export const metadata = { title: 'Veg Products | Delta Agro Foods' };

export default function VegProducts() {
  return (
    <div>
      <section className="bg-delta-green py-14">
        <div className="container-px text-center text-white">
          <h1 className="text-4xl font-extrabold mb-2">Veg Product Range</h1>
          <p className="text-white/90">
            23 vegetarian frozen delicacies, 100% Halal certified.
          </p>
        </div>
      </section>

      <section className="container-px py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vegProducts.map((p) => (
          <div
            key={p.slug}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-44 w-full bg-delta-cream">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-delta-navy mb-1">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="container-px pb-16 text-center">
        <Link
          href="/products/non-veg"
          className="inline-block bg-delta-navy text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          View Non-Veg Range →
        </Link>
      </section>
    </div>
  );
}
