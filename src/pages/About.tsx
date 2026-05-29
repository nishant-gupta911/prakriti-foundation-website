import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded inline-block border border-emerald-100">
              Origin story
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Establishing field-tested structures in underserved belts since 2018.
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify">
              Prakriti Grassroots Foundation was established in 2018 by a dedicated collective of social workers and field operators. The organization was born out of a commitment to resolve critical, systemic healthcare and educational disparities within rural districts. Observing the challenges faced by families residing in remote settlements, the founders realized that persistent rural security requires grassroots solutions.
            </p>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed text-justify">
              The foundation focused on establishing localized capacity building. Starting with just two mobile screening vans, we developed deep-seated community partnerships, training local youth as field advocates and healthcare coordinators to guarantee continuous health watch networks.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="border border-stone-250 rounded-2xl overflow-hidden bg-white p-2 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Environmental restoration and seedling growth"
                className="rounded-xl w-full object-cover h-[450px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white p-6 rounded-xl shadow-lg max-w-xs border border-emerald-800">
              <p className="text-xs font-serif font-semibold text-emerald-300">Continuous Presence</p>
              <p className="text-xs mt-1 text-stone-200">Our logistics centers operate uninterrupted inside targeted regional sectors across all seasons.</p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">Guiding Pillars</span>
            <h2 className="font-serif text-3xl font-extrabold text-stone-900 tracking-tight">Our Operational Values</h2>
            <p className="text-stone-500 text-xs sm:text-sm">We maintain straightforward, non-negotiable guidelines to preserve trust and secure field outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-4 shadow-sm hover:border-emerald-700 transition">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-900 border border-emerald-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Transparency</h3>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                We publish quarterly expense manifests listing resource flows and administrative breakdowns down to specific municipal segments, maintaining absolute financial accountability with stakeholders.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-4 shadow-sm hover:border-emerald-700 transition">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-900 border border-emerald-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Community-Led Design</h3>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                Field strategies are formulated in joint assemblies with village leaders. We ensure local systems authorize and lead execution to protect community ownership.
              </p>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-4 shadow-sm hover:border-emerald-700 transition">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-900 border border-emerald-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900">Long-term Resilience</h3>
              <p className="text-stone-600 text-xs leading-relaxed text-justify">
                We avoid brief intervention campaigns. Our programs are engineered to build autonomous structures that thrive without external dependencies over time.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-stone-100 border border-stone-200 rounded-2xl p-10 md:p-16">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">The Oversight Board</span>
              <h2 className="font-serif text-3xl font-extrabold text-stone-900 tracking-tight">Our Leadership Group</h2>
              <p className="text-stone-500 text-xs sm:text-sm">Professional advisors establishing direction and reviewing financial audit sheets.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-stone-200 rounded-xl p-6 text-center space-y-3 shadow-none">
                <h4 className="font-serif font-bold text-stone-900 text-base">Dr. Aditi Sharma</h4>
                <p className="text-emerald-800 font-medium text-xs">Director of Public Health</p>
                <p className="text-stone-500 text-[11px] leading-relaxed font-sans">
                  Over 14 years organizing rural medical networks, specialized in clinical operations and vaccine distribution frameworks.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-6 text-center space-y-3 shadow-none">
                <h4 className="font-serif font-bold text-stone-900 text-base">Mohan Rao</h4>
                <p className="text-emerald-800 font-medium text-xs">Trustee for Rural Livelihoods</p>
                <p className="text-stone-500 text-[11px] leading-relaxed font-sans">
                  Specialist in developing micro-credit institutions and establishing artisanal trade corridors for women's cooperatives.
                </p>
              </div>
              <div className="bg-white border border-stone-200 rounded-xl p-6 text-center space-y-3 shadow-none">
                <h4 className="font-serif font-bold text-stone-900 text-base">Karan Bisht</h4>
                <p className="text-emerald-800 font-medium text-xs">Field Operations Lead</p>
                <p className="text-stone-500 text-[11px] leading-relaxed font-sans">
                  Directly registers outreach initiatives across northern hill sectors. Coordinates logistics vectors under challenging environmental constraints.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
