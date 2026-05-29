import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-stone-900">
          <div className="space-y-4">
            <span className="text-white font-serif font-black text-xl tracking-wide">Prakriti</span>
            <p className="text-xs text-stone-500 leading-relaxed">
              Registered Grassroots Non-Governmental Organization working toward sustainable rural ecosystems, health, and livelihood security.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Core Directory</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-white transition">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition">
                  Transparency & Impact
                </Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-white transition">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Field Offices</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Prakriti Field Center, Block B, Almora-Nainital Road, Uttarakhand, 263601, India.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Primary Contact</h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Email: contact@prakritifoundation.org
              <br />
              Phone: +91 5962 254812
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <span>&copy; 2026 Prakriti Grassroots Foundation. All rights reserved.</span>
          <span>Registered NGO Registration No: S/19482/UK</span>
        </div>
      </div>
    </footer>
  );
}
