import React, { useRef, useState } from 'react';
import endLine from '../assets/lineimage.png';
import '../style/Contact.css';
import { toast } from 'react-hot-toast';
import * as emailjs from 'emailjs-com';  // Import everything from emailjs-com

const Contact = () => {
  const form = useRef(null);

  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phoneNumber,setphoneNumber]=useState('');
  const[message,setmessage]=useState('');

  const allDatacontact={
    from_name:name,
    from_email:email,
    from_number:phoneNumber,
    from_message:message,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Correct method for sending form using emailjs
    emailjs
      .send('service_0tr2bcr', 'template_k0iivuv', allDatacontact, 'tgtIvbDT5tYKREDiF')
      .then((response) => {
        toast.success('Submit Successful');
      })
      .catch((error) => {
        toast.error('Try Again');
      });
  };

  return (
    <section>
      <div className="fullcontact" id="Contact">
        <div className="contactbox">
          <h3>CONTACT</h3>
        </div>
        <div className="introcontact">
          <p>
            Looking to create something awesome? Let’s make it happen together!
            Reach out and let's get started.
          </p>
        </div>
        <div className="line-contact">
          <img src={endLine} alt="_______" />
        </div>
        <div className="formcontact">
          <form onSubmit={sendEmail} className="formitem">
            <input
              name="name"
              type="text"
              placeholder="ENTER YOUR NAME *"
              required
              className="inputBox"

              value={name}
              onChange={(e)=>{setname(e.target.value)}}
            />
            <input
              name="email"
              type="text"
              placeholder="ENTER YOUR EMAIL *"
              required
              className="inputBox"

              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
            />
            <input
              name="phone-number"
              type="text"
              placeholder="PHONE NUMBER"
              className="inputBox"

              value={phoneNumber}
              onChange={(e)=>{setphoneNumber(e.target.value)}}
            />
            <textarea
              name="message"
              placeholder="YOUR MESSAGE"
              required
              className="inputBox message"

              value={message}
              onChange={(e)=>{setmessage(e.target.value)}}
            ></textarea>
            <button type="submit" className="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
