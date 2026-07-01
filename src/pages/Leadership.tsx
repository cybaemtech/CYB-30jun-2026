import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Settings, BarChart2, Target, Linkedin, Twitter, Mail, Quote, Users, Award, Globe, Cloud, Layers, Shield, Rocket, Lightbulb, Handshake, TrendingUp, Telescope, ShieldCheck } from "lucide-react";

const leaders = [
  {
    name: "Rohan Bhosale",
    role: "Founder & Chief Executive Officer",
    description: [
      "Rohan Bhosale founded Cybaem Tech with a vision of creating a technology company that delivers practical, scalable, and business-focused IT solutions. He leads the company's overall strategy, business growth, global partnerships, and innovation initiatives while ensuring every client receives exceptional value through technology.",
      "His focus is on building long-term client relationships, expanding global operations, and driving digital transformation through cloud technologies, cybersecurity, software development, and managed IT services.",
      "\"Technology should simplify business, strengthen security, and create opportunities for growth.\""
    ],
    image: "/people/rohan.png",
    icon: User,
    linkedin: "https://www.linkedin.com/in/rohanbhosale15/"
  },
  {
    name: "Akshay Navle",
    role: "Chief Technology & AI Product Officer",
    description: [
      "Akshay leads technology and product at Cybaem, bringing 15+ years of delivering enterprise solutions for global organizations including large-scale programs for Fortune 500 financial institutions like MasterCard and Charles Schwab.",
      "He oversees how Cybaem designs, builds, and secures every engagement from cloud architecture and cybersecurity to QA automation and generative AI with a focus on getting clients to a reliable, working outcome, not just a technically impressive one.",
      "Because he leads both engineering and product, Akshay keeps every solution anchored to the business result it's meant to drive: greater efficiency, stronger resilience, and a real competitive edge.",
      "\"Innovation is successful only when it delivers measurable business outcomes.\""
    ],
    image: "/people/akshay.png",
    icon: Settings,
    linkedin: "https://www.linkedin.com/in/akshay-navle-2929a245/"
  },
  {
    name: "Yash Bahlekar",
    role: "Director – Operations & Business Strategy",
    description: [
      "Yash Bahlekar plays a pivotal role in driving operational excellence and strategic business initiatives across Cybaem Tech. He is responsible for optimizing business processes, strengthening internal operations, and ensuring seamless collaboration between teams to deliver exceptional client experiences.",
      "With a strong focus on organizational efficiency, business planning, and sustainable growth, Yash works closely with leadership to streamline operations, improve service delivery, and support the company's expansion into new markets. His commitment to operational discipline and customer satisfaction helps build a strong foundation for long-term success.",
      "\"Operational excellence is achieved when people, processes, and technology work together with a shared purpose.\""
    ],
    image: "/people/yash.png",
    icon: BarChart2,
    linkedin: "https://www.linkedin.com/in/yash-bhalekar-imoexo/"
  },
  {
    name: "Dilip D'Souza",
    role: "Director – Global Business Relations",
    description: [
      "Dilip D'Souza leads Cybaem Tech's global business development and strategic partnership initiatives, focusing on expanding the company's international presence and building lasting relationships across key markets. He works closely with clients, partners, and stakeholders to identify new business opportunities and create value-driven collaborations.",
      "With extensive experience in international business relations and client engagement, Dilip plays a key role in connecting organizations with innovative technology solutions that support digital transformation and business growth. His expertise in fostering trusted partnerships contributes significantly to Cybaem Tech's global expansion strategy.",
      "\"Strong relationships built on trust, collaboration, and shared success create the foundation for sustainable global growth.\""
    ],
    image: "/people/Dilip D'Souza.png",
    icon: Target,
  },
  {
    name: "Sanjay Mahadeo Bobade",
    role: "Advisory - Business Transformation Leader & Growth Facilitator",
    description: [
      "Mr. Sanjay Bobade is our dedicated Business Transformation Leader focused on creating impactful solutions for Indian society. As Founder of Yuga Globe Tech, he drives initiatives in Health-Insurance, Agri-tech, and Vocational Enrichment.",
      "With a background at Microsoft, PwC, and NISG, he excels in digital government transformation. He is an alumnus of IIT Mumbai and IIM Ahmedabad."
    ],
    image: "/people/Sanjay Mahadeo Bobade.png",
    icon: User,
  }
];

