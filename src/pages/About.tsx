import React from 'react';
import { Heart, Target, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We are passionate about creating exceptional user experiences that delight and inspire.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every feature we build serves a purpose and drives meaningful results for our users.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new ways to solve complex problems.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions are designed to make a positive impact on users around the world.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in user experience design with 8+ years creating beautiful interfaces.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Full-stack developer specializing in modern web technologies and scalable architectures.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Strategic product leader with a track record of launching successful digital products.'
    }
  ];

  return (
    <div className="page-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="page-title">About ThemeForge</h1>
          <p className="page-subtitle">
            We're on a mission to revolutionize how users interact with digital interfaces 
            through the power of dynamic theming and exceptional design.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2 className="story-title">Our Story</h2>
            <p className="story-paragraph">
              Founded in 2020, ThemeForge began as a simple idea: what if users could completely 
              transform their digital experience with the click of a button? We believed that 
              personalization shouldn't be limited to changing colors, but should encompass 
              entire design philosophies.
            </p>
            <p className="story-paragraph">
              Today, we've helped thousands of users discover their perfect digital aesthetic, 
              proving that good design isn't one-size-fits-all. Our three distinct themes represent 
              different approaches to user interface design, each crafted with meticulous attention 
              to detail and user psychology.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Team working together"
              className="story-img"
            />
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <value.icon className="value-icon" />
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-description">
          The talented individuals behind ThemeForge's success
        </p>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img 
                src={member.image} 
                alt={member.name}
                className="team-image"
              />
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;