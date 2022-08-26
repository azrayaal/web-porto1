import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './content.css';

import gb1 from './lol-wildrift-productimage.png';
import gb2 from './val-card-bg-1800-08-22.png';

export default function Content() {
  return (
    <div className="backgroundContent py-5">
      <Container className="py-5">
        <h1 className=""> Contents</h1>
        <Row className="g-3">
          <Col xs={12} md={6}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb2} />
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb2} />
            </Card>
          </Col>
        </Row>
        <Row className="pt-3 g-3">
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="rounded">
              <Card.Img variant="top" className="rounded" src={gb1} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
