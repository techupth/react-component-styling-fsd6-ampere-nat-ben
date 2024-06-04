// Start coding here
import "./Button.css";

function Button(btnClass) {
  let btnClassName = "";
  if (btnClass.className === "primary") {
    btnClassName = "btn-primary";
  }
  if (btnClass.className === "secondary") {
    btnClassName = "btn-secondary";
  }
  return <button className={btnClassName}>Button</button>;
}

export default Button;
