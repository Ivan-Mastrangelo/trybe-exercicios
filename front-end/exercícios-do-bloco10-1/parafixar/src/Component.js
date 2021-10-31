import React from "react";
const myName = 'Ivan';
const text = 'tenho 48 anos, 1,90m, sou nascido no Uruguai e me criei no Rio.'

class Component extends React.Component {
    render() {
        return <h1>{myName} <p>{text}</p></h1>
    }
}


export default Component;
