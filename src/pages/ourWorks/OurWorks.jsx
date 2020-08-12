import React , { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/context';
import { useHistory } from "react-router-dom";
import db from '../../services/firestore';
import Footer from '../../components/app-footer/Footer';
import './OurWorks.scss';

const Contact= (props) => {
    const { setNavColor } = useContext(AppContext);
    const [ work, setWork ] = useState('')
    let history = useHistory()

    setNavColor ('black')


    useEffect(() => {
      fetchWorks()
    }, [])

    const fetchWorks = async () => {
        const snapshot = await db.collection('projects').get();
        let ourWork = []
        snapshot.forEach((doc) => {
            ourWork.push({id: doc.id, data: doc.data()})
        });
        setWork(ourWork)
    }

    const Work = () => {
        return (
            work.map((data, index) => (
                <div className="our-works__item" key={index}>
                    <div className="our-works__item__image">
                    <img  onClick={() => history.push(`/our-work/projects/${data.id}`)} src={data.data.image} alt="" />
                    </div>
                    <div className="our-works__item__description">
                        <h2>{ data.data.name }</h2>
                        <span>{ data.data.service }</span>
                    </div>
                </div>
            )) 
        )
    }


  return (
    <main className="our-works">
        <div className="our-works__wrapper">
            { work.length ?  (<div>
                <header>Our work</header>
                <div className="our-works__projects">
                    { Work() }
                </div>
            </div>) : 'loading...'}
        </div>
        <Footer bg='white' previous={{ link: "/services/our-services", name: "Our Services" }} next={{ name: "Our Team", link: "/team" }}  />
    </main>
  );
}

export default Contact;