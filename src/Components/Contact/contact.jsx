import React from 'react';
import emailjs  from 'emailjs-com';
import { useState } from 'react';
import './contact.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

const ContactForm = () => {

  function sendemail(e){
    e.preventDefault();
    emailjs.sendForm("service_x99udhd","template_0l41cmy",e.target,"z9tEO6YDiLq_fhA2g").then(res=> alert("Email sent successfully!")).catch(err=>alert("ERROR! Please try again"));
  }

  return (

    <div>
        <div className='container' id="CONTACT">
        <div className='container1'>
              <div className='title'>
                <h1 style={{color:"white", fontSize:"50px"}}>CONTACT ME</h1>
              </div>
              <form onSubmit={sendemail}>
                <div className="total">
                <div className="socialsmain">
                <h1 style={{marginBottom:"50px"}}>Getting In Touch Is Easy!</h1>
                <h5 style={{marginTop:"-20px", marginBottom:"40px"}}>
                  I am open to collaborate for any project.Thank you for viewing my portfolio. I hope you enjoyed looking at my work. Feel free to drop of any feedback and don't forget to connect with me.
                </h5>
           
                <div className="socials">
                  <p style={{marginLeft:"0px"}}className="icons"><EmailIcon/></p>
                  <p className="icons"><TwitterIcon/></p>
                  <p className="icons"><FacebookIcon/></p>
                  <p className="icons"><LinkedInIcon/></p>
               </div>
               </div>
                <div className="all">
                <div className="box">
                    <div className="form">
                      <input className="input"
                        type='text'
                        name='name'
                        placeholder='Your Name*'
                        required 
                      />
                       </div>
                    <div className="form">
                      <input className="input"
                        name='email'
                        id='email'
                        placeholder='Your Email*'
                        required
                      />
                  </div>
                  <div className="form">
                      <input className="input"
                        name='number'
                        id='number'
                        placeholder='Your Phone Number*'
                        required
                      />
                  </div>
                  </div>
                <div className="block">
                  <textarea className="message"
                    name='message'
                    id='message'
                    placeholder ='Your Message*'
                    required
                  ></textarea>
                </div>
                </div>
                </div>
                <button type='submit'className="submit">SUBMIT
                </button>
              </form>
            </div>
            
          </div>
          </div>
  )
}

export default ContactForm;
