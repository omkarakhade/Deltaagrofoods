import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Delta Agro Foods | Halal Certified Frozen Foods',
  description:
    'Delta Agro Foods - Manufacturers and exporters of Halal certified frozen package foods, ready-to-eat culinary delights, and agro-based products. Based in Pune, India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-delta-cream text-gray-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
