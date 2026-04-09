import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
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
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      formRef.current.reset();
      setSuccess(true);
    } catch (error: any) {
      console.error(error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 font-label">
            Contact Me
          </span>

          <h1 className="font-headline text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 xs:mb-6 leading-tight">
            Let’s work <span className="text-primary italic">together</span>
          </h1>

          <p className="text-lg text-on-surface-variant mb-10 max-w-md">
            If you’re looking for someone to build something meaningful or join
            your team, I’d love to connect.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                label:
                  import.meta.env.VITE_EMAIL ||
                  "anuphap.thianprayoon@gmail.com",
                href: `mailto:${import.meta.env.VITE_EMAIL || "anuphap.thianprayoon@gmail.com"}`,
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href:
                  import.meta.env.VITE_LINKEDIN_URL ||
                  "https://www.linkedin.com/in/anuphap-thianprayoon-580248242/",
              },
              {
                icon: Github,
                label: "GitHub",
                href:
                  import.meta.env.VITE_GITHUB_URL ||
                  "https://github.com/anuphapth",
              },
            ].map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon />
                <span className="group-hover:text-primary">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="p-10 md:p-14 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare />
              <h2 className="text-2xl font-bold">Send a Message</h2>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Full Name"
                  required
                  disabled={loading}
                  className="border-b p-3 outline-none"
                />

                <input
                  name="user_email"
                  type="email"
                  placeholder="Email Address"
                  required
                  disabled={loading}
                  className="border-b p-3 outline-none"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                disabled={loading}
                className="w-full border-b p-3 outline-none"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                disabled={loading}
                className="w-full border-b p-3 outline-none resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-lg flex justify-center items-center gap-2 disabled:opacity-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </motion.button>

              {/* Feedback */}
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-sm"
                >
                  Message sent successfully.
                </motion.p>
              )}

              {errorMsg && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm"
                >
                  {errorMsg}
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
