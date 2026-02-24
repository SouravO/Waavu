import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Target, Users, Zap, Trophy, 
  CheckCircle, Copy, MoveRight, ArrowUpRight, Shield
} from 'lucide-react';

export default function SupportPage() {
  const [copied, setCopied] = useState('');
  const [userData, setUserData] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleRazorpay = () => {
    if (!userData.email || !userData.name) {
      alert("Please provide your details in the form below first.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: 50000,
      currency: "INR",
      name: "WAWU Foundation",
      description: "Athletic Development Fund",
      handler: function (response) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact
      },
      theme: { color: "#125487" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  const impactItems = [
    { amount: '₹500', impact: 'Training Kit for 1 Athlete', icon: Trophy },
    { amount: '₹2,000', impact: 'Monthly Nutrition Support', icon: Heart },
    { amount: '₹5,000', impact: 'Tournament Participation', icon: Target },
    { amount: '₹10,000', impact: 'Team Equipment Sponsor', icon: Users },
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20">
      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Financial_&_Support_Hub</p>
          <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12">
            Fuel The <br />
            <span className="italic font-light text-[#125487]">Movement.</span>
          </h1>
        </div>
      </section>

      {/* MAIN INTERFACE */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Donation Panel */}
          <div className="lg:col-span-8 bg-white p-8 md:p-20 space-y-20 border-r border-black/5">
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#125487] flex items-center justify-center text-white shadow-xl">
                  <Heart size={32} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif italic">Support Excellence.</h2>
                  <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest">Transaction_Ref: v4.0</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <InputField label="Operator Name" placeholder="Sharath K." value={userData.name} onChange={(v) => setUserData({...userData, name: v})} />
                <InputField label="Return Email" placeholder="email@studio.com" value={userData.email} onChange={(v) => setUserData({...userData, email: v})} />
                <InputField label="Contact Line" placeholder="+91 ..." value={userData.contact} onChange={(v) => setUserData({...userData, contact: v})} />
              </div>

              <button
                onClick={handleRazorpay}
                className="group flex items-center gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
              >
                Initiate Donation 
                <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#125487] transition-all">
                  <Zap size={24} />
                </div>
              </button>
            </div>

            <div className="pt-12 border-t border-black/5 space-y-12">
              <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.3em] block">Direct_Transfer_Protocols</span>
              <div className="grid md:grid-cols-2 gap-8">
                <BankDetail label="Account Number" value="10810200024800" onCopy={() => copyToClipboard("10810200024800", 'acc')} active={copied === 'acc'} />
                <BankDetail label="IFSC Code" value="FDRL0001081" onCopy={() => copyToClipboard("FDRL0001081", 'ifsc')} active={copied === 'ifsc'} />
              </div>
              <div className="p-6 bg-[#F5F5F5] border border-black/5 flex items-center gap-6">
                <Shield size={24} className="text-[#125487]" />
                <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest leading-relaxed">
                  80G Tax Exemption Certified // Secure Encryption Verified
                </p>
              </div>
            </div>
          </div>

          {/* Impact Panel */}
          <div className="lg:col-span-4 bg-[#F5F5F5] p-8 md:p-12 space-y-12">
            <h2 className="text-3xl font-serif italic flex items-center gap-4">
              <Target size={24} className="text-[#125487]" />
              Impact Matrix.
            </h2>
            <div className="space-y-6">
              {impactItems.map((item, i) => (
                <div key={i} className="p-8 bg-white border border-black/5 hover:border-[#125487] transition-colors flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#F5F5F5] text-black group-hover:bg-[#125487] group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-serif italic text-[#125487]">{item.amount}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-black/5 border border-black/5">
           {[
             { label: "Athletes", value: "500+" },
             { label: "Partner Schools", value: "50+" },
             { label: "Transparency", value: "100%" },
             { label: "Ops Status", value: "Active" }
           ].map((stat, i) => (
             <div key={i} className="bg-white p-12 text-center hover:bg-[#125487] hover:text-white transition-colors group">
               <p className="text-[10px] font-mono opacity-40 uppercase tracking-[0.4em] mb-4 group-hover:text-white/60">{stat.label}</p>
               <p className="text-4xl font-serif italic">{stat.value}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}

function BankDetail({ label, value, onCopy, active }) {
  return (
    <div className="flex justify-between items-center bg-[#F5F5F5] p-6 border border-black/5 hover:border-[#125487] transition-all group">
      <div>
        <span className="block text-[8px] font-mono opacity-40 uppercase tracking-widest mb-1">{label}</span>
        <span className="text-xl font-serif italic text-black group-hover:text-[#125487] transition-colors">{value}</span>
      </div>
      <button onClick={onCopy} className="p-2 opacity-20 hover:opacity-100 transition-opacity">
        {active ? <CheckCircle size={20} className="text-[#125487]" /> : <Copy size={20} />}
      </button>
    </div>
  );
}

function InputField({ label, placeholder, value, onChange }) {
  return (
    <div className="space-y-4">
      <label className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-black/10 py-4 text-black focus:border-[#125487] outline-none transition-all font-serif italic text-2xl placeholder:text-black/5"
      />
    </div>
  );
}
