import React, { useState } from 'react';

const ContactPage = () => {

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field if value is valid
    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "name" && value.trim()) {
        delete newErrors.name;
      }

      if (name === "email") {
        if (/\S+@\S+\.\S+/.test(value)) {
          delete newErrors.email;
        }
      }

      if (name === "message" && value.trim()) {
        delete newErrors.message;
      }

      return newErrors;
    });
  };

  // Validate fields on submit
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // Handle submit btn
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    // Store the data in an object
    const submittedData = { ...formData };
    console.log("Submitted:", submittedData);
    // reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-center items-start shadow-md rounded-2xl p-6 py-8 w-[350px] md:w-[500px] h-auto bg-gradient-to-r from-indigo-50 to-white"
      >
        <h3 className='font-medium mb-4'>Contact Us : </h3>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-1.5 w-full"
        />
        
        {errors.name && <p className="text-red-500 text-sm px-1">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-1.5 w-full mt-4 md:mt-6"
        />
        {errors.email && <p className="text-red-500 text-sm px-1">{errors.email}</p>}

        {/* Message */}
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-md border sm:text-sm p-1.5 mt-4 md:mt-6"
        />
        {errors.message && (
          <p className="text-red-500 text-sm px-1">{errors.message}</p>
        )}

        <div className='flex justify-center items-center w-full mt-4 md:mt-6'>
          <button
          type="submit"
          onClick={handleSubmit}
          className="bg-indigo-600 text-white hover:bg-indigo-500 w-max p-1 px-4 md:px-6 rounded-lg shadow-lg hover:cursor-pointer font-medium"
        >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
