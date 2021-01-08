import React, { useState } from 'react';
import db from '../../firebase';
import './Contact.scss';
import firebase from 'firebase'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        db
            .collection('msgs')
            .add({
                name: name,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                email: email,
                msg: msg,
            })
        
        setName('');
        setEmail('');
        setMsg('');
    };

    return (
        <div className="contact">
            <h1 className="contact__heading">CONTACT</h1>
            <div className="contact__line"></div>
            <p className="contact__desc">Have a question? Please leave a message. <br/> I'll get back to you as soon as possible!</p>

            <form className="contact__form">
                <div className="contact__inputBox">
                    <input placeholder="Name" type="text" className="contact__input" name="name" value={name} onChange={e => setName(e.target.value)} />

                    <input placeholder="Enter email" type="text" className="contact__input" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    
                    <textarea placeholder="Your Message" className="contact__input" name="msg" id="msg" cols="30" rows="10" value={msg} onChange={e => setMsg(e.target.value)} ></textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="contact__btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
