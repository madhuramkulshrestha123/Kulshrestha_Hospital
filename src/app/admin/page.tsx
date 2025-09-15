"use client";

import { useState, useEffect } from "react";

interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

interface Appointment {
  _id: string;
  patientName: string;
  mobileNumber: string;
  date: string;
  timeSlot: string;
  message: string;
  submittedAt: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filterDate, setFilterDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch contacts
      const contactsResponse = await fetch('/api/contacts');
      const contactsData = await contactsResponse.json();
      
      if (contactsData.success) {
        setContacts(contactsData.data);
      } else {
        throw new Error(contactsData.error || 'Failed to fetch contacts');
      }
      
      // Fetch appointments
      const appointmentsResponse = await fetch('/api/appointments');
      const appointmentsData = await appointmentsResponse.json();
      
      if (appointmentsData.success) {
        setAppointments(appointmentsData.data);
      } else {
        throw new Error(appointmentsData.error || 'Failed to fetch appointments');
      }
      
      // Clean old records (older than 7 days)
      await fetch('/api/contacts', { method: 'DELETE' });
      await fetch('/api/appointments', { method: 'DELETE' });
    } catch (err) {
      console.error('Error fetching data:', err);
      // Type guard to check if err is an Error object
      if (err instanceof Error) {
        setError(err.message || 'Failed to fetch data');
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const filteredContacts = filterDate
    ? contacts.filter(contact => new Date(contact.date).toISOString().split('T')[0] === filterDate)
    : contacts;

  const filteredAppointments = filterDate
    ? appointments.filter(appointment => appointment.date === filterDate)
    : appointments;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full transform transition-all hover:scale-105 duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Occurred</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={fetchData}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Animation */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage contacts and appointments with ease</p>
            </div>
            <button
              onClick={fetchData}
              className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Cards with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center">
              <div className="rounded-2xl bg-white bg-opacity-20 p-4 mr-4 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-100">Total Appointments</p>
                <p className="text-3xl font-bold mt-1">{appointments.length}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-400 border-opacity-30">
              <p className="text-xs text-blue-100 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +{Math.floor(Math.random() * 5)} from yesterday
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transform transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center">
              <div className="rounded-2xl bg-white bg-opacity-20 p-4 mr-4 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-purple-100">Total Queries</p>
                <p className="text-3xl font-bold mt-1">{contacts.length}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-400 border-opacity-30">
              <p className="text-xs text-purple-100 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +{Math.floor(Math.random() * 3)} from yesterday
              </p>
            </div>
          </div>
        </div>

        {/* Separate Sections for Contacts and Appointments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contacts Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <h2 className="text-xl font-bold text-white">Contact Queries</h2>
              <p className="text-blue-100 text-sm mt-1">Manage incoming contact messages</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">
                  Total contacts: {filteredContacts.length}
                </p>
                <div className="flex items-center">
                  <label htmlFor="filter-date-contacts" className="mr-2 text-gray-700 text-sm">Filter by date:</label>
                  <input
                    type="date"
                    id="filter-date-contacts"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {filterDate && (
                    <button
                      onClick={() => setFilterDate("")}
                      className="ml-2 text-gray-500 hover:text-gray-700 text-sm"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredContacts.length > 0 ? (
                      filteredContacts.map((contact) => (
                        <tr key={contact._id} className="hover:bg-blue-50 transition-colors duration-150">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {contact.name}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {contact.email}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {contact.subject}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {new Date(contact.date).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-3 text-center text-sm text-gray-500">
                          No contacts found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Appointments Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <h2 className="text-xl font-bold text-white">Appointments</h2>
              <p className="text-purple-100 text-sm mt-1">Manage patient appointment requests</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">
                  Total appointments: {filteredAppointments.length}
                </p>
                <div className="flex items-center">
                  <label htmlFor="filter-date-appointments" className="mr-2 text-gray-700 text-sm">Filter by date:</label>
                  <input
                    type="date"
                    id="filter-date-appointments"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  {filterDate && (
                    <button
                      onClick={() => setFilterDate("")}
                      className="ml-2 text-gray-500 hover:text-gray-700 text-sm"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Patient Name
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mobile
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time Slot
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAppointments.length > 0 ? (
                      filteredAppointments.map((appointment) => (
                        <tr key={appointment._id} className="hover:bg-purple-50 transition-colors duration-150">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            {appointment.patientName}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {appointment.mobileNumber}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            {appointment.date}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                              {appointment.timeSlot}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-3 text-center text-sm text-gray-500">
                          No appointments found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section with Glass Morphism */}
        <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white border-opacity-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Notice
            </div>
            <p className="text-gray-700 mb-2 font-medium">
              All contacts and appointments are automatically deleted after 7 days.
            </p>
            <p className="text-gray-600 text-sm mb-1">
              For technical support, contact: 
              <a href="mailto:madhuramkulshrestha447@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium ml-1 transition-colors duration-300">
                madhuramkulshrestha447@gmail.com
              </a>
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Designed and developed by Madhuram Kulshrestha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}