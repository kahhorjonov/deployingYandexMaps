import React from "react";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";

function contact() {
  return (
    <div class="bodyContact">
      <div class="contactCont">
        <div className="contact">
          <div className="leftSide">
            <a href="tel:+99871 271 77 00">
              <PhoneIcon className="icons" />{" "}
              <div class="account">+998 (90) 123-45-67</div>
            </a>
            <a href="tg://setting">
              <TelegramIcon className="icons" />{" "}
              <span className="account">Telegram account</span>
            </a>
            <a href="">
              <MailIcon className="icons" />{" "}
              <div class="account">Mail account</div>
            </a>
            <a href="https://facebook.com">
              <FacebookIcon className="icons" />
              <div class="account">Facebook account</div>
            </a>
            <a href="https://twitter.com">
              <TwitterIcon className="icons" />{" "}
              <div class="account">Twitter account</div>
            </a>
            <a href="https://instagram.com">
              <InstagramIcon className="icons" />{" "}
              <div class="account">Instagram account</div>
            </a>
          </div>
          <div className="rightSide">
            <h1>Contact Us</h1>
            <form id="contact-form" method="POST">
              <label htmlFor="name"> Full Name</label>
              <input name="name" placeholder="Enter full name..." type="text" />
              <label htmlFor="email"> Email</label>
              <input name="email" placeholder="Enter email..." type="email" />
              {/*  */}
              <select name="region" id="" className="regionSelect">
                <option value="" disabled selected>
                  Viloyat
                </option>
                <option value="Tashkent">Tashkent</option>
                <option value="Samarkand">Samarkand</option>
                <option value="Bukhara">Bukhara</option>
              </select>
              <select name="district" id="" className="district">
                <option value="" disabled selected>
                  Tuman
                </option>
                <option value="Tashkent">afafafas</option>
                <option value="Samarkand">dsfsd</option>
                <option value="Bukhara">dsfsfsdf</option>
              </select>
              <label htmlFor="message"> Ko'cha</label>
              <input type="text" name="" placeholder="Ko'cha nomi" />
              <label htmlFor="message"> Message</label>
              <textarea
                rows="6"
                placeholder="Enter message..."
                name="message"
                required
              ></textarea>
              <label for="file">Rasm yuklang</label>
              <input
                type="file"
                name="image"
                placeholder="Rasimni yuklang"
                accept="image/*"
                className="form-control__file"
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;
