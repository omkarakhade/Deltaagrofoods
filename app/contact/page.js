'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div>
      <section className="bg-delta-navy py-14">
        <div className="container-px text-center text-white">
          <h1 className="text-4xl font-extrabold mb-2">Get in Touch</h1>
          <p className="text-white/90">
            Questions, orders, or partnership inquiries — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="container-px py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-xl font-bold text-delta-navy mb-5">Contact Details</h2>
          <ul className="space-y-4 text-gray-700">
            <li><span className="font-semibold text-delta-navy">Phone:</span> Hussain – 75071 00026 · Rayaan – 90210 70218</li>
            <li><span className="font-semibold text-delta-navy">Email:</span> info@deltaagrofoods.com</li>
            <li><span className="font-semibold text-delta-navy">Office:</span> 6/B, Goyal Industrial Premises, J-514, J Block, M.I.D.C., Anucool Chowk, Bhosari, Pune - 411026</li>
            <li><span className="font-semibold text-delta-navy">Factory:</span> SR no 215/15, Saraswati Society, Ganesh Nagar, Talawade, Pune - 412109</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-semibold text-delta-navy mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-delta-green"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-delta-navy mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-delta-green"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-delta-navy mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-delta-green"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-delta-green hover:bg-delta-green-dark text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-delta-green text-sm font-medium">Message sent! We&apos;ll be in touch soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-sm font-medium">Something went wrong — please try again.</p>
          )}
        </form>
      </section>
    </div>
  );
            }
