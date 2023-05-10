import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Education from './components/education';
import Nav from './components/nav.js';
import reportWebVitals from './reportWebVitals';
import dimond from './me_img2.png';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div>
      <Nav />
    </div>
    <header className='row jumbotron' style={{ backgroundColor: 'goldenrod' }}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-12 align-content-center'>
            <img id="me" src={dimond} style={{ maxWidth: "100%", transform: "translate(5px,12px)" }} alt="" />
          </div>
          <div className='col-lg col-sm'>
            <div className='container'>
              <div className='row'>
                <br></br>
                <App />
              </div>
              <div className='row'>
                <div className='col-lg-3 col-sm-12 allign-content-right'>
                  <br></br><br></br><hr style={{
   background: "floralwhite",
   height: "5px",
   border: "none",
   }}/>
                </div>
                <div className='col-lg col-sm-12'>
                  <br></br>
                  <br></br>
                  <h4><em><small>I'm a college student pursuing my 3rd year of B. Tech specialid in Information technology from
                    St. Joseph's College of Engineering, Chennai. Since my school days learned programming languages
                    such as C++, Python, Java and ended up working with web development projects useing HTML, CSS,
                    Javascript and frameworks such as React and Bootatrap. Good at team work and an active member
                    of various clubs from our college.
                    </small></em>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <footer>

    </footer>
  </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
