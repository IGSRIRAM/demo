import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      // Admin Mail
      await emailjs.sendForm(
        "service_i87btat",
        "template_oplryhy",
        formRef.current,
        "Qya_tQDO1TBBdo3xH"
      );

      // Thank You Mail
      await emailjs.send(
        "service_i87btat",
        "template_qymedlx",
        {
          email: formRef.current.email.value,
          name: formRef.current.name.value,
          message: formRef.current.message.value,
        },
        "Qya_tQDO1TBBdo3xH"
      );

      setStatus({ type: "success", msg: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      console.log("EmailJS Error:", error);
      setStatus({ type: "error", msg: "Message not sent. Try again!" });
    }

    setLoading(false);

    setTimeout(() => {
      setStatus({ type: "", msg: "" });
    }, 10000);
  };

  return (
    <main className="contact" id="contact">
      <section>
        <div className="container">
          {/* Heading */}
          <div className="contact__heading">
            <h2 className="contact__title">Contact Me</h2>
            <p className="contact__subtitle">Have a project in mind? I'm available for freelance work and full-time opportunities.</p>
          </div>

          <div className="contact__grid">
            {/* LEFT - FORM */}
            <div className="left">
              <div className="contact__card contact__card--form ">
                <h3 className="card__title">Send a Message</h3>

                <form ref={formRef} onSubmit={sendEmail} className="contact__form">
                <div className="contact__field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                           

                <div className="contact__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="contact__field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div className="contact__field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    
                  />
                </div>

                <div className="contact__field">
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    
                  ></textarea>
                </div>

                <button className="contact__btn" type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status.msg && (
                  <p
                    className={`contact__status ${
                      status.type === "success"
                        ? "contact__status--success"
                        : "contact__status--error"
                    }`}
                  >
                    {status.msg}
                  </p>
                )}
                </form>
              </div>

              <div className="contact__card" style={{textAlign:"center"}}>
                <p>© {new Date().getFullYear()} Indana Gnaneswara Sriram. Designed & Developed by me.</p>
              </div>
            </div>

            {/* RIGHT - INFO */}
            <div className="contact__card contact__card--info right r-top">
              <h3 className="card__title">Get in Touch</h3>

              <div className="info__list">
                <div className="info__item">
                  <div className="info__icon email">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="info__text">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:gnaneswarasriramindana1@gmail.com">
                        gnaneswarasriramindana1@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info__item">
                  <div className="info__icon phone">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="info__text">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+916281969651">+91 6281969651</a>
                    </p>
                  </div>
                </div>

                <div className="info__item">
                  <div className="info__icon location">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="info__text">
                    <h4>Location</h4>
                    <p>Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
              </div>

              <h3 className="social__title">Connect on Social Media</h3>

              <div className="social__icons">
                <a href="https://wa.me/916281969651" className="social__circle whatsapp" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="https://github.com/IGSRIRAM" className="social__circle github" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.instagram.com/___s_r_i__r_a_m___/" className="social__circle instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ig-sriram" className="social__circle linkedin" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>

              {/* <div className="available__box">
                <h3 className="available__title">
                  <span className="dot"></span> Currently Available
                </h3>

                <ul>
                  <li>Landing Pages</li>
                  <li>React Web Apps</li>
                  <li>Wix/WordPress Setups</li>
                  <li>Shopify Stores</li>
                  <li>Figma Designs</li>
                </ul>
              </div> */}
            </div>

            <div className="contact__card contact__card--info right r-bottom">
             
                {/* <h3 className="available__title">
                  <span className="dot"></span> Currently Available
                  
                </h3> */}

                <h3 className="card__title">Currently Available</h3>
                <p>I am currently accepting new freelance projects for:</p>
              <div className="available__box">

                <ul>
                  <li>Landing Pages</li>
                  <li>React Web Apps</li>
                  <li>Wix/WordPress Setups</li>
                  <li>Shopify Stores</li>
                  <li style={{ margin: '0' }}>Figma Designs</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
