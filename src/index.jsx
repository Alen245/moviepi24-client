// Import the createRoot function from the react-dom/client package
import { createRoot } from "react-dom/client";

// Import the MainView component from the ./components/main-view/main-view.js file
import { MainView } from "./components/main-view/main-view";

// Import the index.scss stylesheet
import "./index.scss";

// Define a functional component called App
const App = () => {
    // The App component simply returns the MainView component
    return <MainView />;
};

// Select the HTML element with ID "root" and assign it to the container variable
const container = document.querySelector("#root");

// Use the createRoot function to create a new React root and pass in the container element as the argument
const root = createRoot(container);

// Render the App component inside the new root using the render method
root.render(<App />);
