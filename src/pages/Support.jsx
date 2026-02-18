import React, { useState, useEffect } from 'react';
import { Copy, CheckCircle, ArrowRight, UserPlus, CreditCard, ShieldCheck, Zap, Globe, Trophy, ChevronRight, User, Mail, Phone } from 'lucide-react';

export default function WawuFinalPro() {
  const [copied, setCopied] = useState('');
  const [hoveredSide, setHoveredSide] = useState(null);
  
  // User Account State for Prefilling
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleRazorpay = () => {
    // Basic validation
    if (!userData.email || !userData.name) {
      alert("Please provide your details in the 'User Account' section below first.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with actual Key ID
      amount: 50000, // Amount in paise (e.g., 50000 = ₹500)
      currency: "INR",
      name: "WAWU Foundation",
      description: "Athletic Development Fund - Palakkad",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
        // Here you would typically call your backend to verify the signature
      },
      prefill: {
        name: userData.name,
        email: userData.email,
        contact: userData.contact
      },
      notes: {
        address: "WAWU Foundation Office, Palakkad"
      },
      theme: {
        color: "#2563eb"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const copy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="bg-[#0a0a0c] min-h-screen w-full text-slate-200 font-sans overflow-x-hidden">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/40">
        <div className="flex items-center gap-4">
            <div className="h-8 w-1 bg-blue-600"></div>
            <span className="text-xl font-black tracking-[0.2em] uppercase text-white">WAWU <span className="text-blue-600 italic">FOUNDATION</span></span>
        </div>
        <ShieldCheck size={20} className="text-blue-500 opacity-50" />
      </nav>

      <div className="flex flex-col lg:flex-row min-h-[90vh] pt-20">
        {/* LEFT SECTOR: FELLOWSHIP */}
        <section 
            onMouseEnter={() => setHoveredSide('left')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative flex-1 flex flex-col justify-center px-8 lg:px-20 py-20 transition-all duration-500 border-r border-white/10
            ${hoveredSide === 'right' ? 'opacity-30' : 'opacity-100'}`}
        >
            <div className="max-w-xl space-y-10 relative z-10">
                <header className="space-y-4">
                    <span className="inline-block text-blue-500 font-black text-[10px] tracking-[0.4em] uppercase border-b border-blue-600/30 pb-2">2026 Careers</span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none text-white uppercase italic">
                        JOIN THE <br /> <span className="text-blue-600">OPERATIONS.</span>
                    </h1>
                </header>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-slate-400">
                        <Trophy size={18} className="text-blue-600" />
                        <p className="text-sm font-medium">Scout and manage high-potential rural athletes.</p>
                    </div>
                    <div className="flex items-center gap-4 text-slate-400">
                        <Globe size={18} className="text-blue-600" />
                        <p className="text-sm font-medium">Coordinate logistics for state-level championships.</p>
                    </div>
                </div>

                <button className="group flex items-center gap-4 bg-white text-black px-10 py-5 font-black uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                    Apply for internship <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </section>

        {/* RIGHT SECTOR: DONATION */}
        <section 
            onMouseEnter={() => setHoveredSide('right')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative flex-1 flex flex-col justify-center px-8 lg:px-20 py-20 transition-all duration-500 bg-[#0d0d10]
            ${hoveredSide === 'left' ? 'opacity-30' : 'opacity-100'}`}
        >
             <div className="max-w-xl ml-auto space-y-10 relative z-10 text-right flex flex-col items-end">
                <header className="space-y-4">
                    <span className="inline-block text-blue-500 font-black text-[10px] tracking-[0.4em] uppercase border-b border-blue-600/30 pb-2">Instant Support</span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none text-white uppercase italic">
                        POWER THE <br /> <span className="text-blue-600">FUTURE.</span>
                    </h1>
                </header>

                <div className="w-full bg-white/[0.02] border border-white/5 p-6 rounded-xl space-y-6 text-left backdrop-blur-sm">
                    <button 
                        onClick={handleRazorpay}
                        className="w-full bg-blue-600 py-5 flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20"
                    >
                        Donate via Razorpay <Zap size={18} fill="currentColor" />
                    </button>

                    <div className="space-y-3">
                        <BankDetail label="A/C Number" value="10810200024800" onCopy={() => copy("10810200024800", 'a')} active={copied === 'a'} />
                        <BankDetail label="IFSC Code" value="FDRL0001081" onCopy={() => copy("FDRL0001081", 'i')} active={copied === 'i'} />
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* USER ACCOUNT SECTION */}
      <section className="bg-white text-black py-20 px-8">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
                <User size={24} className="text-blue-600" />
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">Your Profile Details</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                <InputField 
                    label="Full Name" 
                    placeholder="John Doe" 
                    icon={<User size={16}/>} 
                    value={userData.name}
                    onChange={(v) => setUserData({...userData, name: v})}
                />
                <InputField 
                    label="Email Address" 
                    placeholder="john@example.com" 
                    icon={<Mail size={16}/>} 
                    value={userData.email}
                    onChange={(v) => setUserData({...userData, email: v})}
                />
                <InputField 
                    label="Phone Number" 
                    placeholder="+91 00000 00000" 
                    icon={<Phone size={16}/>} 
                    value={userData.contact}
                    onChange={(v) => setUserData({...userData, contact: v})}
                />
            </div>
            <p className="mt-6 text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center">
                These details are used to generate your donation receipt and internship application.
            </p>
        </div>
      </section>
    </div>
  );
}

function BankDetail({ label, value, onCopy, active }) {
    return (
        <div className="flex justify-between items-center bg-black/40 p-3 border border-white/5 rounded-lg group">
            <div>
                <span className="block text-[8px] font-black text-zinc-500 uppercase tracking-tighter">{label}</span>
                <span className="font-mono text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors">{value}</span>
            </div>
            <button onClick={onCopy} className="p-2 hover:bg-white/5 rounded-md transition-colors">
                {active ? <CheckCircle size={16} className="text-green-500" /> : <Copy size={16} className="opacity-20 group-hover:opacity-100" />}
            </button>
        </div>
    );
}

function InputField({ label, placeholder, icon, value, onChange }) {
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">{label}</label>
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</div>
                <input 
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-zinc-100 border border-zinc-200 py-4 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
            </div>
        </div>
    );
}  