import React, { useState } from 'react';
import { motion } from 'framer-motion';

function FormForContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <motion.section
      className="bg-[#f0f0f0] pt-0 m-0 overflow-x-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl px-4 py-12 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
        </motion.div>

        {/* Description */}
        <motion.div
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            Feel free to contact us with your queries. We are available from <strong>10 AM to 8 PM</strong> (Mon-Sat).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {[
              { label: 'Full Name', type: 'text', field: 'name' },
              { label: 'Email', type: 'email', field: 'email' },
              { label: 'Phone', type: 'tel', field: 'phone' },
              { label: 'Date', type: 'date', field: 'date' }
            ].map((item, i) => (
              <div key={i} className="relative">
                <input
                  type={item.type}
                  value={formData[item.field]}
                  onChange={handleChange(item.field)}
                  required
                  className="peer w-full px-4 pt-6 pb-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200 text-gray-800"
                />
                <label
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
                >
                  {item.label}
                </label>
              </div>
            ))}

            {/* Message Field */}
            <div className="relative">
              <textarea
                rows="4"
                value={formData.message}
                onChange={handleChange('message')}
                required
                className="peer w-full px-4 pt-6 pb-2 bg-gray-100 rounded-md outline-none focus:ring-2 ring-blue-200 text-gray-800"
              ></textarea>
              <label
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-400 to-green-400 shadow-md hover:shadow-xl transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Submit</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-10 rounded-full blur-xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </motion.button>
          </motion.form>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <iframe
              title="Dentoi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.710300542511!2d75.78815781504453!3d26.917747783130934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3c9b1ef7f81%3A0x8b73b7589a31759d!2sAjmeri%20Gate%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1682074413240!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FormForContact;
