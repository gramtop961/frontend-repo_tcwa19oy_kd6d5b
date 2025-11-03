import React from 'react';
import { ChartPie, IndianRupee, Users, CheckCircle2, Info, Phone } from 'lucide-react';

const formatINR = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

const Analytics = () => {
  const stats = {
    totalEvents: 1523,
    successRate: 96,
    serviceTypes: 7,
    providers: 248,
    revenue: 25500000,
  };

  const split = {
    provider: Math.round(stats.revenue * 0.7),
    company: Math.round(stats.revenue * 0.3),
  };

  return (
    <section id="analytics" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Platform Analytics</h2>
            <p className="text-slate-600 mt-1">Live overview of performance and growth</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <ChartPie size={18} /> Refreshed daily
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="text-slate-500 text-sm">Events Completed</div>
            <div className="mt-2 text-3xl font-bold">{stats.totalEvents.toLocaleString('en-IN')}</div>
            <div className="mt-3 h-2 w-full rounded bg-slate-100">
              <div className="h-2 rounded bg-emerald-500" style={{ width: '80%' }} />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="text-slate-500 text-sm">Success Rate</div>
            <div className="mt-2 text-3xl font-bold">{stats.successRate}%</div>
            <div className="mt-3 h-2 w-full rounded bg-slate-100">
              <div className="h-2 rounded bg-indigo-500" style={{ width: `${stats.successRate}%` }} />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="text-slate-500 text-sm">Service Types Booked</div>
            <div className="mt-2 text-3xl font-bold">{stats.serviceTypes}</div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Users size={14} /> Photography, Videography, DJ, Decoration, Gift Packing, Catering, Editing
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100">
            <div className="text-slate-500 text-sm">Collaborative Providers</div>
            <div className="mt-2 text-3xl font-bold">{stats.providers}</div>
            <div className="mt-3 flex items-center gap-2 text-emerald-600 text-sm">
              <CheckCircle2 size={16} /> Verified & Active
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900">Earnings Overview</h3>
              <div className="inline-flex items-center gap-2 text-slate-500 text-sm"><IndianRupee size={16}/> All amounts in ₹</div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-200">
                <div className="text-emerald-700 text-sm">Total Revenue</div>
                <div className="mt-1 text-2xl font-bold text-emerald-900">{formatINR(stats.revenue)}</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/60 border border-indigo-200">
                <div className="text-indigo-700 text-sm">Provider (70%)</div>
                <div className="mt-1 text-2xl font-bold text-indigo-900">{formatINR(split.provider)}</div>
              </div>
              <div className="rounded-xl p-4 bg-gradient-to-br from-amber-50 to-amber-100/60 border border-amber-200">
                <div className="text-amber-700 text-sm">Company (30%)</div>
                <div className="mt-1 text-2xl font-bold text-amber-900">{formatINR(split.company)}</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="h-3 w-full bg-slate-100 rounded">
                <div className="h-3 bg-indigo-500 rounded-l" style={{ width: '70%' }} />
              </div>
              <div className="mt-2 flex justify-between text-xs text-slate-600">
                <span>Providers 70%</span>
                <span>Company 30%</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-100 space-y-4" id="about">
            <div className="flex items-center gap-2 text-slate-900 font-semibold"><Info size={16}/> About Us</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Happy Ties is a trusted marketplace for end-to-end event management across India. We connect clients with verified photographers, videographers, DJs, caterers, decorators, gift packers, and editors to deliver seamless celebrations.
            </p>
            <div className="flex items-center gap-2 text-slate-900 font-semibold" id="contact"><Phone size={16}/> Contact Us</div>
            <p className="text-slate-600 text-sm">Email: hello@happyties.in • +91-98765-43210</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
