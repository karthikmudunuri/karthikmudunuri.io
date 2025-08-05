import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: [req.body.email, "karthikmudunuri999@gmail.com"],
      from: "karthikmudunuri999@gmail.com",
      subject: "Greetings! Thankyou for contacting me",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Hello, ${req.body.email} 👋</h3>
              <div style="font-size: 16px;">
              <p>Thankyou for contacting me through my website. I'm excited to work with you.</p>
              <p><span class="spantext" style="font-weight: bold;">Reply</span> to this email with your requirements and I will get back to you.</p>
              <p>Meanwhile, <a class="blog" href="https://karthikmudunuri.io/blog/" style="text-decoration: none;color: blue;font-weight: bold;">checkout my blog</a> to get more insights about my work.</p>
              <p>Or simply, just say Hi :) <a href="https://wa.me/919179661999?text=Hi" target="__blank" class="whatsapp" style="text-decoration: none;font-weight: bold;background: #10B981;padding: 4px;border-radius: 5px;color: white;">WhatsApp</a></p>
              <br>
              </div>
              <img src="https://karthikmudunuri.io/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Karthik Mudunuri<br>Software Developer<br>+91 9179661999</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://karthikmudunuri.i0/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://karthikmudunuri.io/blog/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/karthikmudunuri/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://instagram.com/___karthik.varma___/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://linkedin.com/in/karthikmudunuri/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};
