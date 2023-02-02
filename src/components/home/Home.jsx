import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import style from './Home.module.css';

// function salir() {
//   return auth.signOut();
//   navigate("/");
// }

const Home = (props) => {
  return (
    <div className={style.container}>
      <div>
        <div>
          <h1>
            <Link to="/">Cerrar session</Link>
          </h1>
          <br />
          {/* <h1>
            <Link to="/signup">Signup</Link>
          </h1> */}
        </div>
      </div>
      <h2>{props.name ? `Bienvenido - ${props.name}` : "Iniciar Sesión"}</h2>
      {/* <button onClick={salir}>Salir</button> */}
    </div>
  );
};

export default Home;
