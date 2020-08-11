import React, { useContext, useEffect, useState } from 'react';
import db from '../../services/firestore';
import { ReactComponent as Cloud } from '../../icons/cloud.svg';
import { ReactComponent as CloudTop } from '../../icons/cloudTop.svg';
import { ReactComponent as DoubleBirds } from '../../icons/doubleBirds.svg';
import AppContext from '../../context/context';
import './Contact.scss';

const Contact= (props) => {
    const { setNavColor } = useContext(AppContext);
    const [ description, setDescription ] = useState('')
    const [ name, setName ] = useState('')
    const [ companyName, setCompanyName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [services, setServices] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState(' ')

    useEffect(() => { 
        setNavColor('black')
    }, [])

    const handleServiceClick = (data) => {

        let serviceslist = [...services];
        const index = services.indexOf(data)

        if (index === -1) serviceslist.push(data)
        else delete serviceslist[index]

        setServices(serviceslist)
    }
   const submitForm = async (event) => {
        event.preventDefault();
       let data = {
            description,
            name,
            companyName,
            email,
            services,
            phoneNumber
       }
        const quoteRef = db.collection('quote').doc();

        quoteRef.set({
            ...data
        }).then(function() {
            alert("Quote was sent successfully!");
        });
   }

  return (
    <main className="contact">
        <div className="cloud-top">
            <CloudTop />
        </div>
        <div className="cloud">
            <Cloud />
        </div>
        <div className="double-birds">
            <DoubleBirds />
        </div>
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
            <form onSubmit={(e) => submitForm(e)}>
                <label>
                    <div className="contact__form__header">How Can We Help?</div>
                    <textarea onChange={e => setDescription(e.target.value)}  placeholder="Please write a brief description of  what your organisation does , or the product you want to sell.  When does thia project need to start, when does this project need to be completed." required></textarea>
                </label>
                <fieldset>
                    <legend className="contact__form__header">What Services do you need?</legend>
                    <label className="checkbox">
                        <input onClick={() => handleServiceClick('Brand Identity Development')} type="checkbox" />
                        <span>Check Me</span>
                    </label>
                    <br />
                    <label className="checkbox">
                        <input onClick={() => handleServiceClick('Design & Creative')} type="checkbox" />
                        <span>Design & Creative</span>
                    </label>
                    <br />
                    <label className="checkbox">
                        <input onClick={() => handleServiceClick('Communications')} type="checkbox" />
                        <span>Communications</span>
                    </label>
                    <br />
                    <label className="checkbox">
                        <input onClick={() => handleServiceClick('Market Entry & Consumer Behaviour')} type="checkbox" />
                        <span>Market Entry & Consumer Behaviour</span>
                    </label>
                </fieldset>
                <div className="contact__user-details">
                    <input onChange={e => setName(e.target.value)}  id="itext-13" placeholder="Name and Surname" type="text" required/>
                    <input onChange={e => setCompanyName(e.target.value)}  id="itext-13" placeholder="Company Name" type="text" required/>
                    <input onChange={e => setEmail(e.target.value)}  id="itext-13" placeholder="Email" type="email" required/>
                    <input onChange={e => setPhoneNumber(e.target.value)}  id="itext-13" placeholder="Phone Number" type="tel" required/>
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