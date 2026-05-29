import { Link } from 'react-router-dom';

export default function Impact() {
  return (
    <main className="flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded inline-block border border-emerald-100 font-sans">
            Accountability & Results
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Our metric of success remains the self-sustaining capacity of communities.
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We evaluate our outcomes by analyzing primary markers: reduced health-delivery response times, steady local cooperative bank reserves, and verified literacy ratings across rural cohorts.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-stone-200 pb-3">Community Case Insights</h2>

            <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-6 shadow-sm relative">
              <span className="text-7xl font-serif text-emerald-100 absolute top-4 left-4 pointer-events-none">
                &ldquo;
              </span>
              <div className="relative space-y-4">
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify italic">
                  Transitioning to drought-tolerant crop methodologies and utilizing regional organic micro-compost formulas has stabilized our harvest volumes. Previously, weather shifts would completely derail our winter storage patterns. Today, we maintain clear seed assets to survive difficult drought periods, keeping my household secure.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs">RC</div>
                  <div>
                    <h4 className="font-bold text-xs text-stone-900 font-serif">Ramesh Chandra</h4>
                    <p className="text-[10px] text-stone-400">Farmer, Bhikiasen Settlement Area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-8 space-y-6 shadow-sm relative">
              <span className="text-7xl font-serif text-emerald-100 absolute top-4 left-4 pointer-events-none">
                &ldquo;
              </span>
              <div className="relative space-y-4">
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify italic">
                  Joining the Majkhali handloom guild has generated a highly predictable auxiliary income that enters my co-savings account directly every month. This resource security let me cover my daughter's secondary school registration fees without depending on external lenders, granting us long-term independence.
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-900 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs">MD</div>
                  <div>
                    <h4 className="font-bold text-xs text-stone-900 font-serif">Maya Devi</h4>
                    <p className="text-[10px] text-stone-400">President, Green Livelihoods Guild 04</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-stone-100 border border-stone-200 rounded-2xl p-8 md:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">Verifiable Allocation</span>
              <h2 className="font-serif text-xl font-bold text-stone-900">Financial Transparency</h2>
              <p className="text-stone-500 text-xs leading-relaxed font-sans">
                Every incoming donor transaction runs through validated audits. We ensure the maximum percentage of general contributions goes directly into frontline field assets and equipment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-900 font-sans">Program Execution & Field Infrastructure</span>
                  <span className="font-bold text-emerald-900">78%</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-900 h-full rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-[10px] text-stone-400">Direct purchases of school textbook inventory, clinical screenings, raw handloom wools, and organic materials.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-900 font-sans">Logistics & Community Outreach</span>
                  <span className="font-bold text-emerald-900">15%</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-700 h-full rounded-full" style={{ width: '15%' }}></div>
                </div>
                <p className="text-[10px] text-stone-400">Frontline fuel costs for clinic vans, delivery of rural school items, and continuous field operator training.</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-stone-900 font-sans">Administrative & Compliance</span>
                  <span className="font-bold text-emerald-900 font-sans">7%</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-600 h-full rounded-full" style={{ width: '7%' }}></div>
                </div>
                <p className="text-[10px] text-stone-400">Annual financial audits, registration filing clearances, legal oversight, and central office management.</p>
              </div>
            </div>
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <p className="text-xs font-bold text-stone-900">Frontline Certified Audits</p>
                <p className="text-[10px] text-stone-500 mt-0.5">Audited quarterly by V.K. Singhal & Associates, Chartered Accountants.</p>
              </div>
              <Link to="/join" className="text-emerald-900 text-xs font-bold hover:underline">
                Sponsor a program →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
