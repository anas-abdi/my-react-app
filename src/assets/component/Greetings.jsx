import { Fragment } from "react";


// in App.jsx
function Greetings(props) {
    return (
        <>
            <h1>Hello, {props.name} {props.surname}!
            </h1>;
        <h2>this text was not there </h2>
        </> 
    );

}
  


export default Greetings;
