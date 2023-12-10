import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function visible(props) {
  if (props.vis) {
    return (
      <button onClick={() => {
        props.setVis(false)
        props.setPass("text")
        }}>
        <FaRegEye />
      </button>
    );
  } else {
    return (
      <button onClick={() => {
        props.setVis(true)
        props.setPass("password")
      }}>
        <FaRegEyeSlash />
      </button>
    );
  }
}

export default visible;
