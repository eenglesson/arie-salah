'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { fadeInAnimationVariantsBottom } from '@/lib/framerMotion';
import { toast } from 'sonner';

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
      toast.error('Vul alle velden in voor verzending.');
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        'service_hs9isbo', // Replace with your EmailJS service ID
        'template_yf4pcbs', // Replace with your EmailJS template ID
        {
          to_name: 'Salah Legal ESQ.', // Recipient's name
          from_name: formData.name, // Sender's name
          from_email: formData.email, // Sender's email
          message: formData.message, // Message content
        },
        'c4mJwCYK_f0V9VuS_' // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log('Email sent:', result.text);
        setFormData({ email: '', name: '', message: '' }); // Reset form fields
        toast.success('Email succesvol verzonden!');
        setIsSending(false);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        toast.error('Er is een fout opgetreden, probeer het opnieuw.');
        setIsSending(false);
      });
  };

  return (
    <>
      <form onSubmit={sendEmail} className='w-full flex flex-col gap-4 '>
        <aside className='flex flex-col sm:flex-row gap-4 w-full'>
          <div className='flex-1'>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Uw e-mailadres'
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
              placeholder='Uw naam'
              className='w-full border placeholder:text-bodyMedium font-normal placeholder:font-light  placeholder:text-dark50 sm:placeholder:text-bodyDefault rounded-lg px-3 py-2 text-bodyMedium sm:text-bodyDefault focus:outline-none focus:border-gold border-transparent bg-grey05'
              required
            />
          </div>
        </aside>
        <div className='flex gap-2 flex-col'>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder='Uw bericht'
            className='w-full border placeholder:text-bodyMedium font-normal placeholder:font-light placeholder:text-dark50 sm:placeholder:text-bodyDefault rounded-lg px-3 py-2 text-bodyMedium sm:text-bodyDefault focus:outline-none focus:border-gold border-transparent bg-grey05'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-gold text-white rounded-lg px-4 py-3 disabled:opacity-50'
          disabled={isSending}
        >
          {isSending ? 'Bezig met verzenden...' : 'Verstuur bericht'}
        </button>
        <aside className='xl:hidden mt-8 flex flex-col gap-4'>
          <motion.h4
            variants={fadeInAnimationVariantsBottom}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            className='text-h4 font-normal tracking-wide'
          >
            Contactinformatie
          </motion.h4>
          <div className='xl:hidden flex flex-col gap-2'>
            <motion.a
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='hover:underline group flex items-center gap-2'
              href='mailto:salahlegal@outlook.com'
            >
              <Mail size={16} />
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                salahlegal@outlook.com
              </span>
            </motion.a>
            <motion.a
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='hover:underline group flex items-center gap-2'
              href='tel:+31648162676'
            >
              <Phone size={16} />
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault hover:text-black'>
                06-48162676
              </span>
            </motion.a>
            <motion.div
              variants={fadeInAnimationVariantsBottom}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              className='flex flex-col gap-1 mt-4'
            >
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                KvK-nummer: 92043070
              </span>
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                BTW-nummer: NL004936556B76
              </span>
              <span className='text-dark70 text-bodyMedium sm:text-bodyDefault'>
                Postadres: postbus 7344, <br />
                2701 AH Zoetermeer
              </span>
            </motion.div>
          </div>
        </aside>
      </form>
    </>
  );
}
