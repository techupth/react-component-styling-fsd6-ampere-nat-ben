/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Button from "./components/Button";
import {
  ErrorAlertBox,
  WarningAlertBox,
  InfoAlertBox,
  SuccessAlertBox,
} from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <ErrorAlertBox />
        <WarningAlertBox />
        <InfoAlertBox />
        <SuccessAlertBox />
      </div>
    </div>
  );
}

export default App;
