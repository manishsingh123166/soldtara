const nodemailer = require('nodemailer');
require('dotenv').config(); // Ye line .env file se data khichne ke liye zaruri hai

async function sendVerificationEmail(to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            // Ye ab tumhari .env file se EMAIL_USER uthayega
            user: process.env.EMAIL_USER, 
            // Ye tumhari .env file se EMAIL_PASS uthayega
            pass: process.env.EMAIL_PASS 
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender ka email
        to: to,                       // Jisko bhej rahe ho
        subject: subject,             // Email ka subject
        text: text                    // Email ka message (OTP wagera)
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Mubarak ho bhai! Email sahi se chala gaya to: " + to);
    } catch (error) {
        console.error("Email bhejane mein dikkat aayi: ", error.message);
        throw error; // Isse backend ko pata chalega ki error aaya hai
    }
}

module.exports = { sendVerificationEmail };