import Application from "./Application.js";
import * as ReactDOM from "./ReactDOM.ts";

const htmlElement = document.getElementById('root');

const root = ReactDOM.createRoot(htmlElement);

root.render(Application());
