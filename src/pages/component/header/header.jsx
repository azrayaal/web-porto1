import React from 'react';

import { Button } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import './header.css';

import header1 from './header1.jpg';

export default function Header() {
  return (
    // <div>
    //   <img className="d-block w-100" src={header1} />
    //   <Carousel.Caption>
    //     <button>First slide label</button>
    //     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //   </Carousel.Caption>
    // </div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={header1} class="crs1 d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <p>
              <button href="">MORE INFO</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
