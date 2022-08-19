import "./styles.css";
import logo from "../../assets/react.svg";
import { useRef } from "react";

const Home = () => {
  const inputRef = useRef(null);

  const getRefValue = () => {
    console.log(inputRef?.current?.value);
  };

  return (
    <div id="home">
      <div id="home-content">
        <div className="page-title">
          <img src={logo} alt="" />
          <h2>React is awesome!</h2>
          <div>
            <input type="text" ref={inputRef} />
            <button onClick={getRefValue}>Get Value</button>
          </div>
        </div>
        <br />
        <p>Welcome!</p>
      </div>
    </div>
  );
};

export default Home;
