import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Kartu from '../atoms/cards';
import Kartu2 from '../atoms/cards2';
import './news.css';

export default function News() {
  return (
    <div className="backgroundNews py-5">
      <Container>
        <Row className="g-3 py-5">
          <h1 className="text-center">NEWS</h1>
          <Col sm={1} md={7}>
            <Kartu />
          </Col>
          <Col sm={1} md={5}>
            <Kartu2 />
            <br />
            <Kartu2 />
            <br />
            <Kartu2 />
            <br />
            <Kartu2 />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
