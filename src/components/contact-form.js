import React from 'react';

const ContactForm = () => (
    <>
    <form>
        <div>
            <h4>Contact Me:</h4>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <button>Submit</button>
        </div>
    </form>
    <div>
        <h5><a href="mailTo:baltescartography@gmail.com">Email me</a></h5>
    </div>
    </>
)
export default ContactForm