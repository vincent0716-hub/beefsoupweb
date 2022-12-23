import React, { Component, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import validator from "validator";

const ReservationNew = () => {
    const form = useRef();
    const [name, setName] = useState("")
    ////////////////////////////// send email from emailJS 
    const sendEmail = (e) => {
        console.log("e:"+e);
        e.preventDefault();

        emailjs.sendForm('service_8coz4wl', 'template_u126bwr', form.current, 'tXlhfoT3MMOaksgLF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setText("");
    };
    /////////////////////////////////////
    function nameChange(e) {
        setName(e.target.value)
    }

    const [lastname, setLastName] = useState("")

    function lastnameChange(e) {
        setLastName(e.target.value)
    }

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const validateEmail = (e) => {
        var email = e.target.value;
        if (validator.isEmail(email)) {
            setMessage("");
            console.log("valid email")
            setEmail(e.target.value)
        } else {
            setMessage("error email");
            console.log("wrong email")
            setEmail("")
        }

    }

    const [phone, setPhone] = useState("")

    function phoneChange(e) {
        setPhone(e.target.value)
    }

    const [text, setText] = useState("")

    function textChange(e) {
        setText(e.target.value)
    }

    function printINPUT() {
        console.log(name);
        console.log(lastname);
        console.log(email);
        console.log(phone);
        console.log(text);
        
    }

    return (

        <div className='ReserveTest'>
            <form ref={form} onSubmit={sendEmail}>
            <div className='InputDivFather'>
            
                <div className='fistcolumninputFather1'>
                    <div >
                        <h1 className='wordsCOLORGREEN'> CONTACT FORM</h1>
                    </div>
                </div>
                
                <div className='fistcolumninputFather2'>
                    <div>
                        <h5 className='wordsCOLORGREEN'> Fisrt Name*</h5>

                        <input placeholder='Your name..' name='user_FN'value={name} onChange={nameChange} required></input>
                    </div>
                    <div>
                        <h5 className='wordsCOLORGREEN'> Last Name*</h5>
                        <input placeholder='Your name..' name='user_LN'value={lastname} onChange={lastnameChange} required></input>
                    </div>
                </div>
                <div className='fistcolumninputFather3'>
                    <div>
                        <div className='horizontalH5'>
                            <h5 className='wordsCOLORGREEN'>Email** </h5>
                            <h5 style={{
                                height: "5px",
                                color: "red"
                            }}> {message}</h5>
                        </div>
                        <input placeholder='E.g, mail@example.com' name='user_EM'onChange={validateEmail}required></input>

                    </div>


                    <div>
                        <h5 className='wordsCOLORGREEN'>Phone*</h5>
                        <input placeholder='E.g, 03 9999 9999' name='user_PN'value={phone} onChange={phoneChange}required></input>
                    </div>
                </div>
                <div className='fistcolumninputFather4'>

                    <div className='textareaParentsCenter'>

                        <textarea placeholder='Type your message here...' name='user_MSG'value={text} onChange={textChange} required></textarea>
                    </div>
                </div>
                <div className='fistcolumninputFather5'>
                    <div>
                        <input type="submit" className='submitHOVER' value="Submit" onClick={printINPUT}  ></input>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
export default ReservationNew

