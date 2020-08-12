import React, { useEffect, useContext, useState } from 'react';
import { useParams } from "react-router-dom";
import db from '../../services/firestore';
import AwesomeSlider from 'react-awesome-slider';
import AppContext from '../../context/context';
import Spinner from '../../components/spinner/Spinner';
import './Project.scss';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import 'react-awesome-slider/dist/styles.css';

const Project= (props) => {
    const { setNavColor } = useContext(AppContext);
    const [ project, setProject ] = useState('')

    let { id } = useParams();

    useEffect(() => { 
        setNavColor('black')
        fetchProject()
    }, [])


    const fetchProject = () => {
        console.log(id)
        var docRef = db.collection('projects').doc(id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setProject(doc.data())
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    return (
        <main className="project">
{ project ?  (<div>
            <div className="project__header">
                <img className="animate-appear" src={ project.descriptionHeaderImage } />
            </div>
            <div className="project__text">
                <h1 className="project__text__header">{project.descriptionHeaderText}</h1>
                <div className="project__text__body">
                    <div className="project__text__body__decription" dangerouslySetInnerHTML={{ __html: project.description }} />
                    <div className="project__text__body__list">
                        <ul>
                            { project.descriptionTextList.map((data, index) => <li key={index}>{ data }</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project__images">
            <AwesomeSlider  mobileTouch={true} >
                { project.descriptionImageList.map((data, index) => <div key={index} data-src={data} />) }
            </AwesomeSlider>
            </div>
        </div>) : <Spinner />}

        </main>
    );
}

export default Project;