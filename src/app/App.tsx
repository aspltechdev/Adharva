import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import {
  Award,
  Users,
  TrendingUp,
  Target,
  Briefcase,
  Rocket,
  UserCheck,
  Crown,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Star,
  Sparkles,
  BarChart,
  MapPin,
  MessageSquare,
  MessageCircle
} from "lucide-react";
import imgLogo from "figma:asset/5243a6e4e59c6346a85148723dda5da09bf684d9.png";
import imgHero from "figma:asset/211249b99e3f70e88968b9c3243bb99d6d7b6e6e-hGeGF7Tv.png";
import imgMounikaSarmaLaptop from "../imports/146A2655-1.JPG";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: {},
  whileInView: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
  viewport: { once: true, margin: "-100px" }
};

const revealSide = (direction = "left") => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }
});

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);

    try {
      // Formspree will send an activation email to adharvacca@gmail.com on the first submission.
      // We will show the popup anyway so you can see the result.
      setIsSubmitted(true);
      e.target.reset();
      
      const response = await fetch("https://formspree.io/f/adharvacca@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        console.warn("Formspree setup needed: Please check adharvacca@gmail.com for an activation email from Formspree to start receiving real emails.");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Update page title and meta tags for SEO
    document.title = "Adharva Career Consultancy | Best Career Counselling in Bangalore for Students";

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert career counselling and guidance for students in Bangalore. IIT certified career counsellor offering personalized career planning after 10th/12th. Best career coaching for students and parents in India.');

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'career counselling for students, career guidance for students in India, career counselling in Bangalore, student career guidance, best career counsellor in Bangalore, career planning for students, career guidance after 10th, career guidance after 12th, career counselling for parents, career coaching for students');

    // Add Open Graph tags for social sharing
    const ogTags = [
      { property: 'og:title', content: 'Adharva Career Consultancy | Best Career Counselling in Bangalore' },
      { property: 'og:description', content: 'Expert career counselling and guidance for students in Bangalore. IIT certified career counsellor.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.adharvaedumilestones.com' }
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });

    // Add structured data (JSON-LD) for local business
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Adharva Career Consultancy",
      "description": "Expert career counselling and guidance for students in Bangalore",
      "url": "https://www.adharvaedumilestones.com",
      "telephone": "+91-9182321749",
      "email": "adharvacca@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": [
        "Career Counselling for Students",
        "Career Guidance after 10th",
        "Career Guidance after 12th",
        "Career Planning for Students",
        "Career Coaching for Students",
        "Career Counselling for Parents"
      ],
      "founder": {
        "@type": "Person",
        "name": "Mounika Sarma K",
        "jobTitle": "IIT Certified Career Counsellor"
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={imgLogo}
              alt="Adharva Career Consultancy Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="font-bold text-lg text-gray-900">Adharva Career Consultancy</div>
              <div className="text-xs text-gray-600">Bangalore, India</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-gray-700 hover:text-blue-900 transition-colors">Programs</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-900 transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </div>

          <a href="#contact" className="bg-blue-900 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors">
            Book Free Session
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={revealSide("left")}
              initial="initial"
              whileInView="whileInView"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-900 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">IIT Certified Career Counsellor in Bangalore</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Best Career Counselling for Students in Bangalore
              </h1>


              <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
                Professional <strong>career counselling for students</strong> and parents in India. Get personalized <strong>career planning</strong>, skill assessment, and strategic guidance to make informed decisions about your future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cta" className="bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group">
                  <span className="font-semibold">Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://wa.me/919182321749" className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-semibold">Talk on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={revealSide("right")}
              initial="initial"
              whileInView="whileInView"
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imgHero}
                  alt="Best career counsellor in Bangalore - Mounika Sarma K providing career guidance for students"
                  className="w-full h-auto object-cover"
                  itemProp="image"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center" aria-hidden="true">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Students Guided Successfully</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-gray-50" aria-label="Career counselling success statistics">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Students Guided in Career Planning", icon: Users },
              { number: "95%", label: "Student Success Rate", icon: TrendingUp },
              { number: "200+", label: "Successful Career Transitions", icon: Target },
              { number: "15+", label: "Industries Covered", icon: Briefcase }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-900 mx-auto mb-3" />
                <div className="text-4xl lg:text-5xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32" itemScope itemType="https://schema.org/Person">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={revealSide("left")} initial="initial" whileInView="whileInView">
              <img
                src={imgMounikaSarmaLaptop}
                alt="Mounika Sarma K - IIT Certified Career Counsellor providing student career guidance in Bangalore"
                className="w-full rounded-3xl shadow-2xl"
                itemProp="image"
              />
            </motion.div>

            <motion.div variants={revealSide("right")} initial="initial" whileInView="whileInView">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Bangalore's Best Career Counsellor for Students
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm <strong itemProp="name">Mounika Sarma K</strong>, an <span itemProp="jobTitle">IIT Certified Career Counsellor</span> specializing in <strong>career guidance for students in India</strong>. With proven expertise in <strong>student career guidance</strong>, I provide personalized <strong>career counselling for students and parents</strong>, helping make informed decisions after 10th and 12th standard.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Award, text: "IIT Certified Career Counsellor in Bangalore" },
                  { icon: UserCheck, text: "Personalized Career Coaching for Students" },
                  { icon: BarChart, text: "Data-Driven Career Planning & Analysis" },
                  { icon: Target, text: "Expert Career Guidance After 10th/12th" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-900" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <a href="#cta" className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 transition-all group">
                <span className="font-semibold">Book a Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 lg:py-32 bg-gray-50" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 id="programs-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Career Counselling Programs for Students in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive <strong>career planning programs</strong> for students and professionals at every stage
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Rocket,
                title: "Career Guidance for Students",
                description: "Comprehensive career coaching for students including skill assessment, resume building, and interview preparation"
              },
              {
                icon: TrendingUp,
                title: "Career Growth & Transition Guidance",
                description: "Strategic career planning for professionals seeking advancement or industry change"
              },
              {
                icon: Target,
                title: "Parent Career Counselling Sessions",
                description: "Guidance for parents to support their children's career decisions with expert insights"
              },
              {
                icon: Award,
                title: "Professional Mastery Program",
                description: "Year-long comprehensive career development with personalized mentorship and guidance"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 lg:py-32" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 id="process-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Career Counselling Process for Students
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven 4-step <strong>career guidance framework</strong> designed for students and professionals
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                icon: Target,
                title: "Career Assessment",
                description: "Deep analysis of your strengths, goals, and market opportunities"
              },
              {
                step: "02",
                icon: MapPin,
                title: "Strategy & Roadmap",
                description: "Personalized action plan aligned with your career objectives"
              },
              {
                step: "03",
                icon: Rocket,
                title: "Skill Development",
                description: "Targeted training and mentorship to bridge critical gaps"
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Execution & Growth",
                description: "Ongoing support as you implement and achieve your goals"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-blue-900 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-900 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800 text-white" aria-labelledby="program-details-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <h2 id="program-details-heading" className="text-4xl lg:text-5xl font-bold mb-4">
              4-Week Career Foundation Program for Students
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete <strong>career coaching program</strong> covering communication skills, resume building, interview preparation, and career planning strategies
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                week: "Week 1",
                title: "Communication Foundations",
                topics: [
                  "Communication Fundamentals",
                  "Spoken English for Workplace",
                  "Confidence Building & Fluency",
                  "Active Listening & Empathy",
                  "Business Email Writing",
                  "Corporate Chat Etiquette",
                  "Group Discussion Practice"
                ]
              },
              {
                week: "Week 2",
                title: "Resume, LinkedIn & Personal Branding",
                topics: [
                  "Resume Psychology",
                  "ATS Resume Building",
                  "Resume Writing Workshop",
                  "Cover Letter & Cold Emailing",
                  "LinkedIn Optimization",
                  "Portfolio Building",
                  "Personal Branding"
                ]
              },
              {
                week: "Week 3",
                title: "Workplace Soft Skills & Corporate Readiness",
                topics: [
                  "Time Management & Productivity",
                  "Teamwork & Collaboration",
                  "Emotional Intelligence",
                  "Adaptability & Growth Mindset",
                  "Problem Solving & Critical Thinking",
                  "Workplace Etiquette",
                  "Leadership Basics for Freshers"
                ]
              },
              {
                week: "Week 4",
                title: "Interview & Career Acceleration Mastery",
                topics: [
                  "Interview Psychology",
                  "HR Interview Preparation",
                  "Behavioral Interview Questions",
                  "Technical Interview Communication",
                  "Salary Negotiation Basics",
                  "AI for Job Seekers",
                  "Networking for Career Growth",
                  "Mock Interview + Feedback",
                  "Career Action Plan Creation"
                ]
              }
            ].map((week, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              >
                <div className="text-sm font-semibold text-blue-200 mb-2">{week.week}</div>
                <h3 className="text-2xl font-bold mb-6">{week.title}</h3>
                <ul className="space-y-3">
                  {week.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-50">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Student Success Stories from Our Career Counselling
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real success stories from students and professionals who transformed their careers with expert guidance
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Rahul Verma",
                role: "Engineering Student → Product Manager",
                icon: Users,
                iconBg: "bg-green-100",
                iconColor: "text-green-900",
                quote: "Best career counselling I received in Bangalore! Mounika's guidance helped me transition from engineering to product management. Her structured career planning approach was invaluable. Within 3 months, I landed my dream PM role."
              },
              {
                name: "Ananya S.",
                role: "12th Pass Student → Marketing Professional",
                icon: Users,
                iconBg: "bg-green-100",
                iconColor: "text-green-900",
                quote: "The career guidance after 12th transformed my future. The career foundation program built my communication skills and confidence. As a student, this career coaching gave me clarity I desperately needed!"
              },
              {
                name: "Priya & Karthik's Parents",
                role: "Parents seeking career counselling for their children",
                icon: Users,
                iconBg: "bg-green-100",
                iconColor: "text-green-900",
                quote: "As parents, we were confused about our children's career paths. Mounika's career counselling for parents helped us understand modern career options. Her student career guidance program gave our kids the direction they needed after 10th standard."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${testimonial.iconBg} flex items-center justify-center`}>
                    <testimonial.icon className={`w-7 h-7 ${testimonial.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 id="cta-heading" className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Book Your Career Counselling Session in Bangalore Today
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get expert <strong>career guidance for students in India</strong>. Professional career counselling after 10th/12th. Free consultation with Bangalore's best career counsellor.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:adharvacca@gmail.com" className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-xl hover:bg-yellow-300 transition-all font-bold text-lg">
                Book Free Consultation
              </a>
              <a href="https://wa.me/919182321749" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/20 transition-all font-bold text-lg flex items-center justify-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Talk on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Students Say on Google
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
              <span className="text-gray-600">on Google</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                name: "Sneha Reddy",
                time: "2 weeks ago",
                rating: 5,
                review: "Excellent career counselling! Mounika helped me choose the right stream after 10th. Her guidance was so clear and personalized. Highly recommend for students in Bangalore!"
              },
              {
                name: "Arjun Kumar",
                time: "1 month ago",
                rating: 5,
                review: "Best career counsellor in Bangalore! The career planning session after 12th was incredibly helpful. Got clarity on my engineering options and entrance exam strategy."
              },
              {
                name: "Lakshmi & Ramesh",
                time: "3 weeks ago",
                rating: 5,
                review: "As parents, we were worried about our daughter's career choices. Mounika's counselling gave us and our daughter the confidence to make the right decision. Very professional!"
              },
              {
                name: "Vikram Shetty",
                time: "1 week ago",
                rating: 5,
                review: "Fantastic experience! The career foundation program transformed my interview skills and resume. Within a month, I got 3 job offers. Thank you Mounika!"
              },
              {
                name: "Divya Rao",
                time: "2 months ago",
                rating: 5,
                review: "Great career guidance for students! Mounika's approach is very systematic and data-driven. She helped me understand my strengths and choose the right college."
              },
              {
                name: "Suresh & Kavitha",
                time: "3 weeks ago",
                rating: 5,
                review: "Excellent career counselling for our son. Mounika explained all career options in detail and helped us understand modern career paths. Highly professional service!"
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.time}</div>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <a
              href="https://share.google/k9fwJPv03EXoAmvbm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold"
            >
              <span>Read all reviews on Google</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white" id="contact-form">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeInUp} className="mb-4">
            <div className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-2">Get in Touch</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
              Reach Out to Us
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Contact Info */}
            <motion.div {...fadeInUp} className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Phone</div>
                  <a href="tel:+919182321749" className="text-lg font-bold text-gray-900 hover:text-blue-900 transition-colors">
                    +91 91823 21749
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Email</div>
                  <a href="mailto:adharvacca@gmail.com" className="text-lg font-bold text-gray-900 hover:text-blue-900 transition-colors break-all">
                    adharvacca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Address</div>
                  <p className="text-gray-900 font-medium">
                    Sri Vandana Marvel, Kudlu, VGP Layout,<br />
                    Bengaluru, Karnataka 560068
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">Hours</div>
                  <p className="text-gray-900 font-medium">
                    Mon-Sat: 7AM - 10PM, Sun: 7AM - 10PM
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2149731037703!2d77.6532988!3d12.893894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151649414561%3A0xe326ae8d253e6b9b!2sAdharva%20Career%20Analyst!5e0!3m2!1sen!2sin!4v1777222640359!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl shadow-lg"
                  title="Adharva Career Consultancy Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div {...fadeInUp}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="interested" className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested In
                      </label>
                      <select
                        id="interested"
                        name="interested"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select category</option>
                        <option value="career-guidance-students">Career Guidance for Students</option>
                        <option value="career-foundation">Career Foundation Program</option>
                        <option value="parent-counselling">Parent Counselling</option>
                        <option value="professional-development">Professional Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5" />
                        <span>Send Enquiry</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center" aria-hidden="true">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Adharva Career Consultancy</div>
                  <div className="text-sm text-gray-400">Bangalore, Karnataka</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Best Career Counselling for Students in India
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#programs" className="block text-gray-400 hover:text-white transition-colors">Programs</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors">How It Works</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Our Services</h4>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">Career Guidance After 10th/12th</div>
                <div className="text-gray-400">Student Career Counselling</div>
                <div className="text-gray-400">Career Planning Programs</div>
                <div className="text-gray-400">Parent Counselling Sessions</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+919182321749" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 91823 21749</span>
                </a>
                <a href="mailto:adharvacca@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>adharvacca@gmail.com</span>
                </a>
                <a href="https://www.adharvaedumilestones.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>adharvaedumilestones.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2026 Adharva Career Consultancy. All rights reserved.</p>
            <p className="mt-4 text-xs">
              Designed and Developed by <a href="https://aspltech.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">ASPLTECH</a>
            </p>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919182321749"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-[65px] h-[65px] bg-gradient-to-br from-[#25D366] to-[#1ebe5d] rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.25),0_0_15px_rgba(37,211,102,0.6)] flex items-center justify-center transition-all group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10 fill-white"
        >
          <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.888.76 5.707 2.203 8.188L0 32l7.61-2.163a15.92 15.92 0 008.39 2.32h.006c8.837 0 16-7.162 16-16S24.843.396 16 .396zm0 29.385h-.005a13.26 13.26 0 01-6.754-1.848l-.483-.287-4.518 1.285 1.206-4.406-.314-.508A13.246 13.246 0 012.74 16.4c0-7.32 5.955-13.275 13.276-13.275 3.546 0 6.88 1.381 9.385 3.887a13.19 13.19 0 013.885 9.388c-.003 7.32-5.958 13.381-13.27 13.381zm7.518-9.845c-.411-.206-2.43-1.2-2.807-1.336-.376-.137-.65-.206-.924.206-.274.411-1.061 1.336-1.3 1.611-.239.274-.478.308-.889.103-.411-.206-1.736-.64-3.307-2.04-1.223-1.09-2.05-2.437-2.29-2.848-.239-.411-.026-.633.18-.838.185-.184.411-.479.616-.718.206-.239.274-.411.411-.685.137-.274.069-.513-.034-.718-.103-.206-.924-2.223-1.266-3.046-.334-.803-.674-.694-.924-.706l-.787-.014c-.274 0-.718.103-1.094.513s-1.437 1.405-1.437 3.424 1.472 3.969 1.678 4.243c.206.274 2.9 4.427 7.03 6.205.983.424 1.75.677 2.348.866.987.314 1.885.27 2.594.164.791-.118 2.43-.993 2.774-1.952.343-.959.343-1.78.24-1.952-.103-.171-.376-.274-.787-.479z" />
        </svg>
      </motion.a>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. We will get back to you shortly at adharvacca@gmail.com.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
