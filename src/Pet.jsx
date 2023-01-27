//import React from 'react';

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.species),
//       React.createElement("h2", {}, props.breed),
//       React.createElement("h2", {}, props.colour),
//     ]);
//   };

const Pet = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.species}</h2>
            <h2>{props.breed}</h2>
            <h2>{props.colour}</h2>
        </div>
    );
};
export default Pet;