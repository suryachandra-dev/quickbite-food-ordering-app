import React from 'react';
import UserClass from './UserClass.js';
// import UserContext from './UserContext.js';
class About extends React.Component{
    constructor(props){
        super(props);
        console.log('Parent Constructor');
    }
    render(){
        console.log('Parent render ');
        return(

<div>
                <h1>Name:About Foodie's Delight</h1>
                <UserClass name={'Surya Chandra'} location={'Hyderabad, India'} />
            </div>



            // <div>
            //     <h1>About Class Component</h1>
            //     <div>
            //         loggedInUser
            //         {/* <UserContext.Consumer>
            //            {
            //             ({loggedInUser})=> <h1>{loggedInUser}</h1>
            //            } 
            //         </UserContext.Consumer> */}
            //     </div>
            //              {/* <User name={'Surya Chandra (Function) '}/> */}
            //              <UserClass name={'1st Class '} location={'Hyderabad'}/>
                        
            //          </div>
        )
    }
}
// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             {/* <User name={'Surya Chandra (Function) '}/> */}
//             <UserClass name={'UserClass Class Based Props'} location={'Hyderabad'}/>
//         </div>
//     )
// }
export default About;



/**
 -Parent Constructor
 -Parent Render
     
    -First Constructor
    -First Render

    -SEcond Constructor
    -Second Render

    <DOM UPDDATED -IN SINGLE BATCH>
    -First Component Did Mount
    -Second Component Did Mount

-Parent Component Did Mount
 */

/**
 * ---MOUNTING---
 * 
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API CALL>
 *      <this.setState>-->State Variable is Upadted
 * 
 * 
 * --UPDATE---
 *      render(API DATA)
 * <HTML(New API Data)>
 * component Did Update
 * 
 * 
 * Component Will Unmount
 * 
 */