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
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Instagram,
  Facebook,
  Twitter,
  Search,
  Star,
  Quote,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Sun
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoUrl from "./assets/images/skytrails_logo_1779017357014.png";
import safariHeroUrl from "./assets/images/safari_hero_1779016444553.png";

// --- Theme Colors ---
// Primary: #1a3626 (Deep Forest Green)
// Secondary: #d48217 (Sunset Orange/Gold)
// Light: #fdfaf6 (Warm White)

const TopBar = () => (
  <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#1a3626] text-white/80 text-xs font-medium tracking-wide">
    <div className="flex gap-6">
      <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-[#d48217]"/> +254 734 365 511</span>
      <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-[#d48217]"/> info@skytrailsinternational.com</span>
    </div>
    <div className="flex gap-4 items-center">
      <span className="flex items-center gap-2"><MapPin className="w-3 h-3 text-[#d48217]"/> Nairobi, Kenya</span>
      <div className="w-px h-4 bg-white/20"></div>
      <div className="flex gap-3">
        <Facebook className="w-4 h-4 hover:text-[#d48217] cursor-pointer transition-colors" />
        <Instagram className="w-4 h-4 hover:text-[#d48217] cursor-pointer transition-colors" />
        <Twitter className="w-4 h-4 hover:text-[#d48217] cursor-pointer transition-colors" />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Destinations", href: "#booking-widget" },
    { name: "Safari Packages", href: "#packages" },
    { name: "Visa Assistance", href: "#visa" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-5"}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[#1a3626]">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Skytrails Logo" className="w-10 h-10 rounded-md object-cover" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none uppercase tracking-wider text-[#1a3626]">Skytrails</span>
              <span className="text-[10px] uppercase tracking-widest text-[#d48217] font-semibold">International Kenya</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-[#1a3626] hover:text-[#d48217] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/254734365511" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d48217] hover:bg-[#b56e13] text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
            >
              Plan Your Trip
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-[#1a3626]" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-8 h-8" />
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img src={logoUrl} alt="Skytrails Logo" className="w-10 h-10 rounded-md object-cover" />
                  <span className="font-display font-bold text-xl uppercase tracking-wider text-[#1a3626]">Skytrails</span>
                </div>
                <button className="text-[#1a3626]" onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col gap-6 items-start">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold text-[#1a3626] hover:text-[#d48217] uppercase tracking-wider transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="https://wa.me/254734365511"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-[#d48217] text-white py-4 rounded font-bold uppercase tracking-widest mt-8"
                >
                  Plan Your Trip
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

const Hero = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const destination = formData.get("Destination")?.toString().toLowerCase() || "";
    const date = formData.get("Travel Date")?.toString() || "";
    const duration = formData.get("Duration")?.toString() || "";

    if (destination !== "other" && destination !== "") {
      // If product is available, scroll the client to the packages section
      const packagesSection = document.getElementById("packages");
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If product is not available, trigger WhatsApp button animation
      const destText = formData.get("Destination")?.toString() === "Other" ? "a custom destination" : formData.get("Destination")?.toString() || "somewhere";
      const message = `Hello Skytrails, I am looking for a trip to ${destText} for ${duration} starting on ${date}. Is this available?`;
      const event = new CustomEvent('trigger-whatsapp', { detail: message });
      window.dispatchEvent(event);
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={safariHeroUrl} 
          alt="Kenyan Safari" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 mb-6 border border-[#d48217] text-[#d48217] bg-black/30 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest">
            Welcome to Skytrails International
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg">
            EXPERIENCE THE <br className="hidden md:block"/>
            <span className="text-[#d48217]">WILD AFRICA</span>
          </h1>
          <p className="text-white/90 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            Tailor-made safaris, beach holidays, and expert international visa assistance from Nairobi to the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" className="bg-[#d48217] hover:bg-[#b56e13] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all">
              Explore Safaris
            </a>
            <a href="#visa" className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all">
              Visa Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Booking Widget */}
      <div id="booking-widget" className="absolute bottom-0 w-full z-20 translate-y-1/2 px-4 sm:px-6">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-4 relative">
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Destination</label>
            <div className="flex items-center gap-2 text-[#1a3626] border-b border-gray-200 pb-2 relative">
              <MapPin className="w-5 h-5 text-[#d48217] shrink-0" />
              <select 
                name="Destination" 
                className="w-full font-semibold outline-none bg-transparent appearance-none cursor-pointer pr-6" 
                defaultValue=""
              >
                <option value="" disabled>Where to?</option>
                <optgroup label="Kenya (Domestic)">
                  <option value="Maasai Mara">Maasai Mara</option>
                  <option value="Amboseli">Amboseli National Park</option>
                  <option value="Lake Nakuru">Lake Nakuru</option>
                  <option value="Diani Beach">Diani Beach</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Tsavo">Tsavo National Park</option>
                </optgroup>
                <optgroup label="Africa">
                  <option value="Zanzibar">Zanzibar, Tanzania</option>
                  <option value="Serengeti">Serengeti, Tanzania</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Egypt">Egypt</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Mauritius">Mauritius</option>
                </optgroup>
                <optgroup label="International">
                  <option value="Dubai">Dubai, UAE</option>
                  <option value="Paris">Paris, France</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Bali">Bali, Indonesia</option>
                  <option value="Turkey">Turkey</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Other">Other (Custom Destination)</option>
                </optgroup>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 pointer-events-none" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Travel Date</label>
            <div className="flex items-center gap-2 text-[#1a3626] border-b border-gray-200 pb-2">
              <Calendar className="w-5 h-5 text-[#d48217] shrink-0" />
              <input type="date" name="Travel Date" className="w-full font-semibold outline-none bg-transparent cursor-pointer" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Duration</label>
            <div className="flex items-center gap-2 text-[#1a3626] border-b border-gray-200 pb-2 relative">
              <Clock className="w-5 h-5 text-[#d48217] shrink-0" />
              <select name="Duration" className="w-full font-semibold outline-none bg-transparent appearance-none cursor-pointer pr-6">
                <option value="Any Duration">Any Duration</option>
                <option value="1 - 3 Days">1 - 3 Days</option>
                <option value="4 - 7 Days">4 - 7 Days</option>
                <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                <option value="2+ Weeks">2+ Weeks</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-0 pointer-events-none" />
            </div>
          </div>
          <button 
            type="submit" 
            className="bg-[#1a3626] hover:bg-[#11261a] text-white px-8 py-3 rounded font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all md:w-auto w-full"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="pt-40 pb-24 md:py-32 bg-[#fdfaf6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center md:mt-16">
        <div className="relative">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden border-8 border-white shadow-xl relative z-10">
            <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Safari Experience" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-full border-[10px] border-[#fdfaf6] overflow-hidden shadow-xl z-20 hidden md:block">
            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Visa Assistance" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-10 -left-10 w-32 h-32 bg-[#d48217]/10 rounded-full blur-2xl z-0"></div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#d48217]"></div>
            <span className="text-[#d48217] font-bold uppercase tracking-widest text-sm">About Skytrails</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a3626] mb-6 leading-tight">
            YOUR TRUSTED TRAVEL PARTNER IN NAIROBI
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded by passionate local travel experts, Skytrails International Kenya is dedicated to offering unique, hassle-free travel experiences. Whether you're looking to explore the majestic wildlife of the Maasai Mara, relax on the pristine beaches of Diani, or secure a visa for your international journey, we are here to guide you.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            We pride ourselves on 24/7 customer support, a best price guarantee, and personalized itineraries that cater to solo adventurers, families, and business travelers alike.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#1a3626]/10 rounded-full flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6 text-[#1a3626]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a3626] mb-1">Custom Tours</h4>
                <p className="text-xs text-gray-500">Tailored to your needs</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#d48217]/10 rounded-full flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#d48217]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1a3626] mb-1">Visa Experts</h4>
                <p className="text-xs text-gray-500">High success rates</p>
              </div>
            </div>
          </div>
          
          <a href="#contact" className="inline-block bg-[#1a3626] hover:bg-[#11261a] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all">
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

const ComprehensiveServices = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8 text-[#d48217]" />,
      title: "Flight Bookings",
      desc: "Seamless international and domestic air ticketing with major airlines."
    },
    {
      icon: <Map className="w-8 h-8 text-[#d48217]" />,
      title: "Safari Packages",
      desc: "Explore Maasai Mara, Amboseli, Samburu, and more with expert guides."
    },
    {
      icon: <Sun className="w-8 h-8 text-[#d48217]" />,
      title: "Holidays & Tours",
      desc: "Customized beach getaways to Diani, Zanzibar, Maldives, and Dubai."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#d48217]" />,
      title: "Corporate Travel",
      desc: "Efficient travel management and transport solutions for businesses."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#d48217]" />,
      title: "Visa Assistance",
      desc: "Expert guidance for Canada, US, Europe, and Australia visa applications."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-[#d48217]" />,
      title: "Travel Insurance",
      desc: "Comprehensive coverage options to ensure peace of mind while traveling."
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#1a3626] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Map pattern" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-[2px] bg-[#d48217]"></div>
          <span className="text-[#d48217] font-bold uppercase tracking-widest text-sm">What We Offer</span>
          <div className="w-12 h-[2px] bg-[#d48217]"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">
          COMPREHENSIVE TRAVEL SOLUTIONS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                {srv.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{srv.title}</h3>
              <p className="text-white/80 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedPackages = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Domestic", "International", "Honeymoon"];

  const packages = [
    {
      title: "Maasai Mara Migration Safari",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80",
      duration: "3 Days / 2 Nights",
      location: "Maasai Mara, Kenya",
      price: "From Ksh 25,500 pps",
      rating: 5,
      category: "Domestic"
    },
    {
      title: "Amboseli Elephant Trail",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
      duration: "2 Days / 1 Night",
      location: "Amboseli National Park",
      price: "From Ksh 15,000 pps",
      rating: 5,
      category: "Domestic"
    },
    {
      title: "Diani Beach Getaway",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80",
      duration: "4 Days / 3 Nights",
      location: "South Coast, Kenya",
      price: "From Ksh 28,500 pps",
      rating: 4,
      category: "Domestic"
    },
    {
      title: "Zanzibar Honeymoon Special",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80",
      duration: "5 Days / 4 Nights",
      location: "Zanzibar, Tanzania",
      price: "From Ksh 75,000 pps",
      rating: 5,
      category: "Honeymoon"
    },
    {
      title: "Dubai Desert & City Tour",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
      duration: "5 Days / 4 Nights",
      location: "Dubai, UAE",
      price: "From Ksh 105,000 pps",
      rating: 5,
      category: "International"
    },
    {
      title: "Paris Romantic Getaway",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80",
      duration: "6 Days / 5 Nights",
      location: "Paris, France",
      price: "From Ksh 185,000 pps",
      rating: 5,
      category: "Honeymoon"
    }
  ];

  const filteredPackages = activeCategory === "All" 
    ? packages 
    : packages.filter(pkg => pkg.category === activeCategory);

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-[#d48217]"></div>
            <span className="text-[#d48217] font-bold uppercase tracking-widest text-sm">Popular Tours</span>
            <div className="w-12 h-[2px] bg-[#d48217]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a3626] mb-8">
            FEATURED PACKAGES
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-[#1a3626] text-white" 
                    : "bg-gray-100 text-gray-500 hover:bg-[#d48217] hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={pkg.title} 
                className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} referrerPolicy="no-referrer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a3626] flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#d48217] fill-[#d48217]" />
                    {pkg.rating}.0
                  </div>
                  <div className="absolute top-4 left-4 bg-[#d48217] px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-md">
                    {pkg.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">
                    <MapPin className="w-3 h-3 text-[#d48217]" /> {pkg.location}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#1a3626] mb-4 leading-tight group-hover:text-[#d48217] transition-colors">{pkg.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-6 border-b border-gray-100 pb-4">
                    <Clock className="w-4 h-4 text-[#d48217]" /> {pkg.duration}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-lg text-[#1a3626]">{pkg.price}</div>
                    <a href={`https://wa.me/254734365511?text=Hello Skytrails, I am interested in the ${pkg.title} package.`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-[#d48217] hover:text-[#1a3626] transition-colors flex items-center gap-1">
                      Book Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const VisaServices = () => {
  return (
    <section id="visa" className="py-24 bg-[#fdfaf6] text-[#1a3626] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Map pattern" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d48217]"></div>
              <span className="text-[#d48217] font-bold uppercase tracking-widest text-sm">International Travel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-[#1a3626]">
              EXPERT VISA ASSISTANCE
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Don't let complicated paperwork stop you from exploring the world. We specialize in securing visas for major destinations with a highly successful track record.
            </p>
            <ul className="space-y-4 mb-10">
              {['Canada & USA Visas', 'Schengen (Europe) Visas', 'UK & Australia Visas', 'Dubai & Middle East', 'Study & Work Permits'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold text-lg text-[#1a3626]">
                  <div className="w-6 h-6 rounded-full bg-[#d48217]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#d48217]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/254734365511?text=Hello Skytrails, I need assistance with a Visa application." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a3626] hover:bg-[#11261a] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-widest transition-all shadow-xl">
              Get Visa Help Today
            </a>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Passport and tickets" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12" />
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80" referrerPolicy="no-referrer" alt="Airplane tail" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl text-center border-4 border-[#fdfaf6]">
              <div className="text-4xl font-display font-bold text-[#d48217] mb-1">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#1a3626]">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-[#d48217]"></div>
              <span className="text-[#d48217] font-bold uppercase tracking-widest text-sm">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a3626] mb-6">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Reach out to our experts today. We're ready to help you plan the perfect safari, secure your visa, or book your next international flight.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3626]/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#1a3626]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3626] text-sm uppercase tracking-widest mb-1">Call Us 24/7</h4>
                  <p className="text-gray-600 font-medium">+254 734 365 511</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3626]/5 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#1a3626]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3626] text-sm uppercase tracking-widest mb-1">Email Us</h4>
                  <p className="text-gray-600 font-medium">info@skytrailsinternational.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a3626]/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#1a3626]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a3626] text-sm uppercase tracking-widest mb-1">Our Office</h4>
                  <p className="text-gray-600 font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a3626] p-8 md:p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-display font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully! We will get back to you shortly."); }}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#d48217] transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#d48217] transition-colors" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Email Address</label>
                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#d48217] transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Service Required</label>
                <select className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#d48217] transition-colors [&>option]:text-[#1a3626]" required>
                  <option value="" disabled selected>Select a Service</option>
                  <option value="safari">Safari Package</option>
                  <option value="visa">Visa Assistance</option>
                  <option value="flight">Flight Booking</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-[#d48217] transition-colors resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#d48217] hover:bg-[#b56e13] text-white py-4 rounded-lg font-bold uppercase tracking-widest transition-colors mt-4">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0b1811] text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoUrl} alt="Skytrails Logo" className="w-12 h-12 rounded-md object-cover bg-white" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none uppercase tracking-wider text-white">Skytrails</span>
                <span className="text-[10px] uppercase tracking-widest text-[#d48217] font-semibold">International Kenya</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your premier travel partner in Nairobi, specializing in tailored safaris, global flights, and seamless visa processing.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d48217] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d48217] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#d48217] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="hover:text-[#d48217] transition-colors text-sm">About Us</a></li>
              <li><a href="#packages" className="hover:text-[#d48217] transition-colors text-sm">Safari Packages</a></li>
              <li><a href="#visa" className="hover:text-[#d48217] transition-colors text-sm">Visa Services</a></li>
              <li><a href="#contact" className="hover:text-[#d48217] transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Top Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Flight Ticketing</a></li>
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Canada Visa</a></li>
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Maasai Mara Safari</a></li>
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Dubai Packages</a></li>
              <li><a href="#" className="hover:text-[#d48217] transition-colors text-sm">Corporate Travel</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe for the latest travel deals and visa updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="bg-white/10 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:bg-white/20 text-sm" required />
              <button type="submit" className="bg-[#d48217] hover:bg-[#b56e13] px-4 py-3 rounded-r-md transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Skytrails International Kenya. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const [isWiggling, setIsWiggling] = useState(false);

  useEffect(() => {
    const handleWiggle = () => {
      setIsWiggling(true);
      setTimeout(() => setIsWiggling(false), 2000); // Stop wiggling after 2 seconds
    };

    window.addEventListener('trigger-whatsapp', handleWiggle);
    return () => window.removeEventListener('trigger-whatsapp', handleWiggle);
  }, []);

  return (
    <a 
      href="https://wa.me/254734365511" 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group ${
        isWiggling ? 'animate-[wiggle_0.3s_ease-in-out_infinite]' : ''
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-[#1a3626] font-bold text-xs py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      {/* Alert dot */}
      {isWiggling && (
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
      )}
    </a>
  );
};

function App() {
  return (
    <div className="font-sans text-[#1a3626] bg-[#fdfaf6]">
      <style dangerouslySetInnerHTML={{__html: `
        html { scroll-behavior: smooth; }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg) scale(1.1); }
          50% { transform: rotate(10deg) scale(1.1); }
        }
      `}} />
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ComprehensiveServices />
        <FeaturedPackages />
        <VisaServices />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
