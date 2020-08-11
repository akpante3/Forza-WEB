import React, { useContext, useState, useEffect } from 'react';
import { useOnScreen } from '../../hooks/index';
import { useParams } from "react-router-dom";
import AppContext from '../../context/context';
import db from '../../services/firestore';
import Footer from '../../components/app-footer/Footer'
import './SingleProfile.scss';


const WorkFlow = (props) => {
    const [ref, visible] = useOnScreen({ threshold: 0.7 })
    const { setNavColor } = useContext(AppContext);
    const [ userProfile, setUserProfile ] = useState('')
    const [footerData, setFooterData] = useState('')
    let { id } = useParams();
    let footer;

    const Data = [
        {
            name: 'Seye Bandele',
            link: '/team/seye-bandele'
        },
        {
            name: 'Joshua Biyere',
            link: '/team/joshua-biyere'
        },
        {
            name: 'Ope Adetomiwa',
            link: '/team/ope-adetomiwa'
        },
        {
            name: 'Chikodi Ukaiwe',
            link: '/team/chikodi-ukaiwe'
        },
        
    ]

    const fetchPartner = () => {
        var docRef = db.collection('partners').doc(id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                setFooter(doc.data().name)
                setUserProfile(doc.data())
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

   const setFooter = (doc) => {
        if (doc === 'Joshua Biyere') {
            // Chikodi Ukaiwe Ope Adetomiwa
            setFooterData({ next: Data[3], previous: Data[2] })
        } else if (doc === 'Chikodi Ukaiwe') {
            // Seye Bandele 'Joshua Biyere'
            setFooterData({ next: Data[0], previous: Data[1] })
        } else if (doc === 'Seye Bandele') {
            // Ope Adetomiwa Chikodi Ukaiwe
            setFooterData({ next: Data[2], previous: Data[3] })
        } else if (doc === 'Ope Adetomiwa') {
            // Seye Bandele  Joshua Biyere
            setFooterData({ next: Data[0], previous: Data[1] })
        } else {
            setFooterData({ next: Data[3], previous: Data[2] })
        } 
   }

   useEffect(() => {
        fetchPartner()
        setNavColor('black')
    }, [id]);

    useEffect(() => {
        setFooter(userProfile.name)
    }, [userProfile]);

    return (
        <main>
            { userProfile ? (<div>
                <div className="single-profile">
                    <div className="single-profile__header">
                        <div className="single-profile__header__text">
                            <div className="single-profile__header__text__wrapper">
                                <p className="single-profile__header__text__name">{userProfile.name}</p>
                                <p className="single-profile__header__text__quote">
                                { userProfile.quote }
                                </p>
                            </div>
                        </div>
                        <div className="single-profile__header__image">
                            <img src={userProfile.image} />
                        </div>
                    </div>
                    <div className="single-profile__body">
                        <div className="single-profile__body__description" dangerouslySetInnerHTML={{ __html: userProfile.description }} />
                        <div className="single-profile__body__quote">
                            <p className="single-profile__body__quote__header">
                            { userProfile.descriptionQuote }
                            </p>
                            <p className="single-profile__body__quote__bottom">
                            We work with goal oriented brands and companies
                            </p>
                        </div>
                    </div>
                </div>
                <Footer 
                    bg='white'
                    next={footerData.next}
                    previous={footerData.previous} 
                />
            </div>) : 'loading...'}
        </main>
    );
}

export default WorkFlow;
