import React from 'react';
import logo from './logo.svg';

import 'antd/dist/antd.css';
import {Row, Col, Image} from 'antd';
import './App.css';
const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
// Note from the docs -> Warning: The arguments passed to require.context must be literals!
importAll(require.context("./media", false, /\.(png|jpe?g|svg)$/));

const images = Object.entries(cache).map(module => module[1].default);
function App() {
  return (
        <center style={{marginLeft:20}}>
        <h1 className="typewriter-text" style={{letterSpacing:5}}>PICTURESQUEUE</h1>
        <Row gutter={[, 48]}>
        {images.map(image => (
          <Col xs={{ span:18,offset:3 }} sm={{span:6,offset:1}} md={{span:6,offset:1}} lg={{ span:6,offset:1 }} xl={{span:6,offset:1}}>
          <Image src={image}/>
        </Col>
         
            ))}
            </Row>
        {/* <Row>
      <Col xs={{ span:18,offset:3 }} sm={{span:6,offset:1}} md={{span:6,offset:1}} lg={{ span:6,offset:1 }} xl={{span:6,offset:1}}>
        1 col-order-responsive
      </Col>
      <Col xs={{ span:18,offset:3 }} sm={{span:6,offset:1}} md={{span:6,offset:1}} lg={{ span:6,offset:1 }} xl={{span:6,offset:1}}>
        2 col-order-responsive
      </Col>
      <Col xs={{ span:18,offset:3 }} sm={{span:6,offset:1}} md={{span:6,offset:1}} lg={{ span:6,offset:1 }} xl={{span:6,offset:1}}>
        3 col-order-responsive
      </Col>
     
    </Row> */}
    </center>
    
  );
}

export default App;
