import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../../style";
import Button from "./Button";

const CTA = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure these match your EmailJS configuration
    const serviceID = "service_eqwwduu";
    const templateID = "template_ykfj3j8";
    const publicKey = "RsJ7KTR_fyeePU8kv";
  
    const templateParams = {
      user_name: formData.name,   // Ensure variable names match your EmailJS template
      user_company: formData.company,
      user_phone: formData.phone,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message,
    };
  
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
  
        // Reset form
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Try again later.");
      });
  };
  
  return (
    <section
    id="contact" 
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} rounded-[20px] box-shadow flex-col sm:flex-row`}
      style={{ display: "flex", width: "100%", }}
    >
      {/* Left Section: Heading */}
      <div
        style={{
          flex: 1,
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // padding: "20px",
          textAlign: "left",
        }}
        className="lg:px-[3rem] px-[0px]"
      >
        <div>
          <p className="text-1xl text-[#c2115c] font-semibold text-center sm:text-left" style={{ fontFamily: "Orbitron, sans-serif" }}>
            CONTACT
          </p>
          <h1
            className="mt-4 sm:mt-5 font-semibold text-nowrap text-white text-[28px] sm:text-[50px] leading-tight sm:leading-[50.8px]"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Ask A Question
          </h1>
        </div>
      </div>

      {/* Right Section: Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* First Row: Name and Company */}
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="name" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  color: "white",
                  width: "100%",
                  boxSizing: "border-box",
                  fontFamily: "Play, sans-serif",
                  backgroundColor: "#23236a",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="company" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
                style={{
                  padding: "10px",
                  fontFamily: "Play, sans-serif",
                  backgroundColor: "#23236a",
                  color: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Second Row: Phone Number and Email */}
          <div style={{ display: "flex", gap: "1rem", flexDirection: "row", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="phone" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9()#&amp;+*-=.]+" 
                title="Only numbers and phone characters (#, -, *, etc) are accepted."
                style={{
                  padding: "10px",
                  fontFamily: "Play, sans-serif",
                  backgroundColor: "#23236a",
                  color: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "200px" }}>
              <label htmlFor="email" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  fontFamily: "Play, sans-serif",
                  backgroundColor: "#23236a",
                  color: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Subject and Message */}
          <div>
            <label htmlFor="subject" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                fontFamily: "Play, sans-serif",
                backgroundColor: "#23236a",
                color: "white",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label htmlFor="message" style={{ color: "white", marginBottom: "0.5rem", fontFamily: "Play, sans-serif", fontWeight: 'bold' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              style={{
                padding: "10px",
                fontFamily: "Play, sans-serif",
                backgroundColor: "#23236a",
                color: "white",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              width: '100%',
              fontWeight: "bold",
              fontFamily: "Play, sans-serif"
            }}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
