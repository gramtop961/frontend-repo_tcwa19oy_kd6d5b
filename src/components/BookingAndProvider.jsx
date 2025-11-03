import React, { useMemo, useState } from 'react';
import { IndianRupee, Star, X, CreditCard, CalendarCheck2, Ban, UserPlus } from 'lucide-react';

const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const services = [
  {
    key: 'photography',
    title: 'Photography',
    desc: 'Candid, Pre-wedding, Reels, Studio',
    price: 15000,
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    subs: ['Reels', 'Pre-wedding', 'Candid', 'Studio'],
  },
  {
    key: 'videography',
    title: 'Videography',
    desc: 'Cinematic, Live Event, Reels',
    price: 22000,
    img: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1200&auto=format&fit=crop',
    subs: ['Reels', 'Pre-wedding', 'Cinematic', 'Live Event'],
  },
  {
    key: 'dj',
    title: 'DJ',
    desc: 'Weddings, Corporate, Parties',
    price: 18000,
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    subs: ['Weddings', 'Corporate', 'Parties'],
  },
  {
    key: 'stage',
    title: 'Stage Decoration',
    desc: 'Themes, Lighting, Backdrops',
    price: 25000,
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop',
    subs: ['Themes', 'Lighting', 'Backdrops'],
  },
  {
    key: 'gift',
    title: 'Gift Packing',
    desc: 'Custom Boxes, Themed Wrapping',
    price: 7000,
    img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1200&auto=format&fit=crop',
    subs: ['Custom Boxes', 'Themed Wrapping'],
  },
  {
    key: 'catering',
    title: 'Catering',
    desc: 'Vegetarian, Non-vegetarian, Desserts',
    price: 35000,
    img: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop',
    subs: ['Vegetarian', 'Non-vegetarian', 'Desserts'],
  },
  {
    key: 'editing',
    title: 'Editing',
    desc: 'Video Editing, Photo Editing, Color Grading',
    price: 12000,
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    subs: ['Video Editing', 'Photo Editing', 'Color Grading'],
  },
];

