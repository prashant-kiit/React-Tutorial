import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyApp from './MyApp';

const htmlElement = document.getElementById('root');
// no import needed for Document Interface 
// document is an object of Document Interface
// htmlElement is object of HTMLElement Interface

const root = ReactDOM.createRoot(htmlElement);
// import needed for ReactDOM Class file 
// ReactDOM is statically accessing the ReactDOM Inteface member functions
// root is object of Root Interface
// Concurrency starts here

// jsx used
const SampleElement = (
    <h1> HTML Tag Object Type 1</h1>
);

const SampleElement2 = 
    <h1> HTML Tag Object Type 2</h1>;

const areactElement = React.createElement(
    'p',
    {},
    'Hello world. This is React Element'
);

root.render(<MyApp/>);
// root.render(<MyApp></MyApp>);
// root.render(SampleElement);
// root.render(SampleElement2);
// root.render(<><h1> Just HTML Tag  </h1></>);
// root.render(<h1> Just HTML Tag </h1>);
// root.render(areactElement);             
// jsx used
// render will accept parameter in html or jsx(which is close to html) syntax

// export interface Root {
//   render(children: React.ReactNode): void;
//   unmount(): void;
// }

/* <React.StrictMode>
<MyApp />
</React.StrictMode> */