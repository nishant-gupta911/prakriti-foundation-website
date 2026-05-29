import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80"
            alt="Rural community outreach program"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
              Active Community Action
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-stone-50">
              Building sustainable futures from the ground up.
            </h1>
            <p className="text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Working alongside rural communities to ensure education, health, and livelihood security.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/initiatives" className="bg-emerald-900 hover:bg-emerald-850 text-white font-medium text-sm px-6 py-3 rounded-xl transition shadow">
                View Our Work
              </Link>
              <Link to="/join" className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm px-6 py-3 rounded-xl transition shadow">
                Donate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-950 text-emerald-50 py-12 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-900">
            <div className="pt-6 md:pt-0">
              <h3 className="text-4xl font-serif font-black tracking-tight text-amber-500">120+</h3>
              <p className="text-xs uppercase tracking-widest text-emerald-300 mt-2 font-semibold">Villages Reached</p>
            </div>
            <div className="pt-6 md:pt-0">
              <h3 className="text-4xl font-serif font-black tracking-tight text-amber-500">15,000+</h3>
              <p className="text-xs uppercase tracking-widest text-emerald-300 mt-2 font-semibold">Children Enrolled</p>
            </div>
            <div className="pt-6 md:pt-0">
              <h3 className="text-4xl font-serif font-black tracking-tight text-amber-500">85</h3>
              <p className="text-xs uppercase tracking-widest text-emerald-300 mt-2 font-semibold">Active Field Clinics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold">Field-Driven Progress</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                We establish self-reliant rural hubs by addressing core ecosystem gaps.
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed text-justify">
                Our primary approach prioritizes the active involvement of rural communities in mapping out and deploying structural initiatives. Rather than enforcing top-down solutions, we partner directly with local governance models and self-help systems to establish lasting field infrastructure, train local healthcare agents, and supply resources to rural schools.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed text-justify">
                By emphasizing capacity building and deep community ownership, we generate lasting community outcomes. Every initiative undergoes meticulous review to verify transparency and resource optimization.
              </p>
              <div className="pt-4 flex gap-4">
                <Link to="/about" className="text-emerald-900 font-semibold text-sm hover:underline flex items-center gap-1">
                  Read Our Complete Story →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-stone-200 rounded-2xl overflow-hidden bg-white p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-100 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Resource-Rich Primary Education</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Providing physical literature, digital infrastructure libraries, and learning packets directly to remote village schools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-100 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Primary Healthcare Outreach</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Operating certified mobile-van centers supplying diagnostic checkups and child health resources directly to homesteads.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-50 text-emerald-900 p-3 rounded-xl border border-emerald-100 flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-stone-900 text-base">Sustainable Livelihoods</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Forming robust women-led craft guilds to generate supplemental regional income via ecological cottage industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
