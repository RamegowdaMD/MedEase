import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  names: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const contactModel = mongoose.model('contact', contactSchema);

export default contactModel; 