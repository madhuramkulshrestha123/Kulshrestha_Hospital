export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">Kulshrestha Hospital</h1>
        <p className="text-xl text-center text-gray-600">Best Child Care in Agra with Experience of over 30 years</p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pediatric Care</li>
              <li>Neonatal Care</li>
              <li>Child Vaccination</li>
              <li>Nutrition Counseling</li>
            </ul>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>30+ Years Experience</li>
              <li>Expert Pediatricians</li>
              <li>Modern Facilities</li>
              <li>Compassionate Care</li>
            </ul>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">📍 Agra, Uttar Pradesh</p>
            <p className="mb-2">📞 +91 XXXXXXXXXX</p>
            <p className="mb-2">✉️ info@kulshresthahospital.com</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            Book an Appointment
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Kulshrestha Hospital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
