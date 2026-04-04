import React from 'react';
import PageHeader from '../components/UI/PageHeader';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import metalWeldingImg from '../img/MetalWelding.jpg';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Lightweight Composites in Aerospace",
      excerpt: "Exploring how advanced fiber binding techniques are reducing aircraft weight by up to 15% without compromising structural integrity.",
      date: "Oct 12, 2023",
      author: "Dr. Alan Grant",
      category: "Fiber Technology",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Optimizing Metal CNC Machining for Reduced Waste",
      excerpt: "A deep dive into JBIL's new proprietary algorithms that minimize scrap metal during complex die stamping procedures.",
      date: "Nov 05, 2023",
      author: "Sarah Jenkins",
      category: "Sustainability",
      image: metalWeldingImg
    },
    {
      id: 3,
      title: "Understanding ISO 9001 Standards in Sheet Molding",
      excerpt: "What does it take to maintain world-class quality assurance? We unbox the rigorous testing protocols at our primary facility.",
      date: "Dec 18, 2023",
      author: "Marcus Thorne",
      category: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Trends in Industrial Automation for 2024",
      excerpt: "Robotics and AI are taking over the factory floor. Here is how modern manufacturing plants are adapting to the shift.",
      date: "Jan 22, 2024",
      author: "Dr. Alan Grant",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Metal vs. Fiber: Choosing the Right Material for Your Framework",
      excerpt: "A comparative guide to help engineers decide between traditional steel alloys and modern carbon-fiber composites for their next build.",
      date: "Feb 10, 2024",
      author: "Elena Rossi",
      category: "Engineering Guide",
      image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Inside JBIL: Expanding Our Global Footprint",
      excerpt: "Announcing our new logistics hub in Europe, designed to cut delivery times across the continent by half.",
      date: "Mar 05, 2024",
      author: "Board of Directors",
      category: "Company Update",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Insights & News" 
        subtitle="Stay updated with the latest in manufacturing technology, material sciences, and JBIL company news."
      />

      <Section bg="default">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.id} className="p-0 overflow-hidden flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors text-sm">
                    Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </Section>
    </div>
  );
};

export default Blog;
