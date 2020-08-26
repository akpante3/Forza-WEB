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
{ project ?  (<div>
            <div className="project__header" ref={projectHeaderRef}>
                <img className="animate-appear" src={ project.headerImage } />
            </div>
            <div ref={projectBodyRef}>
                <div className="project__text">
                    <h1 className="project__text__header">{ project.textHeader }</h1>
                    <div className="project__text__body">
                        <div className="project__text__body__decription">
                            <p>{ project.task }</p> 
                        </div>
                        <div className="project__text__body__list">
                            <div className="project__text__body__decription">
                                <p>{ project.solution }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project__images">
                    <AwesomeSlider  mobileTouch={ true } >
                        { project.images.map((data, index) => <div style={{width: '100%', backgroundColor: 'white'}} key={index}><img className="project__images__image" src={data} alt="hello" /></div>) }
                    </AwesomeSlider>
                </div>
                <div className="project__text">
                    <div className="project__text__body">
                    {/* dangerouslySetInnerHTML={{ __html: project.problem }} */}
                        <div className="project__text__body__decription" >
                            <p>
                                { project.problem }
                            </p>
                        </div>
                        <div className="project__text__body__list">
                            <div className="project__text__body__decription" >
                                <p>
                                    { project.outcome }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>) : <Spinner />}

        </main>
    );
}

export default Project;