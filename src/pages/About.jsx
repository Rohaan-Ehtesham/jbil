import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { Target, TrendingUp, ShieldCheck, Handshake, Lightbulb, CheckCircle, Award, ArrowRight } from 'lucide-react';
import factoryWorkerImg from '../img/FactoryWorker.jpg';
import metalWeldingImg from '../img/MetalWelding.jpg';

const About = () => {
  const values = [
    { title: "Quality", desc: "We believe quality is the foundation of trust. Every product we manufacture reflects our commitment to high standards and dependable performance.", icon: Award },
    { title: "Integrity", desc: "We value honest communication, transparent processes, and ethical business practices in every client relationship.", icon: ShieldCheck },
    { title: "Innovation", desc: "We continuously seek better methods, modern tools, and improved processes to enhance our production capabilities.", icon: Lightbulb },
    { title: "Commitment", desc: "We are dedicated to meeting deadlines, fulfilling expectations, and delivering solutions our clients can rely on.", icon: CheckCircle },
    { title: "Customer Satisfaction", desc: "Our clients are at the center of what we do. We work to understand their needs and deliver solutions that truly fit their goals.", icon: Handshake }
  ];

  const differentiators = [
    "Strong focus on precision and product quality",
    "Ability to handle customized production requirements",
    "Skilled team with practical manufacturing expertise",
    "Efficient production processes and dependable turnaround times",
    "Commitment to building long-term client partnerships"
  ];

  return (
    <div>
      <PageHeader 
        title="About Jafri Brothers International Limited" 
        subtitle=""
      />

      {/* Company Overview */}
      <Section bg="light">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Company Overview</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-text text-lg mb-6 leading-relaxed">
              Jafri Brothers International Limited (JBIL) is a trusted name in the industrial manufacturing sector, specializing in the molding, binding, and fabrication of metal and fiber sheets. With a strong commitment to quality, precision, and innovation, JBIL has earned a reputation for delivering reliable and efficient manufacturing solutions to businesses across various industries.
            </p>
            <p className="text-text text-lg leading-relaxed">
              Our work is driven by a practical understanding of industrial needs and a clear focus on performance, durability, and customer satisfaction. From standard production requirements to highly customized projects, we aim to provide solutions that add value and support long-term success for our clients.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img src={factoryWorkerImg} alt="Factory Operations" className="rounded-xl shadow-lg w-full h-72 object-cover transition-transform hover:scale-105 duration-500" />
              <img src={metalWeldingImg} alt="Metal Fabrication" className="rounded-xl shadow-lg w-full h-72 object-cover mt-12 transition-transform hover:scale-105 duration-500" />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bg="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="p-10 border-t-4 border-t-accent flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Mission</h3>
            <p className="text-text text-lg leading-relaxed">
              To provide high-quality, precision-engineered metal and fiber products that meet the evolving needs of our clients while maintaining excellence, consistency, and reliability at every stage of production.
            </p>
          </Card>
          
          <Card className="p-10 border-t-4 border-t-primary flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Vision</h3>
            <p className="text-text text-lg leading-relaxed">
              To become a leading industrial manufacturing company recognized for innovation, reliability, and customer satisfaction in both local and international markets.
            </p>
          </Card>
        </div>
      </Section>

      {/* Our Values */}
      <Section bg="light">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">Our Values</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-text text-lg">
            The principles that guide our everyday operations and relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <Card key={i} className="flex flex-col items-start bg-white hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{v.title}</h4>
                <p className="text-text leading-relaxed">{v.desc}</p>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Journey & Distinction & Excellence */}
      <Section bg="default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-secondary mb-4">Our Journey</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-text text-lg leading-relaxed mb-4">
                From humble beginnings to becoming a growing industrial solutions provider, JBIL has continuously evolved by adopting modern technologies, refining its expertise, and expanding its capabilities to meet changing industry demands.
              </p>
              <p className="text-text text-lg leading-relaxed">
                Over time, our company has built strong relationships with clients who value quality workmanship, responsive service, and consistent delivery. This journey reflects our dedication to progress, performance, and long-term growth in the industrial manufacturing sector.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-extrabold text-secondary mb-4">Commitment to Excellence</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-text text-lg leading-relaxed">
                At JBIL, excellence is more than a goal — it is a standard that guides our work every day. From raw material handling to production and final inspection, we strive to ensure every stage of our process reflects care, consistency, and technical accuracy.
              </p>
            </div>
          </div>
          
          {/* Right Column: sets us apart */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-0"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-tr-full -z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-secondary mb-4">What Sets Us Apart</h2>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <ul className="space-y-6">
                {differentiators.map((diff, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5 mr-4" />
                    <span className="text-lg text-text font-medium">{diff}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="primary" id="cta-banner" className="relative text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Looking for a dependable manufacturing partner?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Let JBIL help bring your industrial requirements to life with precision-driven solutions.
          </p>
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Request a Consultation
          </Button>
        </div>
      </Section>

    </div>
  );
};

export default About;
