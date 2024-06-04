// Start coding here
import "./Alert.css";
function Alert({ text, img }) {
  let btnStyle = "";
  if (text === "error") {
    btnStyle = "btnError";
  } else if (text === "warning") {
    btnStyle = "btnWarning";
  } else if (text === "info") {
    btnStyle = "btnInfo";
  } else {
    btnStyle = "btnSuccess";
  }
  return (
    <div className={`btn ${btnStyle}`}>
      <div class="btn-long">
        <img src={img} /> {`This is ${text} alert box.`}
      </div>
    </div>
  );
}

export default Alert;
