import React from "react";
import "./privacyPolicy.css"; 
const  PrivacyPolicy= () => {
  return (
    <div className="privacyPolicy-page">
    <h1>Privacy policy</h1>
    <p>Effective date: September 12, 2022</p>
    <br></br>
    <br></br>
    <h2>At Johanna Budget App, we take your privacy seriously. Please read this Privacy Policy to learn what personal data we use. </h2>
    <p>By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.</p>
    <br></br>
    <br></br>
    <h3>What this Privacy Policy Covers</h3>
    <p>This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. "Personal Data" means any information that identifies or relates to a particular individual and also includes information referred to as "personally identifiable information" or "personal information" under applicable data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we don't own or control or people we don't manage.</p>
    <br></br>
    <h3>Personal Data</h3>
    <h9>Categories of Personal Data We Collect
This chart details the categories of Personal Data that we collect and have collected over the past 12 months:</h9>
<br></br>
<br></br>
<br></br>
    <table className="PrivacyTable">
    <thead>
    <tr>
    <th>Category of Personal Data</th>
    <th>Examples of Personal Data We Collect</th>
   </tr>
   </thead>
    <tr>
    </tr>
    <tbody>
    <tr>
    <td>Profile or Contact Data</td>
    <td>First and last name, Email, Unique identifiers such as passwords</td>
    </tr>
    <tr>
    <td>Payment Data</td>
    <td>
    Payment card type, Payment card number, Bank account information, Billing address, phone number, and email
    </td>
    </tr>
    
    <tr>
    <td>Device/IP Data</td>
    <td>IP address, Type of device/operating system/browser used to access the Services</td>
    </tr>
    
    <tr>
    <td>Web Analytics</td>
    <td>Browsing or search history; Web page interactions; Referring webpage/source through which you accessed the Services; Statistics associated with the interaction between device or browser and the Services</td>
    </tr>
    
    </tbody>
    </table>
    </div>
    
  );
};
  
export default PrivacyPolicy;