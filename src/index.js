import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import BottomNav from './components/bottomNav/bottomNav';
import reportWebVitals from './reportWebVitals';

// var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!')
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element, document.getElementById('root'));

root.render(
    <>
    <NavBar />
    <Intro />
    <Skills />
    <Projects />
    <Contact />
    <BottomNav />
    </>
);



reportWebVitals();
