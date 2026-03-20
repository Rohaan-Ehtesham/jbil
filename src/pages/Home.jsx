import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Layers, ShieldCheck, Factory, Timer, CheckCircle, ArrowRight, Settings, Award, Users, Cpu, Briefcase, Wrench, Search, Truck, Handshake, Building2 } from 'lucide-react';
import homeImage from '../img/home1.jpg';

const Home = () => {
  const services = [
    {
      icon: Layers,
      title: "Metal Sheet Molding",
      description: "We provide high-precision metal sheet molding services tailored for industrial, commercial, and custom applications. Our processes are designed to ensure dimensional accuracy, structural integrity, and long-lasting durability in every component we produce."
    },
    {
      icon: Factory,
      title: "Fiber Sheet Binding",
      description: "Our advanced fiber sheet binding solutions are engineered to deliver strength, flexibility, and performance. We work with care and consistency to produce bonded fiber products suitable for a wide range of industrial uses."
    },
    {
      icon: Settings,
      title: "Custom Fabrication",
      description: "Every project is different, and we understand the importance of tailored solutions. JBIL offers custom fabrication services based on your exact specifications, ensuring every product aligns with your operational and technical requirements."
    },
    {
      icon: Wrench,
      title: "Industrial Solutions",
      description: "From concept development to final production, we support industrial projects with dependable manufacturing solutions. Our team works closely with clients to ensure efficiency, quality control, and timely delivery at every stage."
    }
  ];

  const whyChooseUsFeatures = [
    { title: "Quality Assurance", desc: "We follow strict quality control standards throughout the manufacturing process to ensure every product meets required specifications, performance expectations, and industry benchmarks." },
    { title: "Advanced Machinery", desc: "Our facility is equipped with modern machinery and production tools that enable us to deliver precision, consistency, and efficiency across all projects." },
    { title: "Skilled Workforce", desc: "Our experienced professionals bring technical knowledge, craftsmanship, and attention to detail to every job, helping us maintain high standards of production." },
    { title: "Timely Delivery", desc: "We understand the value of deadlines in industrial operations. Our team is committed to completing projects on schedule without compromising on quality." },
    { title: "Customer-Focused Approach", desc: "We believe in building long-term partnerships through clear communication, responsive service, and customized manufacturing support that addresses each client’s unique needs." },
    { title: "Reliable Industrial Expertise", desc: "With a practical understanding of industrial requirements, we produce solutions that are functional, durable, and built to perform under demanding conditions." }
  ];

  const industries = [
    "Industrial manufacturing",
    "Construction and infrastructure",
    "Engineering and fabrication",
    "Packaging and protective applications",
    "Equipment and machinery support",
    "Commercial and custom industrial projects"
  ];

  const processes = [
    { step: "1", title: "Consultation", desc: "We begin by understanding your project requirements, material needs, technical specifications, and delivery expectations.", icon: Handshake },
    { step: "2", title: "Design & Planning", desc: "Our team evaluates the best manufacturing approach to ensure efficiency, precision, and cost-effectiveness.", icon: Briefcase },
    { step: "3", title: "Production", desc: "Using advanced equipment and skilled workmanship, we transform raw materials into high-quality finished products.", icon: Factory },
    { step: "4", title: "Quality Check", desc: "Each product goes through inspection and quality control to ensure consistency and reliability.", icon: Search },
    { step: "5", title: "Delivery", desc: "We coordinate timely dispatch and delivery so your project stays on track.", icon: Truck }
  ];

  const testimonials = [
    {
      text: "JBIL consistently delivers high-quality products with exceptional precision. A highly reliable manufacturing partner."
    },
    {
      text: "Their custom fabrication services exceeded our expectations. Great team, excellent communication, and dependable results."
    },
    {
      text: "We appreciate their commitment to quality and on-time delivery. JBIL has become a trusted part of our supply chain."
    }
  ];

  return (
    <div>
      <HeroSection />

      {/* Services Preview Section */}
      <Section bg="light" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Our Core Capabilities</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-text text-lg">
            We operate at the intersection of traditional craftsmanship and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} className="group hover:-translate-y-2 flex flex-col items-start text-left">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors hover:shadow-md">
                  {Icon ? <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" /> : <div className="w-7 h-7 bg-primary rounded-full"></div>}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-text text-sm leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button to="/services" variant="outline" size="lg">View All Services</Button>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section bg="default">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            
            <div className="space-y-6">
              {whyChooseUsFeatures.map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-secondary">{item.title}</h4>
                    <p className="text-text mt-1 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative lg:sticky lg:top-32">
            <div className="absolute inset-0 bg-primary/10 transform translate-x-4 pr-10 translate-y-4 rounded-xl -z-10"></div>
            <img 
              src={homeImage} 
              alt="Industrial Manufacturing" 
              className="rounded-xl shadow-xl w-full h-auto object-cover aspect-video bg-white"
            />
            
            {/* Featured Highlights / Quick Facts */}
            <div className="mt-10 bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
              <h3 className="text-xl font-bold text-primary mb-6">Featured Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Precision-focused manufacturing",
                  "Durable industrial-grade products",
                  "Customized solutions for unique projects",
                  "Reliable turnaround and delivery",
                  "Strong commitment to quality and service"
                ].map((fact, idx) => (
                  <li key={idx} className="flex items-center text-text text-sm font-medium">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section bg="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Industries We Serve</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-text text-lg">
            Our experience across multiple industries allows us to understand different operational needs and produce components that support performance, safety, and efficiency.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white px-6 py-4 rounded-lg shadow-sm font-medium text-secondary border border-gray-100 flex items-center hover:-translate-y-1 hover:shadow-md transition-all">
               <Building2 className="w-5 h-5 text-accent mr-3" />
               <span className="text-sm md:text-base">{ind}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Process */}
      <Section bg="default">
         <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Our Process</h2>
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

      {/* Testimonials */}
      <Section bg="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, idx) => (
            <Card key={idx} className="bg-white flex flex-col items-center text-center p-8" hover={false}>
              <div className="mb-6 flex space-x-1">
                {[1,2,3,4,5].map(star => (
                   <span key={star} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-base text-secondary italic mb-6 leading-relaxed flex-grow">"{test.text}"</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section bg="primary" id="cta-banner" className="relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Need Custom Industrial Solutions?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
            Let’s build something strong together. Whether you need metal molding, fiber sheet processing, or fully customized fabrication, JBIL is ready to support your next project with quality and precision.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Contact Us
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
