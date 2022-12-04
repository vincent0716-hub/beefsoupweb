import React, { Component } from 'react'
import logo from './logo.png';
import './title.css'
import Nav from 'react-bootstrap/Nav';
import panda from './panda.png';
import bamboo from './bamboo.png';
import food1 from './food1.jpeg';

const styles = {
    board: {
        position: "absolute",
        top: "0",
        left:"0",
        background:"green",
        height: "100%",
        width:"100%"
      },
    header:{
        position: "absolute",
        top: "0",
        left:"0",
        height: "110px",
        width:"1440px",
        background:"white",
    },
    buttonareainHeader:{
        position: "absolute",
        top: "0",
        left:"50",
        height: "50px",
        width:"300px",
        
    },
    button1Home:{
        position: "absolute",
        top: "0",
        left:"500",
        height: "50px",
        width:"300px",
        
    },
    pictureposition1:{
        position: "relative",
        left:"400px",
    },
    pictureposition2:{
        position: "relative",
        left:"230px",
    }
}

export default class title extends Component {
  
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
   /* const contact = useRef(null);

    const scrollToSection = (elementRef)=>{
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior:'smooth'
      })
    }*/
    return (
        <div >
        
        <main>

          <div className='firstdiv'>
          <img className='food1edit'src={food1} alt="food1"/>
          <div className='fontdivContainer'>
            <h3 className='font_3' >
              <span className='color_11'> 
              <span style={{letterSpacing:"0.02em"}}>Bowl Bowl Beef Sichuan Beef Soup</span>
              </span>
            </h3>
          </div>
          <div className='fontdivContainer editposition'>
          <h6 className='font_6' >
              <span className='color_11'> 
              <span style={{letterSpacing:"0.02em"}}>Let us guide you to explore Sichuan flavour</span>
              </span>
            </h6>
          </div>
          </div>

          
        </main>
        </div>
    )
  }
}
