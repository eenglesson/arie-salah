'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        'service_hjyxwlb', // Replace with your EmailJS service ID
        'template_u5oczb6', // Replace with your EmailJS template ID
        {
          to_name: 'Salah Legal ESQ.', // Replace with the recipient's name
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email
          message: formData.message, // Message content
        },
        'YYgu_Yw10U1fBvjKv' // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log('Email sent:', result.text);
        setFormData({ email: '', name: '', message: '' }); // Reset form fields
        setIsSending(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setIsSending(false);
      });
  };

  return (
    <>
      <form onSubmit={sendEmail} className='w-full flex flex-col gap-3 '>
        <aside className='flex flex-col sm:flex-row gap-3 w-full'>
          <div className='flex-1'>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your Email'
              className='w-full border placeholder:text-bodyMedium font-normal placeholder:font-light placeholder:text-dark50 sm:placeholder:text-bodyDefault rounded-lg px-3 py-2 text-bodyMedium sm:text-bodyDefault focus:outline-none focus:border-gold border-transparent bg-grey05'
              required
            />
          </div>
          <div className='flex-1'>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your Name'
              className='w-full border placeholder:text-bodyMedium font-normal placeholder:font-light  placeholder:text-dark50 sm:placeholder:text-bodyDefault rounded-lg px-3 py-2 text-bodyMedium sm:text-bodyDefault focus:outline-none focus:border-gold border-transparent bg-grey05'
              required
            />
          </div>
        </aside>
        <div>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder='Your Message'
            className='w-full border placeholder:text-bodyMedium font-normal placeholder:font-light placeholder:text-dark50 sm:placeholder:text-bodyDefault rounded-lg px-3 py-2 text-bodyMedium sm:text-bodyDefault focus:outline-none focus:border-gold border-transparent bg-grey05'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gold text-white rounded-lg px-4 py-3 disabled:opacity-50'
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </>
  );
}
