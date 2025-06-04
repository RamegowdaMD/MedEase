import contactModel from '../models/contactModel.js';


const submitContactForm = async (req, res) => {
  try {
    const { names, email, message } = req.body;

    const contactData = {
      names,
      email,
      message,
      date: Date.now(),
    };

    const newContact = new contactModel(contactData);
    await newContact.save();

    res.json({
      success: true,
      message: "Your message has been received. We will get back to you shortly.",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


export {submitContactForm}
