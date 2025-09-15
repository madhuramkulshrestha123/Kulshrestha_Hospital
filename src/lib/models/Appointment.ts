import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  mobileNumber: string;
  date: string;
  timeSlot: string;
  message: string;
  submittedAt: Date;
}

const AppointmentSchema: Schema = new Schema({
  patientName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
  message: { type: String, required: false },
  submittedAt: { type: Date, default: Date.now }
});

// Add indexes for better query performance
AppointmentSchema.index({ date: 1 });
AppointmentSchema.index({ submittedAt: 1 });

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);