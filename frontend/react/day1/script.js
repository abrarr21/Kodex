console.log(document); // real DOM

console.log(React); // Access of React
console.log(ReactDOM); // Access of ReactDOM

let h1RealDOM = document.createElement("h1"); // created a h1 in real dom

let h1React = React.createElement("h1", null, "This is from React"); // created a h1 in Virtual DOM using React

console.log(h1RealDOM);
console.log(h1React); // Isme $$typeof indicate karta hai ki ye ek react element hai, not of real DOM.

// Create two div with h1="Hey" using React
let ui = React.createElement("div", {}, [
    React.createElement("h1", {}, "Hey"),
    React.createElement("h1", {}, "Bye"),
]);

console.log(ui);

// Now, to render this ui/changes on real DOM, we need to attach ReactDOM with real DOM (compare hota rahega changes by ReactDOM)
ReactDOM.createRoot(document.getElementById("root")).render(ui);

//
// import { app } from "./app";
// ReactDOM.createRoot(document.getElementById("root")).render(app());
