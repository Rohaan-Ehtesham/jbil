import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Settings, ShieldCheck, PenTool, Layers, ArrowRight, CheckCircle, Lightbulb, Factory, Search, Truck, Briefcase } from 'lucide-react';
import metalSheetMoldingImg from '../img/metalSheetMolding.jpg';
import customFabricationImg from '../img/CustomFabrication.jpg';

const Services = () => {
  const servicesList = [
    {
      icon: Layers,
      title: "Metal Processing",
      desc: "We offer comprehensive metal sheet molding and processing services using advanced machinery and controlled production methods to ensure precision, durability, and consistency in every product.",
      services: [
        "Metal sheet molding",
        "Cutting and shaping",
        "Forming and finishing",
        "Custom metal component production",
        "Industrial-grade sheet processing"
      ],
      whyItMatters: "Our metal processing capabilities are built to support projects that require strength, structural reliability, and accurate manufacturing tolerances.",
      image: metalSheetMoldingImg
    },
    {
      icon: PenTool,
      title: "Fiber Sheet Solutions",
      desc: "Our fiber sheet binding and shaping services are designed to deliver strong, flexible, and reliable materials suitable for various industrial applications. We focus on consistency, bonding integrity, and functional performance to produce solutions our clients can trust.",
      services: [
        "Fiber sheet binding",
        "Shaping and forming",
        "Size customization",
        "Strength-focused processing",
        "Industrial-use fiber applications"
      ],
      whyItMatters: "Fiber-based materials are widely used for their versatility, lightweight nature, and functional performance. We help clients make the most of these advantages through reliable processing and finishing.",
      image: `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
    },
    {
      icon: Settings,
      title: "Custom Manufacturing",
      desc: "We understand that no two projects are exactly the same. Our team works closely with clients to develop customized solutions tailored to specific technical requirements, dimensions, material preferences, and application needs.",
      services: [
        "Requirement analysis",
        "Technical consultation",
        "Product planning",
        "Precision fabrication",
        "Quality verification"
      ],
      whyItMatters: "Custom manufacturing ensures you get products that fit your exact operational needs instead of adjusting your project to standard options.",
      image: customFabricationImg
    },
    {
      icon: Briefcase,
      title: "Industrial Project Support",
      desc: "From initial concept to final delivery, JBIL provides complete support for industrial projects. We work with our clients throughout the process to maintain efficiency, consistency, and confidence from start to finish.",
      services: [
        "Project consultation",
        "Material and process guidance",
        "Production coordination",
        "Quality control",
        "Delivery planning"
      ],
      whyItMatters: "Industrial projects often require coordination, reliability, and timely execution. Our support helps streamline the process while maintaining product quality.",
      image: `https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`
    }
  ];

  const capabilities = [
    "Precision manufacturing",
    "Material handling and processing",
    "Scalable production support",
    "Custom project execution",
    "Quality-focused workflow",
    "Timely order fulfillment"
  ];

  const processes = [
    { step: "1", title: "Consultation & Requirement Gathering", desc: "We begin by understanding your project scope, design needs, and production expectations.", icon: Lightbulb },
    { step: "2", title: "Planning & Feasibility", desc: "Our team identifies the most practical and efficient method to produce your required solution.", icon: Briefcase },
    { step: "3", title: "Manufacturing", desc: "Production begins using suitable machinery, techniques, and quality controls.", icon: Factory },
    { step: "4", title: "Inspection", desc: "Products are checked for quality, accuracy, and consistency before dispatch.", icon: Search },
    { step: "5", title: "Delivery", desc: "Finished products are delivered according to agreed timelines and project schedules.", icon: Truck }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle=""
      />

      {/* Intro Section */}
      <Section bg="light" className="text-center pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-text leading-relaxed">
            At JBIL, we provide a range of industrial manufacturing services focused on precision, durability, and customization. Our solutions are designed to support clients across different industries with dependable production quality and efficient project execution.
          </p>
        </div>
      </Section>

      {/* Detailed Services */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-secondary">{service.title}</h2>
                  </div>
                  <p className="text-lg text-text mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <h4 className="font-bold text-secondary mb-4 flex items-center">
                      <ShieldCheck className="w-5 h-5 text-accent mr-2" /> Included Services
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.services.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start text-text text-sm font-medium">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                     <h4 className="font-bold text-primary mb-2">Why it matters</h4>
                     <p className="text-text italic text-sm leading-relaxed">{service.whyItMatters}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 w-full">
                  <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Our Capabilities */}
      <Section bg="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Our Capabilities</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-text text-lg">
            JBIL is equipped to support a variety of project types through a combination of technical skill, modern equipment, and disciplined production standards.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 flex items-center hover:-translate-y-1 hover:shadow-md transition-all">
               <div className="w-2 h-2 bg-accent rounded-full mr-3 shrink-0"></div>
               <span className="font-semibold text-secondary">{cap}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work */}
      <Section bg="light">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">How We Work</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
           <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processes.map((proc, idx) => {
                 const Icon = proc.icon;
                 return (
                    <div key={idx} className="flex flex-col items-center text-center">
                       <div className="w-20 h-20 rounded-full bg-white shadow-lg border-4 border-gray-50 flex items-center justify-center mb-6 text-primary hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8" />
                       </div>
                       <h4 className="font-bold text-lg text-secondary mb-3">{idx + 1}. {proc.title}</h4>
                       <p className="text-sm text-text leading-relaxed">{proc.desc}</p>
                    </div>
                 );
              })}
           </div>
        </div>
      </Section>

      <Section bg="primary" id="cta-banner" className="relative text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Need a customized solution for your next project?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
            Talk to our team and discover how JBIL can support your manufacturing needs.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Get a Quote
          </Button>
        </div>
      </Section>

    </div>
  );
};

export default Services;
