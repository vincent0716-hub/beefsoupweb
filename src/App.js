import Title from './components/title'
import About from './components/about'
import Bottom from './components/bottom'
import { useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import logo1 from './logo.png';
import './App.css'
import panda from './panda.png';
import bamboo from './bamboo.png';
import Contact from './components/contact';
import { BrowserRouter as Router, Route, Routes, Switch, NavLink, Link } from 'react-router-dom';
import Menu1 from './components/menu1'
import Reserve from './components/reservation'

function App() {

  const contact = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  const styles = {
    board: {
      position: "absolute",
      top: "0",
      left: "0",
      background: "green",
      height: "100%",
      width: "100%"
    },
    header: {
      position: "absolute",
      top: "0",
      left: "0",
      height: "110px",
      width: "1440px",
      background: "white",
    },
    buttonareainHeader: {
      position: "absolute",
      top: "0",
      left: "50",
      height: "50px",
      width: "300px",

    },
    button1Home: {
      position: "absolute",
      top: "0",
      left: "500",
      height: "50px",
      width: "300px",

    },
    pictureposition1: {
      position: "absolute",
      left: "800px",
    },
    pictureposition2: {
      position: "absolute",
      left: "990px",
    },
    pictureposition3: {
      position: "absolute",
      top: "-195px"
    }
  }

  return (

    <div >
      <div className='HEADERDiv'>
      <header className="header" style={styles.header}>
        <div >
          <img style={styles.pictureposition3} src={logo1} alt="logo" />
          <img style={styles.pictureposition1} src={panda} alt="panda" />
          <img style={styles.pictureposition2} src={bamboo} alt="bamboo" />
        </div>
        <div className="classfont" style={styles.buttonareainHeader}>

          <Nav defaultActiveKey="/home" as="ul" >
            <div className="transparentfont moveSpace">
              <Nav.Item className="fontcolor a" as="li">
                <Link to='/' className="AboutHover">Home</Link>
              </Nav.Item>
            </div>
            <div className="transparentfont moveSpace2">
              <Nav.Item className="fontcolor a" as="li">
                <Nav.Link className="AboutHover" eventKey="link-1" onClick={() => scrollToSection(about)}>About</Nav.Link>
              </Nav.Item>
            </div>
            <div className="transparentfont moveSpace3">
              <Nav.Item className="fontcolor a" as="li">
                <Nav.Link className="AboutHover" eventKey="link-2" onClick={() => scrollToSection(contact)}>Contact</Nav.Link>
              </Nav.Item>
            </div>

            <div className="transparentfont moveSpace4">
              <Nav.Item className="fontcolor a" as="li">
                <Link eventKey="link-2" to='/menu' className="AboutHover">Menu</Link>


              </Nav.Item>
            </div>
          </Nav>
        </div>

      </header>
      </div>
      <Routes>
        <Route path='/' element={<div >

         <div  className='TittleDiv'>
          <Title></Title>
          </div>

          <div ref={contact} className='ContactDiv'>
            <Contact ></Contact>
          </div>

          <div ref={about} className='AboutDiv'>
            <About ></About>
          </div>

          <div className='BottomDivDiv'>
            <Bottom></Bottom>
          </div>


        </div>} />
        <Route path='/menu' element={
          <div>

            <div>
              <Menu1 />
            </div>
            <div>
              <Bottom></Bottom>
            </div>

          </div>
        } />


      </Routes>

      <Routes>
      <Route path='/reservation' element={
          <div>

            <div>
              < Reserve/>
            </div>
            <div>
              <Bottom></Bottom>
            </div>

          </div>
        } />


      </Routes>


    </div>


  );

}

export default App;
