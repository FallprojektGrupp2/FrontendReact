import React from "react";
import Emma from '../../assets/Emma.JPG'
import Leila from '../../assets/Leila.JPG'
import Medin from '../../assets/Medin.JPG'
import Penny from '../../assets/Penny.JPG'
import Harald from '../../assets/Harald.JPG'
import Mathias from '../../assets/Mathias.JPG'
import Yacoub from '../../assets/Yacoub.JPG'
import "./contactUs.css"

const Input=({label})=>{
  return <div className="text-input">
    <label>{label}</label>
    <input/>

  </div>
}

const Textarea=({label})=>{
  return <div className="text-input">
    <label>{label}</label>
    <textarea/>

  </div>
}
  
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2 className="title">Contact Us</h2>
      <div className="content">
        <form>
          <div className="d-flex" style={{gap:20}}>
            <div className="w-50">
              <Input label="FullName"/>
            </div>
            <div className="w-50">
              <Input placeholder="hanna@gmail.com" label="E-mail" />
            </div>
              
          </div>
          <Input label={'Subject'}/>
          <Textarea label={'Message'}/>
          <button >Submit</button>
        
        </form>
      <div className="info">
        <h1 className="question">Do you have questions? Our talented employees are ready to answer your questions every weekday</h1>
        <div className="persons">
          <div className="persons-info">
            <img src={Emma} alt=""/>
            <label>Emma</label>
          </div>
          
          <div className="persons-info">
            <img src={Leila} alt=""/>
            <label>Leila</label>
            <a href="tel:">0974568909</a>
          </div>

          <div className="persons-info">
            <img src={Medin} alt=""/>
            <label>Medin</label>
          </div>

          <div className="persons-info">
            <img src={Penny} alt=""/>
            <label>Penny</label>
          </div>

          <div className="persons-info">
            <img src={Harald} alt=""/>
            <label>Harald</label>
          </div>

          <div className="persons-info">
            <img src={Yacoub} alt=""/>
            <label>Yacoub</label>
          </div>

          <div className="persons-info">
            <img src={Mathias} alt=""/>
            <label>Mathias</label>
          </div>
          </div>
      </div>
      </div>
    
  
    </div>
  );
};


export default ContactUs;