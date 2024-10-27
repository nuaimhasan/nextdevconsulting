const nodemailer = require("nodemailer");

const backendURL = process.env.BACKEND_URL;
const frontendURL = process.env.FRONTEND_URL;

exports.emailSend = async (userMail, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "shihab.merndeveloper@gmail.com",
      pass: "ytfu zxbw rdul dmrg",
    },
  });

  const info = await transporter.sendMail({
    from: "NextDev Consultancy", // sender address
    to: userMail, // list of receivers
    subject:
      "Welcome to NextDev Consulting – Building a Better Future Together!", // Subject line
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h1 style="color: #333;">Welcome to NextDev Consulting!</h1>
        <p style="color: #555; font-size: 16px; line-height: 1.5;">
          Dear Subscriber,<br><br>
          Thank you for subscribing to NextDev Consulting’s newsletter! We’re thrilled to have you as part of our growing community dedicated to creating a more equitable, sustainable, and innovative world.
        </p>
        <h2 style="color: #333; font-size: 18px;">As a subscriber, you’ll be among the first to receive:</h2>
        <ul style="color: #555; font-size: 16px; line-height: 1.5;">
          <li>Exclusive insights on global trends in sustainability, digital transformation, and development</li>
          <li>Updates on our latest projects and success stories</li>
          <li>Expert articles and thought leadership pieces from our team</li>
          <li>Opportunities to get involved in impactful initiatives</li>
        </ul>
        <p style="color: #555; font-size: 16px; line-height: 1.5;">
          At NextDev Consulting, we believe in the power of evidence-based solutions and partnerships to drive positive social, economic, and environmental change. Whether you're interested in the latest in climate action, sustainable agriculture, or digital innovation, you’ll find valuable insights in our newsletter.
        </p>
        <h3 style="color: #333;">Here’s what you can do next:</h3>
        <ul style="color: #555; font-size: 16px; line-height: 1.5;">
          <li><a href="${frontendURL}/services" style="color: #007BFF; text-decoration: none;">Explore Our Services</a></li>
          <li><a href="${frontendURL}/news-insights" style="color: #007BFF; text-decoration: none;">Read Our Latest Insights</a></li>
          <li><a href="${frontendURL}/contact-us" style="color: #007BFF; text-decoration: none;">Follow Us on Social Media</a></li>
        </ul>
        <p style="color: #555; font-size: 16px; line-height: 1.5;">
          If you ever have any questions, feel free to reach out to us at <a href="mailto:contact@nextdev.com" style="color: #007BFF; text-decoration: none;">contact@nextdev.com</a>.
        </p>
        <p style="color: #555; font-size: 16px; line-height: 1.5;">
          Welcome aboard – we’re excited to have you with us!<br><br>
          Best regards,<br>
          The NextDev Consulting Team<br>
          <em>Building a Better Future, Together</em>
        </p>
      </div>
    `,
  });
};
