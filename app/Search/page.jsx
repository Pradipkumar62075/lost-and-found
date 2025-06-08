"use client";

import { useState } from "react";

const SearchFoundItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchTerm, location, date }),
    });

    const data = await res.json();
    setResults(data.items);
  };

  return (
    <div className="p-6 ">
      <h2 className="text-3xl  font-bold text-center border-red-500 text-green-600 mb-6 ">Search Found Items</h2>

      <div className="flex flex-col  md:flex-row gap-4 mb-6 border-2 text-black">
        <input
          placeholder="Item name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-3 bg-white rounded-md flex-1"
        />
        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 bg-white border rounded-md"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 bg-white border rounded-md"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Search
        </button>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.length > 0 ? (
          results.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-md bg-white">
              <h3 className="text-xl font-semibold text-green-700">{item.itemName}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Location:</strong> {item.location} <br />
                <strong>Date:</strong> {item.date}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No matching items found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFoundItems ;
