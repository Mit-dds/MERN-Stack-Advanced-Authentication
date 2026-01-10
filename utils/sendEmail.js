// import emailjs from "emailjs";

// function sendMailFunction() {
//     return emailjs.send(
//         process.env.EMAIL_SERVICE,
//         process.env.EMAIL_TEMPLATE,
//         {
//             email: "meetkalathiya.dds@gmail.com",
//             name: "raju",
//         },
//         process.env.EMAIL_PUBLIC_KEY
//     )
//     .then((result) => {
//         console.log("Email Send Successfully", result.text);
//         return result;
//     })
//     .catch((error) => {
//         console.log("Email Send Failed", error.text);
//         throw error;
//     });
//     }

// export default sendMailFunction;

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.email,
        subject: options.subject,
        html: options.text,
    };

    transporter.sendMail(mailOptions, function (err, info){
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

module.exports = sendEmail;