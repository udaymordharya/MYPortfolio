import { CONTACT, SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
        // Replace with your actual EmailJS Service ID, Template ID, and Public Key
        emailjs
            .send(
                "service_p6lq17j", // Replace with your Service ID
                "template_fmq6ulm", // Replace with your Template ID
                {
                    from_name: formData.name,
                    to_name: "Uday",
                    from_email: formData.email,
                    message: formData.message,
                },
                "et3Ti5Q0APsoz1mWF" // Replace with your Public Key
            )
            .then(
                () => {
                    setIsSending(false);
                    setStatus("success");
                    setFormData({ name: "", email: "", message: "" });
                    setTimeout(() => setStatus(null), 5000);
                },
                (error) => {
                    console.error("FAILED...", error);
                    setIsSending(false);
                    setStatus("error");
                    // Alert the user with the specific error message
                    alert(`Failed to send message: ${error.text || error.message || "Unknown error"}`);
                    setTimeout(() => setStatus(null), 5000);
                }
            );
    };

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-16 text-center text-4xl font-bold"
            >
                Get in Touch
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-6">
                {/* Left Column: Contact Info & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-neutral-400 max-w-md">
                        I'm currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best
                        to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-neutral-800 p-3 rounded-full text-purple-400">
                                <FaEnvelope size={20} />
                            </div>
                            <a href={`mailto:${CONTACT.email}`} className="text-neutral-300 hover:text-white transition-colors">
                                {CONTACT.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-neutral-800 p-3 rounded-full text-purple-400">
                                <FaPhoneAlt size={20} />
                            </div>
                            <a href={`tel:${CONTACT.phoneNo}`} className="text-neutral-300 hover:text-white transition-colors">
                                {CONTACT.phoneNo}
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-neutral-800 p-3 rounded-full text-purple-400">
                                <FaMapMarkerAlt size={20} />
                            </div>
                            <span className="text-neutral-300">{CONTACT.address}</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 rounded-lg text-white hover:bg-purple-600 transition-colors duration-300 hover:-translate-y-1">
                            <FaLinkedin size={24} />
                        </a>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 rounded-lg text-white hover:bg-purple-600 transition-colors duration-300 hover:-translate-y-1">
                            <FaGithub size={24} />
                        </a>
                        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 rounded-lg text-white hover:bg-purple-600 transition-colors duration-300 hover:-translate-y-1">
                            <FaXTwitter size={24} />
                        </a>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 rounded-lg text-white hover:bg-purple-600 transition-colors duration-300 hover:-translate-y-1">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 backdrop-blur-sm shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                                placeholder="How can I help you?"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className={`w-full py-4 rounded-lg font-bold text-white transition-all duration-300 ${isSending
                                ? "bg-neutral-700 cursor-not-allowed"
                                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/20"
                                }`}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;