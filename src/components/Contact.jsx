import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = ({ content }) => {
  const { title, titleHighlight, subtitle, form, contactInfo } = content;
  const recaptchaRef = useRef(null);
  const [ReCAPTCHA, setReCAPTCHA] = useState(null);
  const [recaptchaTheme, setRecaptchaTheme] = useState('dark');
  
  useEffect(() => {
    import('react-google-recaptcha').then(module => {
      setReCAPTCHA(() => module.default || module);
    });
  }, []);
  
  useEffect(() => {
    // Listen for theme changes
    const updateTheme = () => {
      const theme = window.__soswerTheme || 'dark';
      setRecaptchaTheme(theme === 'light' ? 'light' : 'dark');
    };
    updateTheme();
    // Listen for themechange and also for storage changes
    window.addEventListener('themechange', updateTheme);
    window.addEventListener('storage', updateTheme);
    return () => {
      window.removeEventListener('themechange', updateTheme);
      window.removeEventListener('storage', updateTheme);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Use FormSubmit.co for AJAX submission
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          'g-recaptcha-response': recaptchaToken,
          _subject: `Quote Request from ${formData.name}`,
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        });
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        alert('Something went wrong. Please try again.');
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-black min-h-screen flex items-center transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-neon/10 rounded-full blur-[128px] opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[128px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {title} <br />
              <span className="text-neon">{titleHighlight}</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 leading-relaxed">
              {subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{contactInfo.emailLabel}</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-neon transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{contactInfo.phoneLabel}</h3>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-neon transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neon/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{contactInfo.addressLabel}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 bg-gray-50/50 dark:bg-black/40 border-gray-200 dark:border-white/10">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-neon" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-lg text-sm text-gray-700 dark:text-gray-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{form.title}</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{form.nameLabel}</label>
                      <input 
                        type="text" 
                        id="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors disabled:opacity-50"
                        placeholder={form.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{form.emailLabel}</label>
                      <input 
                        type="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors disabled:opacity-50"
                        placeholder={form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{form.serviceLabel}</label>
                    <select 
                      id="service" 
                      value={formData.service}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors disabled:opacity-50"
                    >
                      <option value="" disabled className="bg-white dark:bg-black text-gray-900 dark:text-white">{form.servicePlaceholder}</option>
                      {form.services.map((service, index) => (
                        <option key={index} value={service} className="bg-white dark:bg-black text-gray-900 dark:text-white">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{form.messageLabel}</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-white dark:bg-black/50 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-colors resize-none disabled:opacity-50"
                      placeholder={form.messagePlaceholder}
                    ></textarea>
                  </div>

                  <div className="flex justify-center overflow-hidden rounded-lg min-h-[78px]">
                    {ReCAPTCHA && (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
                        theme={recaptchaTheme}
                      />
                    )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-neon hover:bg-neon-hover text-black font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        {form.submitButton}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
