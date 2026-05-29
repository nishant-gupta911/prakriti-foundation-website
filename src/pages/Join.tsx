import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Join() {
  const [donationAmount, setDonationAmount] = useState(1000);
  const [selectedTier, setSelectedTier] = useState('tier-a');
  const [showDonationSuccess, setShowDonationSuccess] = useState(false);
  const [showVolunteerSuccess, setShowVolunteerSuccess] = useState(false);

  const handleTierSelect = (tier: string, amount: number) => {
    setSelectedTier(tier);
    setDonationAmount(amount);
    setShowDonationSuccess(false);
  };

  const handleDonationSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowDonationSuccess(true);
  };

  const handleVolunteerSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShowVolunteerSuccess(true);
  };

  return (
    <main className="flex-grow py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded inline-block border border-emerald-100 font-sans">
            Frontline Participation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
            Partnership, Livelihoods, & Support
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
            Enable our field operations by sponsoring specialized programs or by registering directly to assist local community initiatives.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">Sponsor Field Action</h2>
              <p className="text-stone-500 text-xs leading-relaxed font-sans">
                Select a specific operational tier. We will email direct quarterly implementation updates detailing the specific settlement your funds supported.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className={`rounded-xl p-5 space-y-2 cursor-pointer transition select-none flex flex-col justify-between border-2 ${
                  selectedTier === 'tier-a' ? 'border-emerald-900 bg-white' : 'border-stone-200 bg-white hover:border-emerald-900'
                }`}
                onClick={() => handleTierSelect('tier-a', 1000)}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border inline-block ${
                      selectedTier === 'tier-a'
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    Tier A
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 font-serif mt-2">₹1,000</h3>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal font-sans">
                  Sponsors textbooks, write-in notebooks, and custom reading packages for one child for an entire academic year.
                </p>
              </div>

              <div
                className={`rounded-xl p-5 space-y-2 cursor-pointer transition select-none flex flex-col justify-between ${
                  selectedTier === 'tier-b' ? 'border-2 border-emerald-900 bg-white' : 'border border-stone-200 bg-white hover:border-emerald-900'
                }`}
                onClick={() => handleTierSelect('tier-b', 3000)}
              >
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border inline-block ${
                      selectedTier === 'tier-b'
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                        : 'bg-stone-50 text-stone-600 border-stone-200'
                    }`}
                  >
                    Tier B
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 font-serif mt-2">₹3,000</h3>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal font-sans">
                  Funds a dedicated women's self-help guild craft kit, containing tools, yarn, and eco-weaving gears.
                </p>
              </div>

              <div
                className={`rounded-xl p-5 space-y-2 cursor-pointer transition select-none flex flex-col justify-between col-span-1 sm:col-span-2 ${
                  selectedTier === 'tier-c' ? 'border-2 border-emerald-900 bg-white' : 'border border-stone-200 bg-white hover:border-emerald-900'
                }`}
                onClick={() => handleTierSelect('tier-c', 5000)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border inline-block ${
                        selectedTier === 'tier-c'
                          ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                          : 'bg-stone-50 text-stone-600 border-stone-200'
                      }`}
                    >
                      Tier C
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 font-serif mt-2">₹5,000</h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                    High Field Impact
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 leading-normal font-sans">
                  Directly covers medical consumables, laboratory screenings, and physical diagnostic kits for one complete mobile medical camp deployment.
                </p>
              </div>
            </div>

            <form className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm" onSubmit={handleDonationSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Name</label>
                  <input
                    type="text"
                    placeholder="Anjali Gupta"
                    required
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Email</label>
                  <input
                    type="email"
                    placeholder="anjali@gmail.com"
                    required
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Selected Amount (INR)</label>
                <input
                  type="number"
                  value={donationAmount}
                  min="100"
                  onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                  className="w-full px-4 py-2.5 bg-stone-50 border border-emerald-900 rounded-xl text-sm font-bold text-emerald-900 focus:outline-none transition"
                />
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition">
                Dispatch Resource Donation
              </button>
              {showDonationSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl text-center font-sans">
                  Frontline donation dispatch queue initialized. An official tax registration receipt (80G clearance form) has been formatted and emailed.
                </div>
              )}
            </form>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900 tracking-tight">Register for Field Programs</h2>
              <p className="text-stone-500 text-xs leading-relaxed font-sans">
                We coordinate seasonal field deployment opportunities for community outreach, design facilitators, and medical assistants. Specify physical availability and interests below.
              </p>
            </div>

            <form className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm" onSubmit={handleVolunteerSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Full Name</label>
                  <input
                    type="text"
                    placeholder="Vivek Kumar"
                    required
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Email Address</label>
                  <input
                    type="email"
                    placeholder="vivek@gmail.com"
                    required
                    className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Frontline Domain Focus</label>
                <select
                  required
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition"
                >
                  <option value="education">Project Shiksha (Literacy & Reading Classes)</option>
                  <option value="medical">Swasthya Outreach (Medical Assistance & Clinic Support)</option>
                  <option value="handicrafts">Green Livelihoods (Guild Workshops & Marketing Coordination)</option>
                  <option value="digital">Digital Advocate (Resource Documentation & Program Writing)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 font-sans">Prior Field Segment Experience</label>
                <textarea
                  placeholder="Describe clinical, design, or education outreach background..."
                  rows={3}
                  required
                  className="w-full px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 text-xs focus:outline-none focus:border-emerald-900 transition resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-900 hover:bg-emerald-850 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition">
                Register to Advocate Frontline Action
              </button>
              {showVolunteerSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl text-center font-sans">
                  Frontline application successfully registered. Our regional team in Almora will coordinate orientation vectors within 4 business days.
                </div>
              )}
            </form>

            <div className="bg-stone-100 border border-stone-200 rounded-2xl p-6 md:p-8 space-y-4">
              <h3 className="font-serif font-bold text-stone-900 text-lg">Central Hub Coordinates</h3>
              <div className="space-y-3 text-xs leading-relaxed text-stone-600 font-sans">
                <p>
                  <strong className="text-stone-900 font-mono text-[10px] uppercase tracking-wider block">Physical Registry</strong>
                  Prakriti Field Center, Block B, Almora-Nainital Road, Uttarakhand, 263601, India.
                </p>
                <p>
                  <strong className="text-stone-900 font-mono text-[10px] uppercase tracking-wider block">Direct Communication Gateways</strong>
                  Email: contact@prakritifoundation.org
                  <br />
                  Phone: +91 5962 254812 (Available weekdays 09:00 - 17:00 UTC +5:30)
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
