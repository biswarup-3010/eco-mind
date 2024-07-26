import React, { useState } from "react";
import TeamMember from "./TeamMember";

export default function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    idType: '',
    idFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'idFile') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation check
    if (!formData.name || !formData.email || !formData.message || !formData.idType || !formData.idFile) {
      alert("Please fill in all required fields.");
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black/80 text-white pt-16" id="JoinUsPage">
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0">
        <div className="flex-1 p-5">
          <TeamMember />
        </div>
        <div className="flex-1 p-5 sm:px-16 md:mr-8">
          <h2 className="text-2xl mb-4">Join Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                rows="4"
                required
              />
            </div>
            <div>
              <label htmlFor="idType" className="block text-lg">Select Your ID Type</label>
              <select
                id="idType"
                name="idType"
                value={formData.idType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                required
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver's License</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="idFile" className="block text-lg">Upload Your ID</label>
              <input
                type="file"
                id="idFile"
                name="idFile"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-black bg-white"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
