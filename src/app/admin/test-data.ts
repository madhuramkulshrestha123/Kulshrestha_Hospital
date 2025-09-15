// Test data generation script for admin dashboard
// This is for testing purposes only

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

interface Appointment {
  id: string;
  patientName: string;
  mobileNumber: string;
  date: string;
  timeSlot: string;
  message: string;
  submittedAt: string;
}

export const generateTestData = () => {
  // Generate test contacts
  const contacts: Contact[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "General Inquiry",
      message: "I would like to know more about your pediatric services.",
      date: new Date().toLocaleDateString()
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Appointment Request",
      message: "Looking to schedule an appointment for my 3-year-old.",
      date: new Date().toLocaleDateString()
    },
    {
      id: "3",
      name: "Robert Johnson",
      email: "robert@example.com",
      subject: "Feedback",
      message: "Great service during our last visit. Thank you!",
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString() // 2 days ago
    }
  ];

  // Generate test appointments
  const appointments: Appointment[] = [
    {
      id: "1",
      patientName: "Emma Wilson",
      mobileNumber: "9876543210",
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
      timeSlot: "10am-11am",
      message: "Regular checkup for 6-month-old baby",
      submittedAt: new Date().toISOString()
    },
    {
      id: "2",
      patientName: "Michael Brown",
      mobileNumber: "8765432109",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
      timeSlot: "2pm-3pm",
      message: "Vaccination appointment",
      submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString() // 1 day ago
    },
    {
      id: "3",
      patientName: "Sarah Davis",
      mobileNumber: "7654321098",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      timeSlot: "11am-12pm",
      message: "First visit for newborn",
      submittedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days ago
    }
  ];

  // Save to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));
  localStorage.setItem("appointments", JSON.stringify(appointments));
  
  console.log("Test data generated successfully!");
};