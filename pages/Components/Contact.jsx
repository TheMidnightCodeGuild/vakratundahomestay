import React, { useState } from "react";
import { PropagateLoader } from "react-spinners";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/form-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-gray-600 body-font relative min-h-screen">
      <div className="container px-5 py-12 md:py-24 mx-auto flex flex-col md:flex-row">
        <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative w-full md:w-1/2 mb-10 md:mb-0">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5763793351647!2d75.79008461744384!3d23.149010984890373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375828d02c23b%3A0x369c02a50dda5f1a!2sVakratunda%20Homestay!5e0!3m2!1sen!2sin!4v1681646891087!5m2!1sen!2sin"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}></iframe>
          <a
            className="absolute inset-0 z-10 cursor-pointer"
            href="https://www.google.com/maps/dir//B+27%2F5,+Indore+Rd,+near+Mahamritunjay+Dwar,+Vasant+Vihar,+Ujjain,+Madhya+Pradesh+456010/@23.1489896,75.7102479,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396375828d02c23b:0x369c02a50dda5f1a!2m2!1d75.7926495!2d23.149011?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"></a>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                B-27/5, Indore Rd, near Mahamritunjay Dwar, Vasant Vihar,
                Ujjain, Madhya Pradesh 456010
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-500 leading-relaxed hover:text-indigo-600"
                href="mailto:vakratundahomestay@gmail.com">
                vakratundahomestay@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+918085863266</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:ml-auto w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
            GET IN TOUCH WITH US
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            We&apos;d love to hear from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="mobile"
                className="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full transition duration-300 ease-in-out"
              disabled={isSubmitting}>
              {isSubmitting ? (
                <PropagateLoader color="white" size={8} speedMultiplier={0.7} />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("Error") ? "text-red-600" : "text-green-600"
              }`}>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
