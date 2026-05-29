import { Link } from 'react-router-dom';

export default function Initiatives() {
  return (
    <main className="flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded inline-block border border-emerald-100">
            Core Programs
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Structured field-level operations.
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Our current portfolio features three primary programs. Each is designed to prioritize regional leadership, verifiable metrics, and local capacity building to ensure lasting change.
          </p>
        </section>

        <section className="space-y-24">
          {/* Initiative 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                  alt="Students reading textbooks in village setting"
                  className="rounded-xl w-full h-[320px] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-emerald-900 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-emerald-100">
                  Initiative 1
                </span>
                <span className="text-stone-400 text-xs">Primary Education Support</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">Project Shiksha</h2>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                Under Project Shiksha, we establish micro-libraries within regional primary schools and bridge the digital divide. Rather than utilizing complicated visual dashboards, we focus resources on supplying essential textbooks, custom physical workbooks, and solar-charged cellular reading panels.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                By training community instructors to run supplementary reading classes after hours, we ensure students acquire stable literacy and mathematics foundations. This program operates with minimal administrative friction, routing supplies directly to village councils.
              </p>
              <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-stone-400">Target Segment</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">Ages 6 to 14 years</span>
                </div>
                <div>
                  <span className="block text-stone-400">Deployed Libraries</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">62 Active Centers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Initiative 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-emerald-900 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-emerald-100">
                  Initiative 2
                </span>
                <span className="text-stone-400 text-xs">Clinical Outreach</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">Swasthya Outreach</h2>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                Our Swasthya Outreach program deploys dedicated mobile medical vans to remote regions that lack permanent clinical clinics. Focused primarily on maternal health screenings, pediatric wellness, and general diagnostic checks, our field medical workers provide continuous first-tier support.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                Staffed by certified nurse-midwives and visiting general physicians, these clinics reduce critical travel overheads for villagers. Each patient interaction is registered and tracked to prevent anomalies in treatment patterns.
              </p>
              <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-stone-400">Monthly Diagnostic Tests</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">1,800+ Screenings</span>
                </div>
                <div>
                  <span className="block text-stone-400">Target Coverage Area</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">3 Regional Districts</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor providing diagnosis in rural setting"
                  className="rounded-xl w-full h-[320px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Initiative 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                  alt="Local craft workspace using natural elements"
                  className="rounded-xl w-full h-[320px] object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="bg-emerald-50 text-emerald-900 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded border border-emerald-100">
                  Initiative 3
                </span>
                <span className="text-stone-400 text-xs">Resource Security</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight font-serif">Green Livelihoods</h2>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                The Green Livelihoods initiative coordinates women's self-help guilds focused on producing organic farming enhancements and sustainable handicrafts. By training women in traditional fiber-weaving, organic soap preparation, and compost culture processes, we create stable local micro-enterprises.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed text-justify font-sans">
                Participants obtain supplemental household funds which are distributed directly to cooperative savings pools. We assist with fair trade marketing and coordinate wholesale distribution lines in metropolitan districts, keeping supply networks straightforward.
              </p>
              <div className="pt-2 border-t border-stone-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-stone-400">Active Cooperatives</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">45 Self-Help Guilds</span>
                </div>
                <div>
                  <span className="block text-stone-400">Trained Operators</span>
                  <span className="font-bold text-stone-900 mt-0.5 block">2,400+ Craft Artisans</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
