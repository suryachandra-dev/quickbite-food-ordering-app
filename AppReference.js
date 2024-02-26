// const heading = React.createElement("h1", 
// {id:'heading',xyz:'abc'}
// , "Hello World From React");
// console.log(heading);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// const heading=React.createElement('div',{id:'parent'},
// [
//     React.createElement('div',{id:'child'},
// [React.createElement('h1',{},'I am a h1 tag'),React.createElement('h2',{},'This is Namaste React ')]),
// React.createElement('div',{id:'child'},
// [React.createElement('h1',{},'I am a h1 tag'),React.createElement('h2',{},'Hi How are you!')])]
// )
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(heading);
import React from 'react'
import ReactDOM from 'react-dom/client'


//JSX React (transpiled before it reaches the js engine)-PARCEL-BABEL
// JSX => Babel transpiles it to  React.createElement => React Element JS- Object => HTML Element(render)
// When we render this element into dom it will become an html element
const heading= React.createElement('h1',
    {id:'heading'},
    "Namaste React"
);
console.log(heading);

const jsxHeading=(
<h1 id='heading'  tabIndex='1' className="jsxClassname">
    Namaste React jsx 
    </h1>
    );
// console.log(jsxHeading);
//heading and jsxHeading are one and the same thing now


//Two ways to create a React.Component
// Class Based Component -OLD
//Functional Component -New 

//React Functional Component
const number=100;
const HeadingComponent =()=>{
    return (
        <div id='insidejsx'>
            {/* <Title/> */}
            {title()}
            {movie}
            <h1>{100+300+600}</h1>
            {console.log('Console statement inside the jsx')}
            {console.log('sss')}
        <h1>Namaste React Functional Component </h1>
        </div>
    )
};

const movie=(
    <div>
    <h2>'Guntur Kaaram '</h2>
    <h2>'Guntur Kaaram '</h2>
    <h2>'Guntur Kaaram '</h2>
    </div>
)
const title=()=>{ 
    return (
        <>
        {/* <HeadingComponent/> */}
    <h1 id='head'>Namaste React Title Component </h1></>
)}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);

