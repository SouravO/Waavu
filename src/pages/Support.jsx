import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Target, Users, Trophy, 
  CheckCircle, Copy, ArrowRight, ShieldCheck, 
  Landmark, CreditCard, Send, Sparkles
} from 'lucide-react';

export default function LegendLedger() {
  const [copied, setCopied] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('500');

  const bankDetails = {
    bankName: "Federal Bank",
    accountName: "WAWU Foundation for Sports and Education",
    accountNumber: "10810200024800",
    ifscCode: "FDRL0001081",
    branch: "Palakkad"
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  };

  const tiers = [
    { amount: '500', label: 'Grassroots Support', icon: Trophy },
    { amount: '1000', label: 'Equipment Module', icon: Target },
    { amount: '2500', label: 'Nutrition & Gear', icon: Heart },
    { amount: '5000', label: 'Elite Training', icon: Sparkles },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans text-[#1A1A1A]">
      {/* 1. MINIMAL NAV/BREADCRUMB */}
      <nav className="p-6 max-w-screen-xl mx-auto flex justify-between items-center text-[10px] font-mono tracking-widest opacity-40 uppercase">
        <span>Path: Home / Donate</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Secure_Protocol_v4.0</span>
      </nav>

      <main className="max-w-screen-xl mx-auto px-6 py-12 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: IMPACT SELECTION */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter leading-[0.85]">
              Support the <br /> 
              <span className="text-[#125487]">Foundation.</span>
            </h1>
            <p className="text-lg font-light text-black/40 max-w-lg">
              Join us in shaping the future of India's youth through sports and education. Every contribution fuels the next legend.
            </p>
          </header>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/[0.03] shadow-sm">
            <h2 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] mb-10 text-black/20">01. Choose Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tiers.map((tier) => (
                <button 
                  key={tier.amount}
                  onClick={() => setSelectedAmount(tier.amount)}
                  className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-6 text-left group
                    ${selectedAmount === tier.amount ? 'border-[#125487] bg-blue-50/30' : 'border-transparent bg-gray-50 hover:bg-gray-100'}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                    ${selectedAmount === tier.amount ? 'bg-[#125487] text-white' : 'bg-white text-black/20 group-hover:text-black/40'}`}>
                    <tier.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-2xl font-bold tracking-tight">₹{tier.amount}</span>
                    <span className="block text-[10px] font-mono uppercase tracking-wider opacity-40">{tier.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full mt-10 bg-[#125487] text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-blue-900/20 transition-all group">
              Donate ₹{selectedAmount} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: BANKING MODULE */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-16">
                <Landmark size={32} className="text-[#125487]" />
                <div className="text-right">
                  <p className="text-[8px] font-mono opacity-40 uppercase tracking-[0.3em]">Institutional_Transfer</p>
                  <p className="text-xs font-bold">{bankDetails.bankName}</p>
                </div>
              </div>

              <div className="space-y-8">
                <DataField 
                  label="Account_Name" 
                  value={bankDetails.accountName} 
                  onCopy={() => copyToClipboard(bankDetails.accountName, 'name')}
                  active={copied === 'name'}
                />
                <DataField 
                  label="Account_Number" 
                  value={bankDetails.accountNumber} 
                  onCopy={() => copyToClipboard(bankDetails.accountNumber, 'num')}
                  active={copied === 'num'}
                />
                <div className="grid grid-cols-2 gap-8">
                  <DataField 
                    label="IFSC_Code" 
                    value={bankDetails.ifscCode} 
                    onCopy={() => copyToClipboard(bankDetails.ifscCode, 'ifsc')}
                    active={copied === 'ifsc'}
                  />
                  <DataField label="Branch" value={bankDetails.branch} />
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">Verified 80G Entity</span>
                </div>
                <CreditCard size={20} className="opacity-20" />
              </div>
            </div>
            {/* Soft Ambient Light */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#125487] blur-[120px] rounded-full opacity-20 -mr-32 -mt-32 group-hover:opacity-30 transition-opacity" />
          </div>

          <div className="bg-white border border-black/[0.03] p-8 rounded-[2rem] flex items-center gap-6 group cursor-help">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
              <Send size={20} />
            </div>
            <div>
              <p className="text-xs font-bold">Done with your donation?</p>
              <p className="text-[10px] text-black/40 font-mono uppercase tracking-wider">Email your receipt to acknowledge your support.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ATOMIC COMPONENTS
function DataField({ label, value, onCopy, active }) {
  return (
    <div className="space-y-1">
      <p className="text-[8px] font-mono opacity-30 uppercase tracking-[0.4em]">{label}</p>
      <div className="flex justify-between items-center group/field">
        <p className="text-lg font-serif italic truncate pr-4">{value}</p>
        {onCopy && (
          <button onClick={onCopy} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            {active ? <CheckCircle size={14} className="text-emerald-400" /> : <Copy size={14} className="opacity-20 group-hover/field:opacity-100" />}
          </button>
        )}
      </div>
    </div>
  );
}