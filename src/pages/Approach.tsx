import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users, Briefcase, Rocket, Award, Star,
  Flag, BarChart, Lightbulb, Globe,
  ArrowRight, Mouse, Plus,
  Target, Heart, Trophy, BookOpen, User,
  ChevronLeft, ChevronRight, Calendar, Utensils, Smile, ImageIcon, Sparkles, PartyPopper, Linkedin,
  Shield, Handshake, CheckCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { lifeAtCybaemtechSeoData } from "@/data/seo/lifeAtCybaemtechSeo";

const useSEO = () => {
  return (
    <SEOHead
      title={lifeAtCybaemtechSeoData.title}
      description={lifeAtCybaemtechSeoData.description}
      canonical={lifeAtCybaemtechSeoData.canonical}
      keywords={lifeAtCybaemtechSeoData.keywords}
      ogTitle={lifeAtCybaemtechSeoData.ogTitle}
      ogDescription={lifeAtCybaemtechSeoData.ogDescription}
      twitterTitle={lifeAtCybaemtechSeoData.twitterTitle}
      twitterDescription={lifeAtCybaemtechSeoData.twitterDescription}
      jsonLd={lifeAtCybaemtechSeoData.jsonLd}
    />
  );
};

/* --- HERO --- */
const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isPlayingMobile, setIsPlayingMobile] = useState(false);
  return (
    <section ref={ref} className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl"
          >
            <motion.span variants={itemVariants} className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 bg-primary/5 px-3 py-1 rounded-full">
              Life At Cybaem Tech
            </motion.span>

            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Build.<br />
              Innovate.<br />
              <span className="text-primary italic font-medium" style={{ fontFamily: "cursive" }}>Grow Together.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hidden lg:block text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              We are problem solvers, innovators and dreamers. Together, we build technology that creates impact and shapes the future.
            </motion.p>

            <motion.div variants={itemVariants} className="hidden lg:flex flex-wrap items-center gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Explore Our Culture <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold border border-border text-foreground bg-background rounded-full hover:bg-muted transition-colors shadow-sm">
                Join Our Team <ArrowRight size={16} className="text-primary" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image/Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[600px] mt-12 lg:mt-0"
          >
            <div className="relative rounded-[2rem] bg-[#f8faff] p-[3px] shadow-[0_20px_60px_rgba(15,76,255,0.15)] border border-blue-50/50">
              <div className="relative rounded-[1.8rem] overflow-hidden aspect-[4/3.2] bg-slate-100 border-4 border-white shadow-inner">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src="/video/video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/10"></div>

              </div>

              {/* Top Left Quote Decoration */}
              <div className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 w-16 h-16 lg:w-[72px] lg:h-[72px] bg-white rounded-full shadow-lg border border-slate-50 flex items-center justify-center">
                <span className="text-[40px] text-[#0f4cff] font-serif font-black leading-none mt-4 tracking-tighter">“</span>
              </div>

              {/* Bottom Right Floating Card */}
              <div className="absolute -bottom-6 -right-2 lg:-bottom-6 lg:-right-8 bg-white rounded-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-50 flex items-center gap-4 z-10 max-w-[250px]">
                <div className="w-11 h-11 bg-[#f0f5ff] rounded-[10px] flex items-center justify-center text-[#0f4cff] shrink-0">
                  <Users size={20} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 leading-tight text-[13px]">Celebrating People.</p>
                  <p className="font-medium text-slate-500 leading-tight text-[13px] mt-0.5">Inspiring Future.</p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-[#0f4cff] rounded-full shadow-md border-2 border-white"></div>
              </div>

              {/* Decorative dots grid behind the image */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-40 -z-10 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100"><pattern id="dots2" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#94a3b8" /></pattern><rect width="100" height="100" fill="url(#dots2)" /></svg>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};


/* --- STATS --- */
const StatsSection = () => {
  const stats = [
    { icon: Users, value: "200+", label: "Cybaemites", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Briefcase, value: "50+", label: "Active Clients", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Rocket, value: "150+", label: "Projects Delivered", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Award, value: "5+", label: "Years of Excellence", color: "text-green-600", bg: "bg-green-50" },
    { icon: Star, value: "4.8/5", label: "Employee Rating", color: "text-yellow-600", bg: "bg-yellow-50" },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-20 mt-8 lg:mt-12 mb-8 lg:mb-12">
      <div className="bg-white rounded-[1.5rem] lg:rounded-3xl shadow-xl border border-border p-6 lg:p-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 lg:gap-8 lg:divide-x divide-border">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i === 0 ? '' : 'lg:pl-8'}`}>
              <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${stat.bg} flex items-center justify-center mb-3 lg:mb-4`}>
                <stat.icon className={`w-5 h-5 lg:w-6 lg:h-6 ${stat.color}`} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-0.5 lg:mb-1">{stat.value}</h3>
              <p className="text-xs lg:text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* --- JOURNEY --- */
const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { year: "2020", title: "Founded", desc: "Cybaem Tech was established with a vision to solve real-world problems.", icon: Flag },
    { year: "2022", title: "Growth", desc: "Expanded our team and capabilities delivering successful digital solutions.", icon: BarChart },
    { year: "2024", title: "Innovation", desc: "Strengthened our expertise in Cloud, DevOps, Cybersecurity and emerging tech.", icon: Lightbulb },
    { year: "2026", title: "Global Vision", desc: "Empowering businesses worldwide with secure, scalable and future-ready solutions.", icon: Globe },
  ];

  return (
    <section ref={ref} className="py-1">
      {/*  <div className="container mx-auto px-6 lg:px-12">
         <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span variants={itemVariants} className="text-xs font-bold tracking-widest text-[#2563eb] uppercase mb-4 block">
              Our Journey
            </motion.span>
            <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              From a Vision <br /> to <span className="text-[#2563eb]">Real Impact</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Our journey is built on passion, innovation and the people who make it possible.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/about" className="inline-flex px-6 py-3 rounded-full bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white font-medium items-center gap-2 text-sm">
                Know Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative pt-12">
            <div className="absolute top-[4.5rem] left-10 right-10 h-px bg-[#e2e8f0] border-dashed border-t-2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative z-10 text-center md:text-left">
                  <h4 className="text-xl font-bold text-[#2563eb] mb-4 text-center">{item.year}</h4>
                  <div className="w-14 h-14 bg-white border border-[#e2e8f0] rounded-full flex items-center justify-center mb-6 shadow-sm mx-auto">
                    <item.icon size={22} className="text-[#2563eb]" />
                  </div>
                  <h5 className="font-bold text-foreground mb-3 text-center">{item.title}</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>*/}
    </section>
  );
};

