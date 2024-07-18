import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup";
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
></link>;

function App() {
  return (
    <BrowserRouter>
      <RoutesSetup />
    </BrowserRouter>
  );
}

export default App;
