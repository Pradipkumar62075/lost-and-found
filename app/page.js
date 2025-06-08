import React from 'react'
import Link from 'next/link';
import Button from './components/ui/Button';

const page = () => {

  const handleClick = () => {
    alert("Button clicked!");
  }
  return (
    <>
      {/* <div> 
    <h1 className='font-extrabold text-4xl mx-[39%] items-center flex'>Find your items.</h1>
   </div> */}

      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-white shadow-md rounded-b-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Welcome to Lost&Found Portal
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Helping you reconnect with your lost belongings and return found items to their rightful owners.
          </p>
          <div className="mt-6 flex space-x-4">
            <Link href={"/Report"}>
              <Button
                label="Report Lost Item"
                className="bg-blue-600 text-white hover:bg-blue-700"
              // onClick={handleClick}
              />
            </Link>
            <Link href={"/Reportfound"}>
              <Button
                label="Report Found Item"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 ml-4"
              />
            </Link>
            <Link href={"/Search"}>
              <Button
                label="Search Found Items"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 ml-4"
              />
            </Link>
          </div>
        </section>
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Report</h3>
              <p className="text-gray-600">Submit details about your lost or found item using our form.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">2. Search</h3>
              <p className="text-gray-600">Browse listed items or filter by location, category, and date.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Claim</h3>
              <p className="text-gray-600">Verify your item and get in touch with the finder or owner.</p>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Recently Reported Items</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Example Card */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">Black Backpack</h3>
              <p className="text-gray-700 text-sm">Lost at Sage University Canteen – 2 days ago</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">iPhone 13 Blue</h3>
              <p className="text-gray-700 text-sm">Found at Library Hall – 1 day ago</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-blue-600 mb-2">College ID Card</h3>
              <p className="text-gray-700 text-sm">Lost near Parking Area – 3 hours ago</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-400  py-6 text-center text-white mt-auto">
          <p>© {new Date().getFullYear()} Lost&Found Portal. Made with ❤️ by Pradip Kumar</p>
        </footer>
      </div>
    </>
  )
}

export default page;
