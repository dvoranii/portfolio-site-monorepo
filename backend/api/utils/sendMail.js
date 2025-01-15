import nodemailer from "nodemailer";

const createTransporter = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  const transporterConfig = {
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.APP_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  };

  if (isDevelopment) {
    transporterConfig.tls = {
      rejectUnauthorized: false,
    };
  }

  return nodemailer.createTransport(transporterConfig);
};

const sendMail = async ({ name, email, message }) => {
  const transporter = createTransporter();

  const mailOptionsSelf = {
    from: process.env.APP_USER,
    to: process.env.APP_USER,
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  const mailOptionsUser = {
    from: process.env.APP_USER,
    to: email,
    subject: "Thank you for your interest!",
    text: "We have received your form submission. Thanks.",
  };

  try {
    await transporter.sendMail(mailOptionsSelf);
    setTimeout(async () => {
      await transporter.sendMail(mailOptionsUser);
    }, 480000);

    return { success: true };
  } catch (error) {
    console.error("Error in sending email:", error);
    return { success: false, error: error.message, fullError: error };
  }
};

export default sendMail;