const RegisterModal = ({ open, onClose, onRegistered }) => {
  const [form, setForm] = useState({ name: '', service: '', location: '', phone: '', availability: 'Full-time', details: '' });

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Provider Registration</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X size={18}/></button>
        </div>
        <form
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => { e.preventDefault(); onRegistered(form); onClose(); }}
        >
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Name</label>
            <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Service Type</label>
            <select required value={form.service} onChange={(e)=>setForm({...form,service:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200">
              <option value="">Select...</option>
              {services.map(s => <option key={s.key} value={s.title}>{s.title}</option>)}
            </select>
          </div>
          <div>
            <label className="text-sm text-slate-600">Location</label>
            <input required value={form.location} onChange={(e)=>setForm({...form,location:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Contact Number</label>
            <input required pattern="[0-9]{10}" placeholder="10-digit" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200" />
          </div>
          <div>
            <label className="text-sm text-slate-600">Availability</label>
            <select value={form.availability} onChange={(e)=>setForm({...form,availability:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200">
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-slate-600">Other Details</label>
            <textarea rows={3} value={form.details} onChange={(e)=>setForm({...form,details:e.target.value})} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-2 ring-indigo-200"/>
          </div>
          <div className="md:col-span-2 text-xs text-slate-600 bg-amber-50 border border-amber-200 rounded-xl p-3">
            70% of the payment goes to the provider, 30% goes to the company/admins.
          </div>
          <div className="md:col-span-2 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl border border-slate-200">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded-xl bg-slate-900 text-white inline-flex items-center gap-2"><UserPlus size={16}/> Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProviderDashboard = ({ provider }) => {
  const events = 24;
  const earnings = 855000; // total
  const providerShare = Math.round(earnings * 0.7);
  const companyShare = Math.round(earnings * 0.3);
  const success = 94;
  const history = useMemo(() => [
    { id: 'EVT-1024', service: 'Photography', amount: 25000, rating: 5 },
    { id: 'EVT-1025', service: 'Catering', amount: 60000, rating: 4 },
    { id: 'EVT-1026', service: 'DJ', amount: 30000, rating: 5 },
    { id: 'EVT-1027', service: 'Videography', amount: 40000, rating: 5 },
  ], []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Welcome, {provider?.name || 'Provider'}</h3>
          <p className="text-slate-600 text-sm">{provider?.service || 'Your Service'} • {provider?.location || 'India'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm">Events Completed</div>
          <div className="mt-2 text-2xl font-bold">{events}</div>
          <div className="mt-3 h-2 bg-slate-100 rounded"><div className="h-2 bg-emerald-500 rounded" style={{width:'75%'}}/></div>
        </div>
        <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm">Earnings (Total)</div>
          <div className="mt-2 text-2xl font-bold">{formatINR(earnings)}</div>
        </div>
        <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm">Your 70%</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{formatINR(providerShare)}</div>
        </div>
        <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
          <div className="text-slate-500 text-sm">Success Rate</div>
          <div className="mt-2 text-2xl font-bold">{success}%</div>
          <div className="mt-3 h-2 bg-slate-100 rounded"><div className="h-2 bg-indigo-500 rounded" style={{width:`${success}%`}}/></div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Earnings Split</h4>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
            <div className="text-sm text-indigo-700">Your 70%</div>
            <div className="text-2xl font-bold text-indigo-900">{formatINR(providerShare)}</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
            <div className="text-sm text-amber-700">Company 30%</div>
            <div className="text-2xl font-bold text-amber-900">{formatINR(companyShare)}</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <div className="text-sm text-emerald-700">Total</div>
            <div className="text-2xl font-bold text-emerald-900">{formatINR(earnings)}</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm">
        <h4 className="font-semibold mb-3">Service History</h4>
        <div className="divide-y divide-slate-100">
          {history.map((h) => (
            <div key={h.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{h.service}</div>
                <div className="text-xs text-slate-500">#{h.id}</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-slate-700 font-medium">{formatINR(h.amount)}</div>
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: h.rating }).map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-amber-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onBook }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-lg transition">
      <div className="relative h-40">
        <img src={service.img} alt={service.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-lg font-semibold drop-shadow">{service.title}</div>
          <div className="text-xs opacity-90">{service.desc}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-slate-500">Starting at</div>
        <div className="text-xl font-bold">{formatINR(service.price)}</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {service.subs.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{s}</span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button onClick={()=>onBook(service)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm hover:shadow-md active:scale-[.99] transition">
            <CalendarCheck2 size={16}/> Book
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-50 text-indigo-700 px-3 py-2 text-sm hover:bg-indigo-100 transition">
            <CreditCard size={16}/> Payment
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-50 text-rose-700 px-3 py-2 text-sm hover:bg-rose-100 transition">
            <Ban size={16}/> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const BookingAndProvider = ({ openRegister, onOpenRegister }) => {
  const [activeTab, setActiveTab] = useState('book');
  const [registered, setRegistered] = useState(null);
  const [toast, setToast] = useState('');

  const handleBook = (service) => {
    setToast(`Booked ${service.title}. Our team will contact you shortly!`);
    setTimeout(()=>setToast(''), 3000);
  };

  return (
    <section id="book" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Make It Happen</h2>
            <p className="text-slate-600 mt-1">Book services or view your provider dashboard</p>
          </div>
          <div className="rounded-full bg-slate-100 p-1 inline-flex">
            <button onClick={()=>setActiveTab('book')} className={`px-4 py-2 rounded-full text-sm ${activeTab==='book'?'bg-white shadow':''}`}>Book Now</button>
            <button onClick={()=>setActiveTab('provider')} className={`px-4 py-2 rounded-full text-sm ${activeTab==='provider'?'bg-white shadow':''}`}>Provider Dashboard</button>
          </div>
        </div>

        {activeTab === 'book' ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.key} service={s} onBook={handleBook} />
            ))}
          </div>
        ) : (
          <div className="mt-8">
            {registered ? (
              <ProviderDashboard provider={registered} />
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center bg-white">
                <div className="mx-auto w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center"><UserPlus/></div>
                <h4 className="mt-3 text-lg font-semibold">Register to access your dashboard</h4>
                <p className="text-slate-600 text-sm">Track events, earnings in ₹, success rate and history after signing up.</p>
                <button onClick={onOpenRegister} className="mt-4 px-5 py-2 rounded-xl bg-slate-900 text-white">Register Now</button>
              </div>
            )}
          </div>
        )}

        {toast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-4 py-2 rounded-full shadow">
            {toast}
          </div>
        )}
      </div>

      <RegisterModal
        open={openRegister}
        onClose={()=>onOpenRegister(false)}
        onRegistered={(data)=>setRegistered(data)}
      />
    </section>
  );
};

export default BookingAndProvider;
