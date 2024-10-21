import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation for required fields
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // If no errors, handle form submission
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={formData.email} 
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Message</label>
          <textarea 
            value={formData.message} 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
