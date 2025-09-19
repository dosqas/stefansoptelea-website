import ContentLayout from "../layout/ContentLayout";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContactContent() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name required";
    if (!form.email.trim()) newErrors.email = "Email required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Here you would send the email (e.g., via API)
    setSubmitted(true);
  };

  return (
    <ContentLayout>
      <div className="flex-1 p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-black font-britannic-bold text-blue-800 opacity-100">
          Contact
        </h1>
        <div className="flex justify-center mb-8 mt-4 gap-4">
          <a href="mailto:sop.stefan98@gmail.com" className="p-3 bg-gray-100 hover:bg-blue-200 transition text-black">
            <FaEnvelope size={24} />
          </a>
          <a href="https://linkedin.com/in/stefan-soptelea/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-blue-400 transition text-black">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com/sop.stefan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 hover:bg-pink-300 transition text-black">
            <FaInstagram size={24} />
          </a>
        </div>

        {submitted ? (
          <div className="text-green-600 text-center font-semibold">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div className="flex gap-4">
              <div className="flex-1">
                <span className="text-sm text-neutral-600">First Name *</span>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full border px-3 py-2 mt-2 ${errors.firstName ? "border-red-500" : "border-gray-800"}`}
                />
                {errors.firstName && <div className="text-red-500 text-xs">{errors.firstName}</div>}
              </div>
              <div className="flex-1">
                <span className="text-sm text-neutral-600">Last Name *</span>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full border px-3 py-2 mt-2 ${errors.lastName ? "border-red-500" : "border-gray-800"}`}
                />
                {errors.lastName && <div className="text-red-500 text-xs">{errors.lastName}</div>}
              </div>
            </div>
            <div>
              <span className="text-sm text-neutral-600">Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border px-3 py-2 mt-2 ${errors.email ? "border-red-500" : "border-gray-800"}`}
              />
              {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`w-full border px-3 py-2 ${errors.message ? "border-red-500" : "border-gray-800"}`}
              />
              {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 hover:bg-neutral-600 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </ContentLayout>
  );
}