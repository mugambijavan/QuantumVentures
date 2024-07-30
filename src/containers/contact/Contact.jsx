import React from 'react';
import './contact.css';

function Contact() {
  const [result, setResult] = React.useState("");

  console.log("Access Key:", process.env.REACT_APP_ACCESS_KEY); // Debugging line

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" id="" placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" id="" placeholder='Enter your mobile number' required/>
          <label>Message</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type="submit" className='btn dark-btn'>Submit</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
