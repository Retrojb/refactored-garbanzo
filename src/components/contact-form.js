import React from 'react';

const ContactForm = () => (
    <>
    <form>
            <h4>Want to connect? </h4>
            <label>
            Name: 
                <input type="text" name="name"></input>
            </label>
            <label>
            Email: 
                <input type="text" name="email" />
            </label>

            <button type="submit">Connect</button>
        
    </form>
    <div>
        <h5><a href="mailTo:baltescartography@gmail.com">Email me</a></h5>
    </div>
    </>
)
export default ContactForm