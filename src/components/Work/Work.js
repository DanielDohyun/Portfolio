import './Work.scss';
import React, { useState, useEffect } from 'react';
import db from '../../firebase';

function Work() {
    const [works, setWorks] = useState([]);
    const [filter, setFilter] = useState(null);

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
            <h1>My work</h1>
            <h3 className="work__subHeading">Projects</h3>
            <div className="work__categories">
                <button className="work__btn" onClick={showAll}>All</button>
                <button className="work__btn" onClick={showFull}>Full Stack</button>
                <button className="work__btn" onClick={showBack}>Back-end</button>
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
