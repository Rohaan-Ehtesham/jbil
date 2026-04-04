import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import Section from '../components/UI/Section';
import ContactForm from '../components/Contact/ContactForm';
import { MapPin, Phone, Mail, Clock, HelpCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  // Load contact info from environment variables
  const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS || 'Karachi, Pakistan';
  const companyPhone = import.meta.env.VITE_COMPANY_PHONE || '+92-XXX-XXXXXXX';
  const companyEmail = import.meta.env.VITE_COMPANY_EMAIL || 'info@jbil.net';
  const companyHours = import.meta.env.VITE_COMPANY_HOURS || 'Monday - Friday: 9:00 AM - 5:00 PM PST';

  const contactReasons = [
    "Request a quote for your project",
    "Discuss custom manufacturing requirements",
    "Ask about our metal and fiber processing services",
    "Get support for industrial project planning",
    "Learn how JBIL can meet your production needs"
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle=""
      />

      <Section bg="default">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Get in Touch</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-text leading-relaxed">
                Have a project in mind or need a custom solution? Reach out to us and our team will get back to you promptly. Whether you are looking for metal sheet molding, fiber sheet processing, or tailored industrial fabrication, JBIL is ready to assist you with reliable support and professional guidance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Address</h4>
                  <p className="text-text text-sm leading-relaxed">{companyAddress}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Phone</h4>
                  <a href={`tel:${companyPhone}`} className="text-text text-sm leading-relaxed hover:text-accent transition-colors">{companyPhone}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Email</h4>
                  <a href={`mailto:${companyEmail}`} className="text-text text-sm leading-relaxed hover:text-accent transition-colors">{companyEmail}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Business Hours</h4>
                  <p className="text-text text-sm leading-relaxed">
                    {companyHours}
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Why Contact Section & CTA Combine block */}
      <Section bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
           <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                 <HelpCircle className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-extrabold text-secondary mb-6">Why Contact JBIL?</h2>
              <ul className="space-y-4">
                 {contactReasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start">
                       <CheckCircle className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                       <span className="text-text">{reason}</span>
                    </li>
                 ))}
              </ul>
           </div>
           
           <div className="bg-primary rounded-2xl p-10 text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Let’s discuss your requirements.</h3>
                 <p className="text-gray-200 mb-0 leading-relaxed text-lg">
                    Get in touch today and take the first step toward a reliable manufacturing solution.
                 </p>
               </div>
           </div>
        </div>
      </Section>

    </div>
  );
};

export default Contact;
