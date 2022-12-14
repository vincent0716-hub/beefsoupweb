import React, { Component } from 'react'

import './title.css'

export default class contact extends Component {
    constructor() {
        super();
        this.state = {
          background: '#4e7c51',
        };
        this.style = {
          color: 'yellow',
          padding: '5px',
          paddingBottom: '6px',
          border: '1px',
          background: 'red',
        };
      }
  render() {
    return (
        <div  className='seconddiv'>
        <div className='fontofRestaurant'>
          <h1 className='font_0'>
            <span className='spanstyle'>OUR RESTAURANT</span>
          </h1>
        </div>

        <div className='restaurantDetailscontainer'>
          <div  className='locationHeader'>
            <h2  className='font_0'>
              <span className='fontstylespecial'>
                <span>Sydney CBD</span>
              </span>
            </h2>
          </div>
          <div className='restaurantDetailscontainerSub'>
            <div className='_3mguU'>
             <div className='_34fGO '>
                <div className='editposition2'>
                  <p >
                   <span>
                    <span >ADDRESS</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p className='font_9'>
                   <span>
                    <span >Burwood, Chinatown, 2 FLoor, Sydney, NSW</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p >
                   <span>
                    <span >OPENING HOURS</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p className='font_9'>
                   <span>
                    <span >Mon - Sun: 11:30am - 2:30pm, 5:00pm - 21:00pm</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p >
                   <span>
                    <span >CONTACT</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p className='font_9'>
                   <span>
                    <span >Mobile: 0412345678</span>
                   </span>
                 </p>
                </div>
                <div className='editposition2'>
                  <p className='font_9'>
                   <span>
                    <span >Email: test@gmail.com</span>
                   </span>
                 </p>
                </div>
             </div>
        </div>
       
        </div>
      </div>
      </div>
    )
  }
}
