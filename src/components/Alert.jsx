// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// function Alert() {}
export function ErrorAlertBox() {
  return (
    <div
      css={css`
        color: #444444;
        background-color: #f9c8c8;
        width: 640px;
        height: 76px;
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 29.9px;
        margin-bottom: 10px;
        padding-left: 10px;
      `}
    >
      <span
        css={css`
          width: 20px;
          color: #ed5050;
        `}
      >
        ☹️
      </span>{" "}
      &nbsp; This is error alert box
    </div>
  );
}

export function WarningAlertBox() {
  return (
    <div
      css={css`
        color: #444444;
        background-color: #f9d9c8;
        width: 640px;
        height: 76px;
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 29.9px;
        margin-bottom: 10px;
        padding-left: 10px;
      `}
    >
      <span
        css={css`
          width: 21px;
          color: #ea712d;
          font-size: 21px;
        `}
      >
        ⚠️
      </span>
      &nbsp;This is warning alert box
    </div>
  );
}

export function InfoAlertBox() {
  return (
    <div
      css={css`
        color: #444444;
        background-color: #f9ebc8;
        width: 640px;
        height: 76px;
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 29.9px;
        margin-bottom: 10px;
        padding-left: 10px;
      `}
    >
      <span
        css={css`
          width: 21px;
          color: #f29811;
          font-size: 21px;
        `}
      >
        ❗
      </span>
      &nbsp;This is info alert box
    </div>
  );
}

export function SuccessAlertBox() {
  return (
    <div
      css={css`
        color: #444444;
        background-color: #cef7cd;
        width: 640px;
        height: 76px;
        border: none;
        border-radius: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 29.9px;
        margin-bottom: 10px;
        padding-left: 10px;
      `}
    >
      <span
        css={css`
          width: 21px;
          color: #14944f;
          font-size: 21px;
        `}
      >
        ✅
      </span>
      &nbsp; This is success alert box
    </div>
  );
}
