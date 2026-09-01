import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-delta-navy text-white">
      <div className="container-px py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Logo className="h-9 w-9" />
            <h3 className="text-xl font-extrabold">
              DELTA <span className="text-delta-green">AGRO FOODS</span>
            </h3>
          </div>
          <p className="text-sm text-gray-300 max-w-xs">
            Manufacturers and exporters of Halal certified frozen package
            foods, ready-to-eat culinary delights, and agro-based products.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-delta-gold mb-3">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Hussain: 75071 00026</li>
            <li>Rayaan: 90210 70218</li>
            <li>info@deltaagrofoods.com</li>
            <li>deltaagrofoods@gmail.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-delta-gold mb-3">Address</h4>
          <p className="text-sm text-gray-300 mb-3">
            <span className="block font-medium text-white">Office:</span>
            6/B, Goyal Industrial Premises, J-514, J Block, M.I.D.C.,
            Anucool Chowk, Bhosari, Pune - 411026
          </p>
          <p className="text-sm text-gray-300">
            <span className="block font-medium text-white">Factory:</span>
            SR no 215/15, Saraswati Society, Ganesh Nagar, Talawade, Pune -
            412109
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Delta Agro Foods. All rights reserved.
      </div>
    </footer>
  );
}
