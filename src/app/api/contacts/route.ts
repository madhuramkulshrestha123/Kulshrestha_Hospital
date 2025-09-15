import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/lib/models/Contact';

export async function GET() {
  try {
    await dbConnect();
    
    // Get all contacts, sorted by date (newest first)
    const contacts = await Contact.find({}).sort({ date: -1 });
    
    return NextResponse.json({ success: true, data: contacts });
  } catch (error: unknown) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch contacts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Create a new contact
    const contact = new Contact({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      date: new Date()
    });
    
    await contact.save();
    
    return NextResponse.json({ success: true, data: contact });
  } catch (error: unknown) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ success: false, error: 'Failed to create contact' }, { status: 500 });
  }
}

// Delete contacts older than 7 days
export async function DELETE() {
  try {
    await dbConnect();
    
    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    // Delete old contacts
    const result = await Contact.deleteMany({ date: { $lt: sevenDaysAgo } });
    
    return NextResponse.json({ success: true, deletedCount: result.deletedCount });
  } catch (error: unknown) {
    console.error('Error deleting old contacts:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete old contacts' }, { status: 500 });
  }
}