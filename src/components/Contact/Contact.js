import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact">
            <h1 className="contact__heading">Contact</h1>
            <div className="contact__line"></div>
            <p className="contact__desc">Have a question? Leave me a message. <br/> I'll get back to you as soon as possible!</p>

            <form className="contact__form" action="submit">
                <div className="contact__inputBox">
                    <input placeholder="Name" type="text" className="contact__input" name="name"/>
                    <input placeholder="Enter email" type="text" className="contact__input" name="email"/>
                    <textarea placeholder="Your Message" className="contact__input" name="msg" id="msg" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="contact__btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
