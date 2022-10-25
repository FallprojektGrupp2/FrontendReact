import "./footer.css"
import { InstagramOutlined,LinkedinOutlined,TwitterOutlined,FacebookOutlined   } from '@ant-design/icons';
import{ Link} from "react-router-dom"
const FooterComponent =()=>{
    return <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>About</h6>
          <p class="text-justify"> <i>Johanna Budget App </i> is a web application that can manage private individuals' finances. The first idea for making the application had been that this application will help many people to
get own finances in order. The presence of several important features in the program has made it one of the best budgeting applications in the market. users can register on the site so easily, see all their expenses made in the past , Input of incom-expenses 
 and  keep their money to have savings goals.</p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6 class= "footerFunctins">Funktions</h6>
          <ul class="footer-links">
            <li><Link to="/Expense">List of expenses</Link></li>
            <li><Link to="">Create expense</Link></li>
            <li><a href="http://localhost:3000/">Monthly budget</a></li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6 class="footerQuickLinks">Quick Links</h6>
          <ul class="footer-linkss">
            <li><Link to="/Features">Why Johanna Budget App </Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <hr/>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
       <a href="#"> Johanna app Team</a>
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a href="#"><FacebookOutlined/></a></li>
            <li><a href="#"><TwitterOutlined/></a></li>
            <li><a href="#">  <LinkedinOutlined /></a></li>
            <li><a href="#"><InstagramOutlined twoToneColor="#eb2f96"/></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
}
export default FooterComponent