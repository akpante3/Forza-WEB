import React, { useEffect, useContext, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useOnScreen } from '../../hooks/index';
import db from '../../services/firestore';
import AwesomeSlider from 'react-awesome-slider';
import AppContext from '../../context/context';
import Spinner from '../../components/spinner/Spinner';
import './Project.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop) 

const Project= (props) => {
    const { setNavColor } = useContext(AppContext);
    const [ project, setProject ] = useState('')
    const [ projectHeaderRef, projectHeaderRefVisible ] = useOnScreen({ threshold: 0.01 })
    const [ projectBodyRef, projectBodyRefVisible ] = useOnScreen({ threshold: 0.01 })
    const [ section, setSection ] = useState('header')
    const executeScroll = (ref) => scrollToRef(ref)

    let { id } = useParams();
    let history = useHistory()

    useEffect(() => { 
        setNavColor('black')
        fetchProject()
    }, [])

    useEffect(() => {
        if (projectHeaderRefVisible && section !== 'header') {
          executeScroll(projectHeaderRef)
          setSection('header')
          setNavColor('white')
        } else if (projectBodyRefVisible && section !== 'body') {
         executeScroll(projectBodyRef)
         setSection('body')
         setNavColor('black')
        }
     }, [ projectHeaderRefVisible, projectBodyRefVisible ])

    const fetchProject = () => {
        var docRef = db.collection('projects').doc(id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                setProject(doc.data())
            } else {
                history.push('/404')
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    return (
        <main className="project">
{ project ?  (
    <article>
        <div className="project__header-text" >
            <div className="project__header-text__name">
                <h1>{ project.name }</h1>
                <span>{ project.textHeader }</span>
            </div>
            <div className="project__header-text__task">
                <p>Task:</p>
                <span>{ project.task }</span>
            </div>
        </div>
        <div className="project__header-image">
            <img src={ project.headerImage } alt="" />
        </div>
        <div className="project__description">
            <div className="project__description__text">
                <div className="project__description__text__section">
                    <h4>Problem:</h4>
                    <p>
                        { project.problem }
                    </p>
                </div>
                <div className="project__description__text__section">
                    <h4>Our Solution:</h4>
                    <p>
                        { project.solution }
                    </p>
                </div>
                <div className="project__description__text__section">
                    <h4>Outcome:</h4>
                    <p>
                        { project.outcome }
                    </p>
                </div>
                <div className="project__overview">
                    <div className="project__overview__header">
                        Project Overview
                    </div>
                    <div className="project__overview__section">
                        <div>
                            <div className="project__overview__section__sub-header">Client</div>
                            <span className="project__overview__section__content">{ project.name }</span>
                        </div>
                        <div>
                            <div className="project__overview__section__sub-header">Office</div>
                            <span className="project__overview__section__content">{ project.office }</span>
                        </div>
                    </div>
                    <div className="project__overview__section">
                        <div>
                            <div className="project__overview__section__sub-header">Sector</div>
                            <span className="project__overview__section__content">{ project.sector }</span>
                        </div>
                        <div>
                            <div className="project__overview__section__sub-header">Team & Partners </div>
                            <span className="project__overview__section__content">FORZA</span>
                        </div>
                    </div>
                    <div>
                        <div className="project__overview__section__sub-header">Discipline</div>
                        {project.discipline.map(item => <div className="project__overview__section__content">{ item }</div>)}
                    </div>
                </div>
            </div>
            <div className="project__description__images">
               { project.images.map((item) => <div> <img src={item} /></div>)}
            </div>
        </div>
        
    </article>
) : <Spinner />}

        </main>
    );
}

export default Project;