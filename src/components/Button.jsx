// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  if (props.type === "primary") {
    return (
      <>
        <button
          css={css`
            background-color: #074ee8;
            width: 171.19px;
            height: 50px;
            border-radius: 4px;
            padding: 0 16px;
            gap: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
          `}
        >
          Button
        </button>
      </>
    );
  } else if (props.type === "secondary") {
    return (
      <>
        <button
          css={css`
            background-color: #07a4e8;
            width: 171.19px;
            height: 50px;
            border-radius: 4px;
            padding: 0 16px;
            gap: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
          `}
        >
          Button
        </button>
      </>
    );
  }
}
export default Button;
