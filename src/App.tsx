import React, { useState, useEffect } from "react";
import { 
  Plane, 
  Map, 
  ShieldCheck, 
  Clock, 
  Users, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Quote,
  ArrowRight,
  Phone,
  Mail,
  Play,
  MessageSquare,
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoUrl from "./assets/images/skytrails_logo_1779017357014.png";
import safariHeroUrl from "./assets/images/safari_hero_1779016444553.png";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#ebf0e6]/90 backdrop-blur-md border-b border-navy-100 py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center text-navy-900">
        <div className="flex items-center gap-2">
          <img src={logoUrl} alt="Skytrails Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-display font-semibold text-xl tracking-tight italic">Skytrails</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold text-navy-800 hover:text-gold-500 transition-colors uppercase tracking-wider text-xs"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/254734365511" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-950 hover:bg-gold-500 text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest text-xs transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-navy-950/20"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-navy-900" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-[#ebf0e6] z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="Skytrails Logo" className="w-8 h-8 rounded-lg object-cover" />
                <span className="font-display font-semibold text-lg italic text-navy-900">Skytrails</span>
              </div>
              <button className="text-navy-900" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-semibold text-navy-900 uppercase tracking-widest text-sm"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/254734365511"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-gold-500 text-white py-4 rounded-xl font-semibold text-xl uppercase tracking-widest text-xs"
              >
                Book Your Spot Today
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'options' | 'message'>('options');

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-3xl border border-navy-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy-950 p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-xs">Skytrails Support</div>
                  <div className="text-[10px] text-gold-500 font-bold uppercase tracking-widest text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gold-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 'options' ? (
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl text-navy-800 text-sm font-medium leading-relaxed">
                    👋 Hi there! Planning a trip or safari? We're here to help you make it stress-free.
                  </div>
                  <div className="grid gap-3">
                    <button 
                      onClick={() => window.open("https://wa.me/254734365511", "_blank")}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-navy-100 hover:border-gold-500 hover:bg-gold-50/50 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-500 flex items-center justify-center shrink-0">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs uppercase tracking-wider text-xs text-navy-900">Live Chat</div>
                          <div className="text-[10px] text-navy-600/60 font-bold uppercase tracking-wider text-xs">Talk to a Representative</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-200 group-hover:text-gold-500 transition-colors" />
                    </button>

                    <button 
                      onClick={() => setStep('message')}
                      className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-navy-100 hover:border-gold-500 hover:bg-gold-50/50 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-600/80 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs uppercase tracking-wider text-xs text-navy-900">Leave a Message</div>
                          <div className="text-[10px] text-navy-600/60 font-bold uppercase tracking-wider text-xs">We'll email you back</div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-200 group-hover:text-gold-500 transition-colors" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <button 
                    onClick={() => setStep('options')}
                    className="text-[10px] font-semibold uppercase tracking-wider text-xs text-navy-600/60 hover:text-gold-500 flex items-center gap-1 mb-2"
                  >
                    <ChevronRight className="w-3 h-3 rotate-180" /> Back
                  </button>
                  <div className="space-y-3 font-display">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-4 rounded-xl bg-white border border-navy-100 text-sm font-bold focus:outline-none focus:border-gold-500"
                    />
                    <textarea 
                      placeholder="How can we help with your Visa or Safari?" 
                      rows={3}
                      className="w-full p-4 rounded-xl bg-white border border-navy-100 text-sm font-bold focus:outline-none focus:border-gold-500 resize-none"
                    ></textarea>
                    <button className="w-full bg-navy-950 text-white py-4 rounded-xl font-semibold text-xs uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-gold-500 transition-all">
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold-500 text-white shadow-3xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageSquare className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-navy-950 rounded-full border-2 border-white flex items-center justify-center animate-bounce text-[10px] font-semibold italic">
          !
        </span>
      </button>
    </div>
  );
};

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#ebf0e6]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          className="lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-3 items-center">
            <div className="label-mini w-fit text-[10px]">
              <span>🌍 International Travel Experts</span>
            </div>
            <div className="label-mini w-fit text-[10px] bg-navy-50 text-navy-600 border-navy-100">
              <span>📍 Nairobi, Kenya</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-semibold leading-[0.95] tracking-normal text-navy-950">
            TURN DREAMS INTO <br />
            <span className="text-gold-500 italic">REALITY.</span>
          </h1>
          <p className="text-navy-800 text-xl leading-relaxed max-w-xl font-medium">
            From unforgettable Kenyan safaris to successful visa applications and global flight ticketing—we handle the hard part while you focus on the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a 
              href="https://wa.me/254734365511" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gold-500 hover:bg-gold-600 text-white px-10 py-5 rounded-xl font-semibold text-lg uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-gold-500/20"
            >
              Book Consultation Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col">
              <span className="font-semibold text-3xl leading-tight text-navy-900 tracking-normal">98%</span>
              <span className="text-[10px] uppercase tracking-wider text-xs font-bold text-navy-600/60 tracking-widest leading-none">Visa Success Rate</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group cursor-pointer" onClick={() => setShowVideo(true)}>
            <img 
              src={safariHeroUrl} 
              alt="Kenyan Safari" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transform group-hover:scale-125 transition-all duration-500">
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </div>
            </div>
            {/* Play Badge */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4">
              <div className="bg-gold-500 text-white font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest text-xs italic">Watch Our Story</div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl shadow-navy-900/10 border border-navy-50 flex flex-col items-center">
            <div className="bg-gold-100 text-gold-600 text-[10px] font-semibold uppercase tracking-widest text-xs px-2 py-1 rounded mb-1">Approved</div>
            <div className="text-2xl font-semibold text-navy-900 tracking-normal">Canada 🇨🇦</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-navy-950/95 backdrop-blur-sm"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-10 right-10 text-white hover:text-gold-500 transition-colors z-[210]"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-5xl aspect-video bg-navy-900 rounded-[2rem] overflow-hidden shadow-4xl border border-navy-800 relative flex items-center justify-center"
            >
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/P8frC_cLLD4?autoplay=1&mute=1" 
                title="Skytrails Safari Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ProblemSolution = () => {
  const problems = [
    "Visa rejections due to small mistakes",
    "Confusing application processes",
    "Unreliable travel agents",
    "Difficulty planning safe, memorable safaris"
  ];

  return (
    <section className="py-32 bg-[#f3f7f0] border-y border-navy-100" id="problem">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="label-mini !bg-amber-50 !text-amber-600">The Problem</div>
            <h2 className="text-5xl md:text-6xl font-display font-semibold tracking-normal text-navy-950 leading-[1.05]">
              TRAVEL PLANNING IS <span className="text-amber-500 underline decoration-4 underline-offset-8">OVERWHELMING.</span>
            </h2>
            <p className="text-navy-600/80 text-xl font-medium leading-relaxed italic">
              "Most people waste time, money, and opportunities trying to figure it out alone."
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-navy-100 group hover:border-amber-500/20 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="text-navy-800 font-bold text-sm tracking-tight">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] bg-navy-950 flex flex-col justify-center gap-8 shadow-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl"></div>
            <div className="w-20 h-20 rounded-2xl bg-gold-500 flex items-center justify-center text-white">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-5xl font-display font-semibold text-white leading-tight tracking-normal">WE SIMPLIFY <span className="text-gold-500">EVERYTHING.</span></h2>
            <p className="text-white text-xl font-medium leading-relaxed">
              At Skytrails International Kenya, we guide you step-by-step through visa applications and create seamless safari experiences tailored to you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white font-semibold uppercase tracking-widest text-xs text-xs py-3 px-6 rounded-xl bg-white/5 border border-white/10 w-fit">
                <CheckCircle2 className="w-4 h-4 text-gold-500" /> 
                Smooth. Fast. Reliable.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "Expert Visa Assistance",
      desc: "We handle applications for Canada, Europe, USA, Australia—reducing errors and increasing approval chances.",
      icon: "🛡️",
      color: "bg-navy-100 text-blue-600"
    },
    {
      title: "Customized Safaris",
      desc: "Explore Kenya like never before with personalized packages designed for unforgettable memories.",
      icon: "🦒",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Flight Ticketing",
      desc: "Seamless global flight bookings. We secure the best routes and rates for your schedule.",
      icon: "✈️",
      color: "bg-sky-100 text-sky-600"
    },
    {
      title: "Fast & Reliable Process",
      desc: "We save you time by handling complex paperwork and logistics efficiently every step of the way.",
      icon: "⚡",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#ebf0e6]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="label-mini mb-6">Our Services</div>
        <h2 className="text-5xl md:text-7xl font-display font-semibold mb-16 text-navy-950 tracking-normal italic uppercase tracking-wider text-xs">What We <span className="text-gold-500">Do Best</span></h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bold-card flex flex-col items-start text-left gap-6 group hover:border-gold-500/30 transition-all hover:shadow-xl hover:shadow-navy-900/5"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${service.color} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold text-navy-950 tracking-tight uppercase tracking-wider text-xs leading-none">{service.title}</h3>
              <p className="text-navy-600/80 font-medium leading-relaxed leading-snug">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Book Consultation", desc: "Expert assessment of your travel needs." },
    { num: "02", title: "Submit Documents", desc: "We guide you on exactly what's required." },
    { num: "03", title: "We Handle Processing", desc: "Paperwork, logistics, and follow-ups." },
    { num: "04", title: "Travel Confidently", desc: "Your journey starts here without the stress." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-navy-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="text-white font-display font-semibold text-5xl tracking-normal mb-2 italic">{step.num}</div>
              <h3 className="text-lg font-semibold uppercase tracking-widest text-xs text-gold-500">{step.title}</h3>
              <p className="text-white text-sm font-bold uppercase tracking-wider text-xs tracking-tight leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { text: "Skytrails made my visa process smooth and stress-free. Highly recommend!", author: "International Student" },
    { text: "The safari experience was beyond amazing—everything was perfectly planned!", author: "Nature Photographer" }
  ];

  return (
    <section className="py-32 bg-[#f3f7f0] border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bold-card relative flex flex-col gap-6"
            >
              <div className="text-gold-500">
                <Quote className="w-12 h-12 opacity-20" />
              </div>
              <p className="text-navy-900 text-2xl font-semibold tracking-tight leading-tight italic">"{r.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-600/80 font-semibold text-xs">
                  {r.author[0]}
                </div>
                <div>
                  <div className="text-navy-950 font-semibold text-sm uppercase tracking-wider text-xs">{r.author}</div>
                  <div className="text-[10px] text-navy-600/60 font-bold uppercase tracking-widest text-xs">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "How long does visa processing take?", a: "Processing times vary by country, but we guide you on timelines and ensure fast submission." },
    { q: "Do you guarantee visa approval?", a: "No one can guarantee approval, but we significantly improve your chances by avoiding common mistakes." },
    { q: "Can I customize my safari package?", a: "Yes, all our safaris are tailored to your preferences and budget." },
    { q: "Do you assist first-time travelers?", a: "Absolutely. We specialize in guiding beginners through the entire process." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#ebf0e6]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="label-mini !bg-navy-100 !text-navy-800 mb-6">Support</div>
          <h2 className="text-5xl md:text-6xl font-display font-semibold text-navy-950 tracking-normal italic">Common <span className="text-gold-500">Concerns</span></h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-3xl bg-white border border-navy-100 overflow-hidden transition-all hover:bg-white">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-xl text-navy-950 tracking-tight uppercase tracking-wider text-xs leading-none">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform text-gold-500 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-navy-600/80 text-lg font-medium leading-relaxed border-t border-navy-50 pt-6">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 bg-[#f3f7f0] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[#dce6d5] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f3f7f0] skew-y-1"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="label-mini mb-10 !text-sm px-6 py-2">Limited Slots Available</div>
        <h2 className="text-6xl md:text-8xl font-display font-semibold mb-10 leading-[0.9] tracking-normal text-navy-950 italic">
          Ready to Travel <br />
          <span className="text-gold-500">WITHOUT STRESS?</span>
        </h2>
        <p className="text-navy-600/80 text-2xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
          Don't risk delays or rejection. Let experts handle your journey across the globe.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <a 
            href="https://wa.me/254734365511" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 text-white px-16 py-8 rounded-[2rem] font-semibold text-2xl uppercase tracking-widest text-xs hover:bg-gold-600 transform hover:-translate-y-2 transition-all shadow-3xl shadow-gold-500/40"
          >
            👉 Start Your Journey
          </a>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="text-center">
              <div className="text-[10px] text-navy-600/60 font-semibold uppercase tracking-widest text-xs mb-2">Location</div>
              <div className="text-xl font-semibold text-navy-950 tracking-normal">Nairobi, Kenya</div>
            </div>
            <div className="w-[1px] h-12 bg-navy-100 hidden md:block"></div>
            <div className="text-center">
              <div className="text-[10px] text-navy-600/60 font-semibold uppercase tracking-widest text-xs mb-2">Call/WhatsApp</div>
              <div className="text-3xl font-semibold text-navy-950 tracking-normal">0734 365 511</div>
            </div>
            <div className="w-[1px] h-12 bg-navy-100 hidden md:block"></div>
            <div className="text-center">
              <div className="text-[10px] text-navy-600/60 font-semibold uppercase tracking-widest text-xs mb-2">Email Us</div>
              <div className="text-xl font-semibold text-gold-500 tracking-normal">info@skytrailsinternational.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-navy-900 border-t border-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Skytrails Logo" className="w-10 h-10 rounded-xl object-cover" />
            <span className="font-display font-semibold text-2xl tracking-normal italic">Skytrails International Kenya</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 text-[10px] font-semibold uppercase tracking-widest text-xs text-navy-200">
            <span className="text-white/80">📍 Nairobi, Kenya</span>
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Help Center</a>
          </div>
        </div>
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-navy-400 text-[10px] font-semibold uppercase tracking-widest text-xs">
          <p>© 2026 Skytrails International Kenya. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Instagram className="w-4 h-4" />
            <Facebook className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased selection:bg-navy-500/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <ServicesGrid />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
