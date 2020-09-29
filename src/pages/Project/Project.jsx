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


     const item = {
        headerImage:'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Flytime-header-image2.png?alt=media&token=59968e0c-50b2-4389-9a22-6e9b0bfc962f',
        image: '',
        images: ['https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Flytime-image4.png?alt=media&token=f8bc7e2b-add3-4a3b-b138-1057a51890a7',
                'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/flytime-image3.png?alt=media&token=8a784bdf-cac6-4a27-9563-cfcb8ee405bc',
                'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/Flytime-image1.png?alt=media&token=b5f086fe-a4f3-4638-afd9-1e5f218ae0b5',
                'https://firebasestorage.googleapis.com/v0/b/forza-42793.appspot.com/o/fly%20time%20collage-min.png?alt=media&token=7cddd8ed-45ce-4e7a-987a-283cfc003e03',

        ],
        sector: 'Arts & Entertainment',
        discipline: ['Marketing Strategy', 'Communications', 'Design & Creative'],
        quote: '“The key success of this campaign was consumer targeting”',
        office: 'Lagos',
        name: 'Flytime Music Festival',
        outcome: 'Besides growing the following of the brand across all social media channels, we also improved engagement on communication by over 1000% within 60 days. This led to sold out concerts, along with other marketing efforts, on all the days of the music festival.',
        problem: 'With the logistics of concert arrangements being delayed, the usual attendees of the music festival weren’t engaging with the brand via digital channels. Also, their biggest competition, Afronation, had begun communications since April and was commanding a bigger share of voice.',
        service: 'Industrial',
        solution: 'We initiated the design and deployment of a deliberate content strategy. Using a mix of legacy content and top notch design, we developed a matrix of communication to engage users consistently with the few days left to the festival. The key success of this campaign was consumer targeting; by profiling all of the relevant audience groups, we were able to deliver appropriate communication to an active group of individuals who were easy to convert to followers/fans of the brand.<br></br>We also ensured proper management of communication across all touchpoints (Social Media, Email and Web) such that the intending consumers were not left out of loop at any point in time.',
        task: 'Grow a community of engaged users and drive concert ticket sales for Flytime Music Festival: Africa’s Largest Indoor Concert',
        textHeader: 'A Fusion of Art, Entertainment and Culture',
     }
    const fetchProject = () => {
        // db.collection('projects').add(item).then(function() {
        //     console.log("Document successfully written!");
        // });
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
                    <div dangerouslySetInnerHTML={{ __html: `<p>${ project.problem }</p>`}}></div>
                </div>
                <div className="project__description__text__section">
                    <h4>Our Solution:</h4>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${ project.solution }</p>`}}></div>
                    {/* <p>
                        { project.solution }
                    </p> */}
                </div>
                <div className="project__description__text__section">
                    <h4>Outcome:</h4>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${ project.outcome }</p>`}}></div>
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
               { project.images.map((item, index) => {
                if (index === 0) {
                    return (
                        <div>
                    <div> 
                        <img src={item} alt="desc-image" />
                    </div>
                    <div className="project__description__quote">{ project.quote }</div>
                        </div>)
                }
                return (<div> <img src={item} /></div>)
               })}
            </div>
        </div>
        
    </article>
) : <Spinner />}

        </main>
    );
}

export default Project;