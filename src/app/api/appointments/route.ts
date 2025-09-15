import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/lib/models/Appointment';

export async function GET() {
  try {
    await dbConnect();
    
    // Get all appointments, sorted by submission date (newest first)
    const appointments = await Appointment.find({}).sort({ submittedAt: -1 });
    
    return NextResponse.json({ success: true, data: appointments });
  } catch (error: unknown) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch appointments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Create a new appointment
    const appointment = new Appointment({
      patientName: body.patientName,
      mobileNumber: body.mobileNumber,
      date: body.date,
      timeSlot: body.timeSlot,
      message: body.message,
      submittedAt: new Date()
    });
    
    await appointment.save();
    
    return NextResponse.json({ success: true, data: appointment });
  } catch (error: unknown) {
    console.error('Error creating appointment:', error);
    return NextResponse.json({ success: false, error: 'Failed to create appointment' }, { status: 500 });
  }
}

// Delete appointments older than 7 days
export async function DELETE() {
  try {
    await dbConnect();
    
    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    // Delete old appointments
    const result = await Appointment.deleteMany({ submittedAt: { $lt: sevenDaysAgo } });
    
    return NextResponse.json({ success: true, deletedCount: result.deletedCount });
  } catch (error: unknown) {
    console.error('Error deleting old appointments:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete old appointments' }, { status: 500 });
  }
}