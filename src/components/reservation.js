import React, { Component } from 'react'

export default class reservation extends Component {
    render() {
        return (
            <div className='ReserveTest'>
                <div className='InputDivFather'>
                    <div className='fistcolumninputFather1'>
                        <div >
                            <h1 className='wordsCOLORGREEN'> RESERVATION FORM</h1>
                        </div>
                    </div>
                    <div className='fistcolumninputFather2'>
                        <div>
                            <h5 className='wordsCOLORGREEN'> Fisrt Name*</h5>
                            <input placeholder='Your name..'></input>
                        </div>
                        <div>
                            <h5 className='wordsCOLORGREEN'> Last Name*</h5>
                            <input placeholder='Your name..'></input>
                        </div>
                    </div>
                    <div className='fistcolumninputFather3'>
                        <div>
                            <h5 className='wordsCOLORGREEN'>Email*</h5>
                            <input placeholder='E.g, mail@example.com'></input>
                        </div>
                        <div>
                            <h5 className='wordsCOLORGREEN'>Phone*</h5>
                            <input placeholder='E.g, 03 9999 9999'></input>
                        </div>
                    </div>
                    <div className='fistcolumninputFather4'>
                       
                        <div className='textareaParentsCenter'>
                        
                            <textarea placeholder='Type your message here...'></textarea>
                        </div>
                    </div>
                    <div className='fistcolumninputFather5'>
                        <div>
                        <input type="submit"className='submitHOVER' value="Submit"></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
