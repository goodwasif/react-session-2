import "./styles.css";
import logo from "../../assets/react.svg";

const Home = () => {
  return (
    <div id="home">
      <div id="home-content">
        <div className="page-title">
          <img src={logo} alt="" />
          <h2>React is awesome!</h2>
        </div>
        <br />
        <p>Welcome!</p>
      </div>
    </div>
  );
};

export default Home;