const Leadership = () => {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans selection:bg-primary/10 selection:text-primary overflow-hidden">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-blue-50/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,#0052cc_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] rounded-full"></div>
          <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,#0052cc_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] rounded-full"></div>
          {/* Simple SVG wave placeholder */}
          <svg className="absolute left-[-10%] top-[10%] w-[50%] h-[100%] opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 Q25,25 50,50 T100,50 V100 H0 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">

          {/* Header Section */}
          <div className="relative mb-20 lg:mb-28">

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center relative z-10">
              {/* Left Column */}
              <div className="pt-8 lg:pt-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                    OUR LEADERSHIP
                  </span>
                  <div className="h-[2px] w-12 bg-primary/30"></div>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-6">
                  Leadership That <br />
                  Drives <span className="text-primary">Transformation</span>
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[90%] mb-12">
                  Our leadership team brings together expertise across cloud infrastructure, cybersecurity, software engineering, IT consulting, managed services, digital transformation, and business strategy.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                      <Users size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">50+</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Team Members</div>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-10 bg-slate-200"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                      <Award size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">15+</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Years of Excellence</div>
                    </div>
                  </div>

                  <div className="hidden sm:block w-px h-10 bg-slate-200"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 text-primary border border-primary/10">
                      <Globe size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary">200+</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground font-medium">Projects Delivered</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Image from User) */}
              <div className="lg:absolute lg:top-[-2rem] lg:right-[-3rem] xl:right-[-6rem] lg:w-[52%] lg:h-[calc(100%+4rem)] z-0 rounded-3xl lg:rounded-l-3xl overflow-hidden shadow-2xl lg:shadow-none pointer-events-none">
                <img src="/images/leadership-hero.png" alt="Leadership Impact" className="w-full h-full object-cover object-left" />
                {/* Fade gradient to blend with left side on desktop */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent hidden lg:block"></div>
              </div>
            </div>
          </div>

          <div className="mb-14 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Meet Our <span className="text-primary">Leadership</span></h2>
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>
          </div>

          {/* Leadership Cards */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-16 lg:mb-24">
            {leaders.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <div key={index} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded-3xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(15,76,255,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col relative z-10">
                  {/* Image Container */}
                  <div className="relative aspect-square mb-8">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + leader.name.replace(' ', '+') + '&size=400&background=f0f5ff&color=0f4cff';
                        }}
                      />
                    </div>

                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 left-5 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-50 flex items-center justify-center text-primary z-20">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col pt-2">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                      {leader.linkedin && (
                        <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors shrink-0">
                          <Linkedin size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary mb-4">{leader.role}</p>
                    <div className="text-[13px] text-muted-foreground leading-relaxed mb-6 flex-grow space-y-3">
                      {leader.description.map((para, i) => (
                        <p key={i} className={para.startsWith('"') ? "italic font-medium text-slate-700" : ""}>
                          {para}
                        </p>
                      ))}
                    </div>


                  </div>
                </div>
              );
            })}
          </div>

          {/* Our Commitment & Vision Section */}
          <div className="mb-16 lg:mb-24 mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our <span className="text-primary">Commitment & Vision</span></h2>
              <div className="flex justify-center items-center gap-1.5 mb-6">
                <div className="w-10 h-1 bg-primary rounded-full"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              </div>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                Guided by strong values and a clear vision, our leadership team is dedicated to driving sustainable growth and creating lasting impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* Our Commitment (Dark Card) */}
              <div className="bg-gradient-to-br from-[#041235] to-[#01091e] text-white rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_rgba(4,18,53,0.5)] relative overflow-hidden flex flex-col justify-between border border-blue-900/40 h-full group/card">
                {/* Animated Decorative background element (Radar/Sonar effect) */}
                <div className="absolute top-[-20%] right-[-15%] w-[500px] h-[500px] pointer-events-none opacity-40">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border border-blue-400/10 rounded-full animate-[spin_40s_linear_infinite] border-dashed"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-blue-400/10 rounded-full animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-blue-400/20 rounded-full bg-blue-500/5 animate-[pulse_4s_ease-in-out_infinite]"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border border-blue-400/30 rounded-full bg-blue-500/5"></div>
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] border border-blue-400/40 rounded-full bg-blue-400/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover/card:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
                      <ShieldCheck size={24} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-[26px] font-bold text-white mb-1 tracking-tight">Our <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Commitment</span></h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-[3px] bg-[#3b82f6] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                        <div className="w-[4px] h-[3px] bg-[#3b82f6] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-white/80 leading-relaxed mb-6 pr-4">
                    Leadership at Cybaem Tech goes beyond managing operations.<br className="hidden sm:block" /> We are committed to:
                  </p>

                  <div className="relative mb-6 pl-2 flex-grow">
                    <style>{`
                      @keyframes timeline-row {
                        0%, 100% { background-color: transparent; }
                        5%, 10% { background-color: rgba(255,255,255,0.03); }
                        15% { background-color: transparent; }
                      }
                      @keyframes timeline-icon-container {
                        0%, 100% { background-color: transparent; border-color: rgba(255,255,255,0.1); box-shadow: none; }
                        5%, 10% { background-color: rgba(59,130,246,0.2); border-color: rgba(59,130,246,0.5); box-shadow: 0 0 15px rgba(59,130,246,0.4); }
                        15% { background-color: transparent; border-color: rgba(255,255,255,0.1); box-shadow: none; }
                      }
                      @keyframes timeline-icon {
                        0%, 100% { color: rgba(255,255,255,0.7); transform: scale(1); }
                        5%, 10% { color: #93c5fd; transform: scale(1.1); }
                        15% { color: rgba(255,255,255,0.7); transform: scale(1); }
                      }
                      @keyframes timeline-text {
                        0%, 100% { color: rgba(255,255,255,0.9); transform: translateX(0); }
                        5%, 10% { color: #ffffff; transform: translateX(4px); }
                        15% { color: rgba(255,255,255,0.9); transform: translateX(0); }
                      }
                      @keyframes timeline-dot {
                        0%, 100% { background-color: #1e3a8a; box-shadow: 0 0 0px rgba(59,130,246,0); transform: translateY(-50%) scale(1); }
                        5%, 10% { background-color: #ffffff; box-shadow: 0 0 12px 2px rgba(59,130,246,1); transform: translateY(-50%) scale(1.3); }
                        15% { background-color: #1e3a8a; box-shadow: 0 0 0px rgba(59,130,246,0); transform: translateY(-50%) scale(1); }
                      }
                      @keyframes timeline-line {
                        0%, 100% { background: rgba(30,58,138,0.5); box-shadow: 0 0 0px rgba(59,130,246,0); }
                        5% { background: #60a5fa; box-shadow: 0 0 8px rgba(59,130,246,0.8); }
                        15% { background: rgba(30,58,138,0.5); box-shadow: 0 0 0px rgba(59,130,246,0); }
                      }
                    `}</style>
                    
                    <ul className="space-y-0 relative z-10 h-full flex flex-col justify-between">
                      {[
                        { icon: ShieldCheck, text: "Delivering technology with integrity" },
                        { icon: Award, text: "Maintaining the highest quality standards" },
                        { icon: Lightbulb, text: "Encouraging innovation across every team" },
                        { icon: User, text: "Investing in employee growth and development" },
                        { icon: Handshake, text: "Building lasting client relationships" },
                        { icon: BarChart2, text: "Creating measurable business impact" }
                      ].map((item, i, arr) => (
                        <li key={i} 
                          className="flex items-center text-[14px] font-medium text-white/90 relative group py-[8px] border-b border-white/5 last:border-b-0 transition-colors rounded-xl px-2 -mx-2 cursor-default"
                          style={{
                            animation: `timeline-row 6s linear infinite`,
                            animationDelay: `${i * 1}s`
                          }}
                        >
                          
                          {/* Line segment to next dot */}
                          {i < arr.length - 1 && (
                            <div 
                              className="absolute left-[9.5px] top-[50%] w-[1.5px] h-[100%] z-0"
                              style={{ 
                                animation: `timeline-line 6s linear infinite`,
                                animationDelay: `${i * 1 + 0.5}s`,
                                background: 'rgba(30,58,138,0.5)'
                              }}
                            ></div>
                          )}

                          {/* Dot on line */}
                          <div 
                            className="absolute left-[7px] top-1/2 w-[6px] h-[6px] rounded-full z-10 transition-all duration-300"
                            style={{ 
                              animation: `timeline-dot 6s linear infinite`,
                              animationDelay: `${i * 1}s`,
                              backgroundColor: '#1e3a8a',
                              transform: 'translateY(-50%)'
                            }}
                          ></div>
                          
                          <div 
                            className="ml-8 w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-transparent transition-all duration-300 relative z-10"
                            style={{
                              animation: `timeline-icon-container 6s linear infinite`,
                              animationDelay: `${i * 1}s`
                            }}
                          >
                            <item.icon size={16} 
                              className="text-white/70 transition-colors duration-300 block" 
                              style={{
                                animation: `timeline-icon 6s linear infinite`,
                                animationDelay: `${i * 1}s`
                              }}
                            />
                          </div>
                          <span 
                            className="ml-4 transition-all duration-300 relative z-10 block"
                            style={{
                              animation: `timeline-text 6s linear infinite`,
                              animationDelay: `${i * 1}s`
                            }}
                          >
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-start sm:items-center gap-4 pt-2 group/footer cursor-default mt-2">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <Target size={32} className="text-[#3b82f6] group-hover/footer:scale-110 transition-transform duration-500 group-hover/footer:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" strokeWidth={1.5} />
                  </div>
                  <div className="relative pl-4 border-l-[2px] border-[#3b82f6]/80 group-hover/footer:border-[#3b82f6] transition-colors duration-300 py-0.5">
                    <p className="text-[13px] text-white/80 group-hover/footer:text-white/100 leading-relaxed font-medium transition-colors duration-300">
                      Our goal is to become a trusted global technology partner for organizations seeking secure, scalable, and future-ready digital solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Looking Ahead (Image Background Card) */}
              <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(4,18,53,0.5)] relative flex flex-col justify-center h-full group/ahead border border-blue-900/40">
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0 bg-[#041235]">
                  <div className="absolute inset-y-0 right-0 w-[85%] lg:w-[75%] transition-transform duration-1000 group-hover/ahead:scale-105">
                    <img src="/images/it1.png" alt="Looking Ahead Background" className="w-full h-full object-cover object-right" />
                    {/* Gradients to blend image with the solid blue on the left and bottom */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#041235] via-[#041235]/80 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041235] via-[#041235]/40 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-center w-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-blue-900/30 border-2 border-blue-400/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <Telescope size={24} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-[26px] font-bold text-white mb-1 tracking-tight">Looking <span className="text-blue-300 drop-shadow-[0_0_15px_rgba(147,197,253,0.5)]">Ahead</span></h3>
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-[3px] bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                        <div className="w-[4px] h-[3px] bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-white/90 leading-relaxed mb-6 max-w-lg pr-4 font-medium">
                    As technology continues to evolve, our leadership remains focused on helping businesses navigate change with confidence.
                  </p>

                  <div className="bg-white/[0.92] backdrop-blur-md rounded-[20px] p-6 relative shadow-[0_15px_40px_rgba(0,0,0,0.2)] border border-white/40 max-w-[95%] transition-transform duration-500 group-hover/ahead:-translate-y-1">
                    <Quote className="text-blue-600 w-8 h-8 mb-4 opacity-90 fill-current drop-shadow-sm" />
                    <div className="relative pl-5">
                      <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-blue-600 rounded-full"></div>
                      <p className="text-[14px] text-slate-800 leading-relaxed font-semibold pr-2">
                        From cloud transformation and cybersecurity to enterprise software and managed IT services, we are committed to delivering innovative solutions that create lasting value for our clients, partners, and communities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-primary/5 rounded-2xl py-6 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-center gap-4 text-center max-w-5xl mx-auto border border-primary/10">
            <Quote className="text-primary opacity-60 w-8 h-8 shrink-0 rotate-180" />
            <p className="text-[15px] sm:text-[17px] text-slate-700 font-medium">
              Great leadership builds great teams. Together, we <span className="text-primary font-semibold">innovate, inspire, and make a difference.</span>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
