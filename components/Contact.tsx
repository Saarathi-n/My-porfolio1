import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to an API)
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after a delay for demonstration
    setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
    }, 3000);
  };


  return (
    <section id="contact" className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Fill out the form below, and I'll get back to you as soon as possible!
        </p>
      </div>

      <div className="max-w-xl mx-auto mt-10">
        {submitted ? (
           <p className="text-center text-lg text-green-400 bg-green-900/30 border border-green-500 rounded-md p-4">
             Thank you! Your message has been sent successfully.
           </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-3 px-4 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 text-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
