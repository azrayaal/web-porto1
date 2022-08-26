import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import header1 from '../header/header1.jpg';

import './navbar.css';

export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(window.scrollY);
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <Navbar className={navbar ? 'navbar active fixed-top' : 'navbar fixed-top'}>
        <Container>
          <Navbar.Brand href="#home" className="text-white fw-bold">
            Navbar with text
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white fw-bold">
              Signed in as:{' '}
              <a href="#login" className="text-white fw-bold">
                Mark Otto
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
