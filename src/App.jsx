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

// function ErrorAlert() {
//   return (
//     <div
//       css={css`
//         color: #444444;
//         background-color: #f9c8c8;
//         width: 640px;
//         height: 76px;
//         border: none;
//         border-radius: 10px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 29.9px;
//         margin-bottom: 10px;
//         padding-left: 10px;
//       `}
//     >
//       <span
//         css={css`
//           width: 20px;
//           color: #ed5050;
//         `}
//       >
//         ☹️
//       </span>{" "}
//       This is error alert box
//     </div>
//   );
// }

// function WarningAlert() {
//   return (
//     <div
//       css={css`
//         color: #444444;
//         background-color: #f9d9c8;
//         width: 640px;
//         height: 76px;
//         border: none;
//         border-radius: 10px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 29.9px;
//         margin-bottom: 10px;
//         padding-left: 10px;
//       `}
//     >
//       <span
//         css={css`
//           width: 21px;
//           color: #ea712d;
//           font-size: 21px;
//         `}
//       >
//         ⚠
//       </span>
//       This is warning alert box
//     </div>
//   );
// }

// function InfoAlert() {
//   return (
//     <div
//       css={css`
//         color: #444444;
//         background-color: #f9ebc8;
//         width: 640px;
//         height: 76px;
//         border: none;
//         border-radius: 10px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 29.9px;
//         margin-bottom: 10px;
//         padding-left: 10px;
//       `}
//     >
//       <span
//         css={css`
//           width: 21px;
//           color: #f29811;
//           font-size: 21px;
//         `}
//       >
//         ℹ
//       </span>
//       This is info alert box
//     </div>
//   );
// }

// function SuccessAlert() {
//   return (
//     <div
//       css={css`
//         color: #444444;
//         background-color: #cef7cd;
//         width: 640px;
//         height: 76px;
//         border: none;
//         border-radius: 10px;
//         display: flex;
//         justify-content: flex-start;
//         align-items: center;
//         font-weight: 700;
//         font-size: 20px;
//         line-height: 29.9px;
//         margin-bottom: 10px;
//         padding-left: 10px;
//       `}
//     >
//       <span
//         css={css`
//           width: 21px;
//           color: #14944f;
//           font-size: 21px;
//         `}
//       >
//         ℹ
//       </span>
//       This is success alert box
//     </div>
//   );
// }

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
