import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@themeforge.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Design Street, Creative City, CC 12345',
      description: 'Drop by our office'
    }
  ];

  const faqs = [
    {
      question: 'How do I switch between themes?',
      answer: 'Use the theme dropdown in the header to instantly switch between our three unique designs.'
    },
    {
      question: 'Are themes saved automatically?',
      answer: 'Yes! Your theme preference is automatically saved and will persist when you return.'
    },
    {
      question: 'Can I customize the themes?',
      answer: 'Currently, we offer three pre-designed themes. Custom theming options are coming soon!'
    }
  ];

  return (
    <div className="page-container">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have questions about our themes? Want to provide feedback? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>
            <p className="contact-info-subtitle">
              Reach out to us through any of these channels
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-method">
                  <info.icon className="contact-method-icon" />
                  <div className="contact-method-content">
                    <h3 className="contact-method-title">{info.title}</h3>
                    <div className="contact-method-details">{info.details}</div>
                    <div className="contact-method-description">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="business-hours">
              <Clock className="hours-icon" />
              <div className="hours-content">
                <h3 className="hours-title">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <MessageCircle className="success-icon" />
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-text">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2 className="form-title">Send us a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit">
                  <Send className="submit-icon" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;