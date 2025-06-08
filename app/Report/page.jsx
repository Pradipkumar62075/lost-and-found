"use client";

import { useState } from "react";

export default function ReportLost() {
  const [form, setForm] = useState({
    itemName: "",
    description: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/report-lost", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 text-black">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10 text-black">Report Lost Item</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl space-y-6">
        <input
          name="itemName"
          value={form.itemName}
          onChange={handleChange}
          type="text"
          placeholder="Item Name"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Item description."
          className="w-full p-3 border border-gray-300 rounded-md h-32"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          type="text"
          placeholder="Last Seen Location"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input
          name="date"
          value={form.date}
          onChange={handleChange}
          type="date"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white py-3 rounded-md shadow-md hover:shadow-lg transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}
