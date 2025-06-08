"use client";

import { useState } from "react";

const Reportfound = () => {
  const [form, setForm] = useState({
    itemName: "",
    description: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/report-found", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 text-black">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">
        Report Found Item
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto text-black bg-white p-10 rounded-2xl shadow-2xl space-y-6"
      >
        <input
          name="itemName"
          value={form.itemName}
          onChange={handleChange}
          type="text"
          placeholder="Item Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          type="text"
          placeholder="Found Location"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          type="date"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 rounded-md shadow-md hover:shadow-lg transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default Reportfound ;
