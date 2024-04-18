import Counter from "./components/Counter.js";

customElements.define("counter-component", Counter);

const myCounter = document.getElementById("myCounter");

setTimeout(() => console.log(myCounter.value), 2000);