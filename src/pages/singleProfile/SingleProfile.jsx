import React from 'react';
import { useOnScreen } from '../../hooks/index';
import Footer from '../../components/footer/footer'
import './SingleProfile.scss';


const WorkFlow = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.7 })

    const text = `<p>We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p><p>We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p><p>We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p><p>We’re a marketing agency. We work with goal oriented brands and companies to create digital marketing solutions that people love. Because what works for people, works for business.</p>`

    return (
        <main>
            <div className="single-profile">
                <div className="single-profile__header">
                    <div className="single-profile__header__text">
                        <div className="single-profile__header__text__wrapper">
                            <p className="single-profile__header__text__name">CHIKODI UKAIWE</p>
                            <p className="single-profile__header__text__quote">
                            “A business enthusiast building solutions in communications etc. Just a place holder.”
                            </p>
                        </div>
                    </div>
                    <div className="single-profile__header__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Bitmap.png?alt=media&token=f907906a-4647-4870-9bca-9d7db64d5854" />
                    </div>
                </div>
                <div className="single-profile__body">
                    <div className="single-profile__body__description" dangerouslySetInnerHTML={{ __html: text }} />
                    <div className="single-profile__body__quote">
                        <p className="single-profile__body__quote__header">
                            It’s all about processes and assuring results
                        </p>
                        <p className="single-profile__body__quote__bottom">
                        We work with goal oriented brands and companies
                        </p>
                    </div>
                </div>
            </div>
            <Footer bg='white' next={{ link: "/services/our-services", name: "Our Services" }} previous={{ name: "Our Works", link: "/our-works" }}  />
        </main>
    );
}

export default WorkFlow;
