import React from 'react';
import Nav from '../component/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../component/header/header';
import News from '../component/news/news';
import Content from '../component/content/content';
import Foot from '../component/footer/footer';

export default function Home() {
  return (
    <div style={{ background: 'red' }}>
      <Nav />
      <Header />
      <News />
      <Content />
      <Foot />
    </div>
  );
}
