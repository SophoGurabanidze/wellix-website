
import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const {
    company,
    name,
    street,
    zip,
    city,
    phone,
    email,
    location,
    purpose,
    depth,
    usage,
    engineeringInvolved,
    engineeringOffice,
    budget,
    currency,
    notes,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info@wellix.ge", 
      pass: process.env.EMAIL_PASS, // set this in your .env
    },
  });

  const mailOptions = {
    from: email,
    to: "info@wellix.ge",
    subject: `ახალი მოთხოვნა განფასებაზე ${company}`,
    text: `
კომპანიის დასახელება: ${company}
სახელი: ${name}
მისამართი: ${street}, ${zip} ${city}
ტელეფონი: ${phone}
Email: ${email}

ობიექტის მდებარეობა:
${location}

ჭაბურღილის მიზნობრიობა:
${purpose}

სავარაუდო სიღრმე: ${depth} მეტრი
მოთხოვნილი წყლის რაოდენობა: ${usage} ლიტრი

ჰიდროგეოლოგიური დასკვნა არსეობს: ${
      engineeringInvolved === "yes" ? `კი – ${engineeringOffice}` : "არა"
    }

დაგეგმილი ბიუჯეტი: ${budget} ${currency}

დამატებითი კომენტარები:
${notes}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Email failed to send" });
  }
});

export default router;
