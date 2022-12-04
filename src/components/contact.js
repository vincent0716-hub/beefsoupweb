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
                    <span >1 Dixon St, Sydney, NSW 2000</span>
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
                    <span >Mon - Sun: 11:30am - 2:30pm, 5:00pm - 22:00pm</span>
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
        <div className='_2UgQw' id='comp-k0los9w5' aria-disabled='false'>
          <a className='_1fbEI ' aria-disabled='false'
           style={Object.assign({}, this.style, {
            background: this.state.background,
          })}
          onMouseEnter={() => {
            this.setState({ background: '#67c76d' });
          }}
          onMouseLeave={() => {
            this.setState({ background: '#4e7c51' });
          }}>
            
            <span className='_1Qjd7'>
              RESERVE NOW
            </span>
            
          </a>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
