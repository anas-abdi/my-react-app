import { Fragment } from "react";


// in App.jsx
function Greetings(props) {
    return (
       <div style={{backgroundColor: "yellow", color: "black", padding: "20p"}}> 
            <h1>Hello, {props.name} {props.surname}!
            </h1>;
            <h2>this text was not there </h2>
            <h3>This is the next page</h3>
        </div> 
    );

}
  


export default Greetings;
