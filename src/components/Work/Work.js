import './Work.scss';
import React, { useState, useEffect } from 'react';
import db from '../../firebase';

function Work() {
    const [works, setWorks] = useState([]);
    const [filter, setFilter] = useState(null);
    const [active, setActive] = useState(1);

    const handleActive = id => {
        setActive(id);
    }

    var all = works.filter(e => e.data.type === "full" || e.data.type === "back");
    var full = works.filter(e => e.data.type === 'full');
    var back = works.filter(e => e.data.type === 'back');

    const showAll = () => {
        setFilter(all);
    };
    
    const showFull = () => {
        setFilter(full);
    };

    const showBack = () => {
        setFilter(back);
    };

    useEffect(() => {
        db
            .collection('works')
            .orderBy('time', 'desc')
            .onSnapshot(snapshot => {
                setWorks(snapshot.docs.map(doc => ({
                id: doc.id, data:doc.data()
            })))
        })
    }, [])

    return (
        <div id="work" className="work">
            <h1 className="work__heading">MY WORK</h1>
            <h3 className="work__subHeading">PROJECTS</h3>
            <div className="work__categories">
                <button
                    id="1" className={`work__btn ${active == 1 ? 'active-btn' : ''}`} onClick={(id) => {
                        showAll();
                        handleActive(1);
                    }}
                >ALL</button>
                <button
                    id="2" className={`work__btn ${active == 2 ? 'active-btn' : ''}`} onClick={(id) => {
                        showFull();
                        handleActive(2);
                    }}
                >FULL STACK</button>
                <button
                    id="3" className={`work__btn ${active == 3 ? 'active-btn' : ''}`} onClick={(id) => {
                        showBack();
                        handleActive(3);
                    }}
                >BACK-END</button>
            </div>

            <div className="work__projects">
            
                {
                    filter? filter.map(work => (
                        <a
                            target="blank"
                            href={work.data.src}
                            className="work__project"
                        >
                            <img
                                src={work.data.img}
                                alt={work.data.title}
                                className="work__img"
                            />
                            <div className="work__desc">
                                <h3>{work.data.title}</h3>
                                <span>{ work.data.desc}</span>
                            </div>
                        </a>
                    )) : works.map(work => (
                            <a
                                target="blank"
                                href={work.data.src}
                                className="work__project"
                            >
                                <img
                                    src={work.data.img}
                                    alt={work.data.title}
                                    className="work__img"
                                />
                                <div className="work__desc">
                                    <h3>{work.data.title}</h3>
                                    <span>{ work.data.desc}</span>
                                </div>
                            </a>
                        )
                    )
                }
                
            </div>
        </div>
    )
}

export default Work;
