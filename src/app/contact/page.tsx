"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Layout } from "../../components/Layout";

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      formRef.current.reset();
      setSuccess(true);
    } catch (error: any) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase font-label">
            Contact Me
          </span>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
            Let's work <span className="text-primary italic">Together</span>
          </h1>

          <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl lg:max-w-none lg:whitespace-nowrap">
            If you're looking for someone to build something meaningful or join
            your team, I'd love to connect.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-full p-8 sm:p-10 rounded-3xl border border-outline-variant/20 bg-surface-container-low shadow-sm">
            <div className="flex items-center gap-3 mb-10">
              <MessageSquare />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Full Name"
                  required
                  disabled={loading}
                  className="w-full border-b border-outline-variant p-3 outline-none bg-transparent"
                />

                <input
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  required
                  disabled={loading}
                  className="w-full border-b border-outline-variant p-3 outline-none bg-transparent"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                disabled={loading}
                className="w-full border-b border-outline-variant p-3 outline-none bg-transparent"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                disabled={loading}
                className="w-full border-b border-outline-variant p-3 outline-none resize-none bg-transparent"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-white py-4 rounded-lg flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>

              {success && (
                <p className="text-green-600 text-sm">
                  Message sent successfully.
                </p>
              )}

              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
            </form>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ContactPage;
