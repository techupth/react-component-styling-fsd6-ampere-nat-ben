import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ErrorPic from "../src/assets/frown.svg";
import WarningPic from "../src/assets/alert-triangle.svg";
import InfoPic from "../src/assets/alert-circle.svg";
import SuccessPic from "../src/assets/check-circle.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button className="primary" />
        <Button className="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert text="error" img={ErrorPic} />
        <Alert text="warning" img={WarningPic} />
        <Alert text="info" img={InfoPic} />
        <Alert text="success" img={SuccessPic} />
      </div>
    </div>
  );
}

export default App;
