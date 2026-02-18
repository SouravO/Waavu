import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Target, Users, Mail, Phone, Zap, Trophy, 
  CheckCircle, Copy, ArrowUpRight, Sparkles, HandHeart,
  Banknote, ClipboardList
} from 'lucide-react';

export default function SupportPage() {
  const [copied, setCopied] = useState('');
  const [activeCard, setActiveCard] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '', contact: '' });

  useEffect(() => {
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
      description: "Athletic Development Fund - Palakkad",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact
      },
      notes: { address: "WAWU Foundation Office, Palakkad" },
      theme: { color: "#98ff98" }
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
    { amount: '₹500', impact: 'Training Kit for 1 Athlete', icon: Trophy, color: '#98ff98' },
    { amount: '₹2,000', impact: 'Monthly Nutrition Support', icon: Heart, color: '#224e72' },
    { amount: '₹5,000', impact: 'Tournament Participation', icon: Target, color: '#98ff98' },
    { amount: '₹10,000', impact: 'Team Equipment Sponsor', icon: Users, color: '#224e72' },
  ];

  const internshipRoles = [
    { title: 'Talent Scouting', desc: 'Identify rural athletes' },
    { title: 'Operations', desc: 'Manage events & logistics' },
    { title: 'Community', desc: 'Build school partnerships' },
    { title: 'Content', desc: 'Create athlete stories' },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#1a1a2e] to-black" />
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#98ff98]/5 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#224e72]/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.3, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: 'linear-gradient(#98ff98 1px, transparent 1px), linear-gradient(90deg, #98ff98 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 pb-20 px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#98ff98]/10 to-[#224e72]/10 border border-[#98ff98]/20 px-6 py-2 rounded-full mb-6">
            <Sparkles size={14} className="text-[#98ff98]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#98ff98]">Support & Contribute</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6">
            <span className="text-white">Be The</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#98ff98] to-[#224e72]">Change Maker</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-base font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Empowering the next generation of football champions through your support
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 mb-12">
          {/* Donate Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onMouseEnter={() => setActiveCard('donate')}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#98ff98]/20 to-[#224e72]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-[#98ff98]/10 rounded-xl">
                    <HandHeart size={32} className="text-[#98ff98]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase italic">Make a Donation</h2>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Secure Payment via Razorpay</p>
                  </div>
                </div>
                <Zap size={24} className="text-[#98ff98] opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CTA Button */}
              <button
                onClick={handleRazorpay}
                className="w-full bg-gradient-to-r from-[#98ff98] to-[#88ee88] text-black py-6 rounded-xl font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(152,255,152,0.3)] transition-all mb-8 flex items-center justify-center gap-3"
              >
                Donate Now <Zap size={20} fill="currentColor" />
              </button>

              {/* Bank Details */}
              <div className="space-y-3">
                <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Banknote size={12} /> Bank Transfer
                </p>
                <BankDetail
                  label="Account Number"
                  value="10810200024800"
                  onCopy={() => copyToClipboard("10810200024800", 'acc')}
                  active={copied === 'acc'}
                />
                <BankDetail
                  label="IFSC Code"
                  value="FDRL0001081"
                  onCopy={() => copyToClipboard("FDRL0001081", 'ifsc')}
                  active={copied === 'ifsc'}
                />
              </div>

              {/* Tax Badge */}
              <div className="mt-6 flex items-center gap-3 p-4 bg-[#98ff98]/5 border border-[#98ff98]/20 rounded-xl">
                <CheckCircle size={16} className="text-[#98ff98]" />
                <p className="text-[10px] text-white/60 font-bold">
                  All donations are <span className="text-[#98ff98] font-black">tax-deductible under 80G</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Impact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onMouseEnter={() => setActiveCard('impact')}
            onMouseLeave={() => setActiveCard(null)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#224e72]/20 to-[#98ff98]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#224e72]/20 rounded-xl">
                  <Target size={24} className="text-[#224e72]" />
                </div>
                <h2 className="text-xl font-black uppercase italic">Your Impact</h2>
              </div>

              <div className="space-y-3">
                {impactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-black/30 rounded-xl border border-white/5 hover:border-[#98ff98]/30 transition-all"
                  >
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon size={14} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-black" style={{ color: item.color }}>{item.amount}</p>
                      <p className="text-[9px] text-white/40">{item.impact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 mb-12">
          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onMouseEnter={() => setActiveCard('internship')}
            onMouseLeave={() => setActiveCard(null)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#98ff98]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#98ff98]/10 rounded-xl">
                  <Users size={24} className="text-[#98ff98]" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic">Internship Program</h2>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-wider">2026 Applications Open</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {internshipRoles.map((role, i) => (
                  <div key={i} className="p-4 bg-black/30 rounded-xl border border-white/5 hover:border-[#98ff98]/30 transition-all">
                    <p className="text-xs font-black text-white uppercase mb-1">{role.title}</p>
                    <p className="text-[9px] text-white/40">{role.desc}</p>
                  </div>
                ))}
              </div>

              {/* Application Form */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <InputField
                  placeholder="Name"
                  value={userData.name}
                  onChange={(v) => setUserData({ ...userData, name: v })}
                />
                <InputField
                  placeholder="Email"
                  value={userData.email}
                  onChange={(v) => setUserData({ ...userData, email: v })}
                />
                <InputField
                  placeholder="Phone"
                  value={userData.contact}
                  onChange={(v) => setUserData({ ...userData, contact: v })}
                />
              </div>
              <button className="w-full bg-[#98ff98] text-black py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-[#88ee88] transition-all flex items-center justify-center gap-2">
                Apply Now <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onMouseEnter={() => setActiveCard('contact')}
            onMouseLeave={() => setActiveCard(null)}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#224e72]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#224e72]/20 rounded-xl">
                  <Mail size={24} className="text-[#224e72]" />
                </div>
                <div>
                  <h2 className="text-xl font-black uppercase italic">Get In Touch</h2>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-wider">We're here to help</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl border border-white/5">
                  <Mail size={16} className="text-[#98ff98]" />
                  <div>
                    <p className="text-[9px] text-white/40 font-bold uppercase">Email</p>
                    <p className="text-sm font-bold text-white">support@wawufoundation.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-black/30 rounded-xl border border-white/5">
                  <Phone size={16} className="text-[#98ff98]" />
                  <div>
                    <p className="text-[9px] text-white/40 font-bold uppercase">Phone</p>
                    <p className="text-sm font-bold text-white">+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-[#98ff98]/10 to-[#224e72]/10 border border-[#98ff98]/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardList size={14} className="text-[#98ff98]" />
                  <p className="text-[9px] font-black text-[#98ff98] uppercase">Quick Info</p>
                </div>
                <p className="text-[10px] text-white/50">
                  Receipts issued within 48 hours. 80G certificate sent via email.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '500+', label: 'Athletes Trained' },
              { value: '50+', label: 'Partner Schools' },
              { value: '100%', label: 'Transparent' },
              { value: '24/7', label: 'Support' },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-xl text-center hover:border-[#98ff98]/30 transition-all">
                <p className="text-3xl md:text-4xl font-black text-[#98ff98] mb-2">{stat.value}</p>
                <p className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BankDetail({ label, value, onCopy, active }) {
  return (
    <div className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/10 group hover:border-[#98ff98]/30 transition-all">
      <div>
        <span className="block text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">{label}</span>
        <span className="font-mono text-sm font-bold text-white group-hover:text-[#98ff98] transition-colors">{value}</span>
      </div>
      <button 
        onClick={onCopy} 
        className="p-2 hover:bg-[#98ff98]/10 rounded-lg transition-colors"
      >
        {active ? 
          <CheckCircle size={16} className="text-[#98ff98]" /> : 
          <Copy size={16} className="text-white/20 group-hover:text-white/60" />
        }
      </button>
    </div>
  );
}

function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-black/40 border border-white/10 py-3 px-3 text-xs font-bold focus:outline-none focus:border-[#98ff98] focus:ring-1 focus:ring-[#98ff98] transition-all text-white placeholder:text-white/20 rounded-lg"
    />
  );
}