/* --- PEOPLE --- */
const PeopleSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const people = [
    {
      name: "Rohan Bhosale",
      role: "Founder & CEO",
      quote: "Leading Business & Technology Strategy initiatives across Fortune 500 companies.",
      years: "18+",
      yearsLabel: "Years Experience",
      domain: "Global IT Strategy",
      domainLabel: "Digital Marketing",
      image: "/people/rohan.png",
      linkedin: "https://www.linkedin.com/in/rohanbhosale15/"
    },
    {
      name: "Akshay Navle",
      role: "Chief Technology AI Product Officer",
      quote: "Architecting next-generation technology solutions & leading innovation teams.",
      years: "15+",
      yearsLabel: "Years Experience",
      domain: "AI Strategy",
      domainLabel: "Product Leadership",
      image: "/people/akshay.png",
      linkedin: "https://www.linkedin.com/in/akshay-navle-2929a245/"
    },
    {
      name: "Yash Bhalekar",
      role: "Director",
      quote: "Driving financial excellence and strategic growth across global operations.",
      years: "12+",
      yearsLabel: "Years Experience",
      domain: "Business Dev",
      domainLabel: "Global Operations",
      image: "/people/yash.png",
      linkedin: "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % people.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [people.length]);

  const activePerson = people[activeIndex];

  return (
    <section className="pt-8 pb-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.5fr_2.5fr_1.5fr] gap-12 items-center">

          {/* Left Text */}
          <div>
            <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4 block">
              01 / OUR LEADERSHIP
            </span>
            <h2 className="font-display text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight mb-6">
              Meet Our<br />
              <span className="text-primary">Executive Board.</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
              Meet our CEO, CTO, and Directors—the visionary minds driving innovation and building solutions that matter.
            </p>
            <Link to="#" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:opacity-80 transition-opacity">
              View All Leaders <ArrowRight size={18} />
            </Link>
          </div>

          {/* Center Card */}
          <div className="relative">
            {/* Background shape */}
            <div className="" />

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md relative pt-8 px-8 border border-white/60 overflow-hidden shadow-[0_8px_32px_rgba(37,99,235,0.08)] rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-none rounded-bl-none"
            >
              <div className="flex flex-col md:flex-row relative">
                {/* Left: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0 p-4">
                  <img src={activePerson.image} alt={activePerson.name} className="w-full h-auto object-cover relative z-10 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-none rounded-bl-none shadow-[0_0_25px_rgba(0,0,0,0.15)]" />
                </div>
                {/* Right: Info */}
                <div className="w-full md:w-1/2 pt-10 pb-8 pl-4 pr-2 relative z-20 flex flex-col justify-center">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 relative">
                    <h3 className="text-[22px] font-bold text-foreground mb-1">{activePerson.name}</h3>
                    <p className="text-primary text-xs font-medium mb-4">{activePerson.role}</p>
                    <p className="text-[13px] font-medium leading-relaxed text-foreground mb-4">
                      "{activePerson.quote}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="bg-white rounded-2xl p-5 mx-auto w-full relative z-20 shadow-xl border border-gray-100 flex items-center justify-between">
                <div className="flex gap-8 md:gap-12 pl-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-0.5">{activePerson.years}</h4>
                    <p className="text-[10px] text-muted-foreground">{activePerson.yearsLabel}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">{activePerson.domain}</h4>
                    <p className="text-[10px] text-muted-foreground">{activePerson.domainLabel}</p>
                  </div>
                </div>
              </div>

              {/* Floating + Button */}
              {/* <button className="absolute right-12 bottom-[4.5rem] w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-30">
                <Plus size={24} />
              </button> */}
            </motion.div>
          </div>

          {/* Right List */}
          <div className="hidden lg:flex flex-col pl-0 lg:pl-6">
            {people.map((p, i) => (
              <div
                key={i}
                className={`flex items-center gap-5 py-5 border-b border-gray-100 last:border-0 cursor-pointer group ${activeIndex === i ? 'opacity-100' : 'opacity-60 hover:opacity-100'} transition-all`}
                onClick={() => setActiveIndex(i)}
              >
                <div className={`w-16 h-16 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center transition-colors ${activeIndex === i ? 'bg-primary/10' : 'bg-gray-50 group-hover:bg-primary/5'}`}>
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover relative z-10" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground text-sm mb-1">{p.name}</h4>
                  <p className="text-xs text-primary">{p.role}</p>
                </div>
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIndex === i ? 'border-primary text-primary shadow-sm' : 'border-gray-200 text-gray-400 group-hover:border-primary/50 group-hover:text-primary'}`}>
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

/* --- CELEBRATIONS --- */
const CelebrationsSection = () => {
  const celebrations = [
    {
      title: "Team Lunch",
      date: "15 May, 2025",
      desc: "Good food, great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "35+", label: "Cybaemites" },
        { icon: Utensils, value: "1", label: "Amazing Day" },
        { icon: Smile, value: "100%", label: "Good Vibes" },
      ],
      image: "/lifeatcybaemtech/TeamLunch.jpg"
    },
    {
      title: "Foundation Day 2024",
      date: "15 June, 2024",
      desc: "Celebrating our milestones and the incredible journey so far! ✨",
      stats: [
        { icon: Users, value: "100+", label: "Cybaemites" },
        { icon: Award, value: "4", label: "Years Strong" },
        { icon: Smile, value: "100%", label: "Celebration" },
      ],
      image: "/lifeatcybaemtech/Foundationday.jpg"
    },
    {
      title: "Foundation Day 2026",
      date: "15 June, 2026",
      desc: "Celebrating our milestones and the incredible journey so far! ✨",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Award, value: "6", label: "Years Strong" },
        { icon: Smile, value: "100%", label: "Celebration" },
      ],
      image: "/lifeatcybaemtech/Foundationday2026.jpg"
    },
    {
      title: "Team Outing",
      date: "21 June, 2026",
      desc: "Unwinding, relishing, and making memories together! 🌲",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Award, value: "1", label: "Day of Fun" },
        { icon: Smile, value: "100%", label: "Good Times" },
      ],
      image: "/lifeatcybaemtech/TeamOuting.jpg"
    },
    {
      title: "Diwali Celebration",
      date: "12 Nov, 2025",
      desc: "Lighting up the workspace with joy, colors, and festive vibes! 🪔",
      stats: [
        { icon: Users, value: "80+", label: "Cybaemites" },
        { icon: Sparkles, value: "Countless", label: "Memories" },
        { icon: Smile, value: "100%", label: "Festivity" },
      ],
      image: "/lifeatcybaemtech/DiwaliCelebration.jfif"
    },
    {
      title: "Women's Day",
      date: "08 Mar, 2025",
      desc: "Honoring the incredible women who make Cybaem Tech amazing! 🌸",
      stats: [
        { icon: Users, value: "40+", label: "Superwomen" },
        { icon: Heart, value: "1", label: "Special Day" },
        { icon: Smile, value: "100%", label: "Empowerment" },
      ],
      image: "/lifeatcybaemtech/Womensdaycelebration.jpg"
    },
    {
      title: "Team Lunch",
      date: "15 May, 2026",
      desc: "Good food, great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Utensils, value: "1", label: "Amazing Day" },
        { icon: Smile, value: "100%", label: "Good Vibes" },
      ],
      image: "/lifeatcybaemtech/TeamLunch.jpg"
    },
    {
      title: "Celebration at Point",
      date: "22 Jan, 2026",
      desc: "Great conversations and even better togetherness! 💙",
      stats: [
        { icon: Users, value: "150+", label: "Cybaemites" },
        { icon: Globe, value: "1", label: "Destination" },
        { icon: Smile, value: "100%", label: "Good Times" },
      ],
      image: "/lifeatcybaemtech/celebrationatpoint.jpg"
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = celebrations.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = celebrations[current];

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <PartyPopper size={20} className="text-[#2563eb]" />
            <span className="text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              Team Culture & Celebrations
            </span>
            <PartyPopper size={20} className="text-[#2563eb]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            We celebrate every milestone <br />
            <span className="font-serif italic text-primary text-5xl lg:text-6xl lowercase">together</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-2xl mx-auto">
            From festivals to achievements, our vibrant culture brings us closer as one team.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Controls */}
          <button onClick={prev} className="absolute -left-4 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors border border-gray-100">
            <ChevronLeft size={28} />
          </button>
          <button onClick={next} className="absolute -right-4 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-[#2563eb] hover:bg-gray-50 transition-colors border border-gray-100">
            <ChevronRight size={28} />
          </button>

          {/* Slide Card */}
          <div className="bg-[#041633] rounded-[32px] overflow-hidden flex flex-col relative shadow-[0_20px_50px_rgba(4,22,51,0.4)]">
            {/* Top Image */}
            <div className="w-full relative h-[250px] md:h-[350px] lg:h-[400px]">
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10"></div>

              {/* Seamless blend gradient at the bottom */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041633] via-[#041633]/80 to-transparent z-20"></div>

              <img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center animate-fade-in transition-opacity duration-500"
              />
            </div>

            {/* Bottom Content */}
            <div className="w-full px-8 pb-10 lg:px-12 lg:pb-12 pt-0 flex flex-col lg:flex-row lg:items-end justify-between relative z-30 text-white gap-8 -mt-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 w-max mb-6 border border-white/10 shadow-sm">
                  <Calendar size={16} className="text-white/80" />
                  <span className="text-sm font-medium">{slide.date}</span>
                </div>

                <h3 className="font-display text-3xl lg:text-5xl font-bold mb-4 relative w-max text-white tracking-tight">
                  {slide.title}
                  <div className="absolute -bottom-3 left-0 w-1/3 h-1 bg-[#eab308] rounded-full"></div>
                </h3>

                <p className="text-base lg:text-lg text-white/80 max-w-xl mt-6">
                  {slide.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8 lg:divide-x divide-white/10 shrink-0">
                {slide.stats.map((s, i) => (
                  <div key={i} className={`flex items-center gap-4 ${i > 0 ? 'lg:pl-8' : ''}`}>
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 shadow-sm transition-transform hover:scale-105">
                      <s.icon size={22} className="text-white/90" />
                    </div>
                    <div>
                      <div className="font-bold text-xl lg:text-2xl tracking-tight text-white">{s.value}</div>
                      <div className="text-xs lg:text-sm text-white/60 font-medium mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {celebrations.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#2563eb]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Bottom Banner */}
          {/* <div className="mt-12 bg-[#f8fafc] rounded-2xl border border-border p-6 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-5 mb-4 md:mb-0">
              <div className="w-14 h-14 bg-[#2563eb] rounded-full flex items-center justify-center shrink-0">
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Every moment. Every milestone.</h4>
                <p className="text-[#2563eb] font-serif italic text-xl flex items-center gap-2">Always together. <Heart size={18} className="text-[#2563eb]" /></p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border border-[#2563eb] text-[#2563eb] rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors flex items-center gap-2">
              <ImageIcon size={18} /> View All Moments
            </button>
          </div> */}

        </div>
      </div>
    </section>
  );
};

/* --- CULTURE VALUES --- */
const CultureSection = () => {
  const values = [
    { title: "Security First", icon: Shield, color: "text-[#60a5fa]", bg: "bg-[#eff6ff]", desc: "We prioritize security in every solution we deliver." },
    { title: "Global Perspective", icon: Globe, color: "text-[#a855f7]", bg: "bg-[#f5f3ff]", desc: "Bringing global expertise to local challenges." },
    { title: "Innovation", icon: Lightbulb, color: "text-[#34d399]", bg: "bg-[#ecfdf5]", desc: "Embracing cutting-edge technology for business." },
    { title: "Reliability", icon: CheckCircle, color: "text-[#fb923c]", bg: "bg-[#fff7ed]", desc: "Consistent, reliable solutions for business continuity." },
    { title: "Client Partnership", icon: Handshake, color: "text-[#f472b6]", bg: "bg-[#fdf2f8]", desc: "We build lasting relationships based on trust." },
    { title: "Excellence", icon: Star, color: "text-[#2dd4bf]", bg: "bg-[#f0fdfa]", desc: "Delivering high-quality solutions that exceed expectations." },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 lg:mb-16 text-center lg:text-left">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#0052cc] uppercase mb-3 block">
            WHAT DRIVES US
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Our Core <span className="text-[#0052cc] italic">Values.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6">
          {values.map((v, i) => (
            <div key={i} className="rounded-[1.5rem] p-4 sm:p-6 border border-gray-100 hover:-translate-y-1.5 transition-transform bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center text-center">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${v.bg} flex items-center justify-center mb-4 sm:mb-6 shrink-0`}>
                <v.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${v.color}`} />
              </div>
              <h4 className="font-bold text-[13px] sm:text-[15px] text-foreground mb-2 sm:mb-3 leading-tight">{v.title}</h4>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- PAGE --- */
const Approach = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans">
      {useSEO()}
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <JourneySection />
        <PeopleSection />
        <CelebrationsSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Approach;
