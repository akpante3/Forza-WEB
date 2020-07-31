import React from 'react';
import {
  Link
} from "react-router-dom";
import './Contact.scss';

const Contact= (props) => {

  return (
    <main className="contact">
        <div>
            <header>
                <div className="contact__header">
                    <h1>Ask for</h1>
                    <h1>a quote</h1>
                </div>
                <div className="contact__header">
                    <p>SIMPLY FILL THE FORM BELOW AND</p>
                    <p>WE WILL GET BACK TO YOU SHORTLY</p>
                </div>
            </header>
            <form>
                <label>
                    <div className="contact__form__header">How Can We Help?</div>
                    <textarea  placeholder="Please write a brief description of  what your organisation does , or the product you want to sell.  When does thia project need to start, when does this project need to be completed."></textarea>
                </label>
                <fieldset>
                    <legend className="contact__form__header">What Services do you need?</legend>
                    <label>
                        <input type="radio" name="test" value="true" disabled="" />
                        Brand Identity Development<span></span>
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="test" value="true" disabled="" />
                        Design & Creative<span></span>
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="test" value="true" disabled="" />
                        Communications<span></span>
                    </label>
                    <br />
                    <label>
                        <input type="radio" name="test" value="true" disabled="" />
                        Market Entry & Consumer Behaviour<span></span>
                    </label>
                </fieldset>
                <div className="contact__user-details">
                    <input id="itext-13" placeholder="Name and Surname" type="text" />
                    <input id="itext-13" placeholder="Company Name" type="text" />
                    <input id="itext-13" placeholder="Email" type="text" />
                    <input id="itext-13" placeholder="Phone Number" type="text" />
                </div>
                <button type="submit">
                    SEND
                </button>
                <p className="contact__number">
                  Call us on +234 709 22345 462
                </p>
            </form>
        </div>
    </main>
  );
}

export default Contact;