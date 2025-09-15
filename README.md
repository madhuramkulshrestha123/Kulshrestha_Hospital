# Kulshrestha Hospital Website

A modern, responsive website for Kulshrestha Hospital built with Next.js 15, React 19, and Tailwind CSS.


<img width="1132" height="529" alt="Screenshot 2025-09-15 032415" src="https://github.com/user-attachments/assets/0f7f53e5-2bce-466a-a5a7-d12c288d618b" />

## Features

- Responsive design that works on all devices
- Modern UI with animations and transitions
- Contact form for patient inquiries
- Appointment booking system
- Admin dashboard for managing contacts and appointments
- Automatic cleanup of old records (7 days)

## Admin Dashboard

The admin dashboard allows hospital staff to view and manage contact messages and appointment requests.

### Access

Navigate to `/admin` route to access the dashboard. No authentication is required.

### Features

1. **Contact Management**: View all contact form submissions
2. **Appointment Management**: View all appointment requests
3. **Date Filtering**: Filter records by specific dates
4. **Automatic Cleanup**: Records are automatically deleted after 7 days

### How It Works

#### Data Storage
- Contact form submissions are stored in the browser's localStorage
- Appointment requests are stored in the browser's localStorage
- Each record has a timestamp for automatic cleanup

#### Automatic Cleanup
- When the admin dashboard loads, it automatically removes records older than 7 days
- This helps keep the dashboard clean and focused on recent inquiries

#### Data Structure

**Contacts**
- Name
- Email
- Subject
- Message
- Date submitted

**Appointments**
- Patient Name
- Mobile Number
- Preferred Date
- Preferred Time Slot
- Message
- Date submitted

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

### Running Production Server

```bash
npm run start
```

## Note

Since this system uses localStorage for data storage, all data is stored locally in the browser and will be lost if:
- The browser's cache is cleared
- A different browser/device is used
- The user is in private/incognito mode

For a production environment, this should be replaced with a proper backend database.

## Technologies Used

- Next.js 15 with App Router
- React 19
- Tailwind CSS
- TypeScript
