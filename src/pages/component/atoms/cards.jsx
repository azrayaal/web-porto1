import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import satu from './1.jpg';

import React from 'react';

export default function Kartu() {
  return (
    <Card className="rounded">
      <Card.Img variant="top" src={satu} className="rounded" style={{ height: '350px' }} />
    </Card>
  );
}
//
