import React, { useState } from "react";
import './ContactUs.css';
import Swal from 'sweetalert2';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSubmit = new FormData(event.target);
    formDataToSubmit.append("access_key", "YOUR_ACCESS_KEY_HERE");
    const object = Object.fromEntries(formDataToSubmit);
    const json = JSON.stringify(object);
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "نجحت",
        text: "تم ارسال الرسالة بنجاح!",
        icon: "success",
      });
     
      localStorage.setItem("name", formData.name);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("message", formData.message);
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong, please try again.",
        icon: "error",
      });
    }
  };

  // إعادة تعيين النموذج
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>اتصل بنا</h2>
        <div className="input-box">
          <label>اسمك الكامل</label>
          <input
            type="text"
            className="field"
            placeholder="أدخل اسمك"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>ايميلك الخاص</label>
          <input
            type="email"
            className="field"
            placeholder="أدخل بريدك الإلكتروني"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <label>الرسالة</label>
          <textarea
            className="field mess"
            placeholder="أدخل رسالتك"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">ارسال رسالة</button>
        <button type="button" id="reset" onClick={handleReset}>
          إعادة تعيين
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
