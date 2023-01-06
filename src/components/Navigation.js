// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import style from "./navigation.module.css";
// import { Link } from "react-router-dom";
// import { BiAlignRight } from "react-icons/bi";

// import { BiUser } from "react-icons/bi";
// function Navigation() {
//   // const navRef = useRef();
//   const [show, setShow] = useState(false);

//   const showNavbar = () => {
//     setShow(!show);
//   };
//   return (
//     <nav>
//       <h1 className={style.logo}>FunctionUp</h1>
//       <ul className={style.ul} id={show ? style.responsiveNav : style.none}>
//         <li>
//           <Link to="/" className={style.link} onClick={showNavbar}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className={style.link} onClick={showNavbar}>
//             Login
//           </Link>
//         </li>
//         <li>
//           <Link to="/register" className={style.link} onClick={showNavbar}>
//             Register
//           </Link>
//         </li>

//         <button
//           id={style.navBtn}
//           className={style.navCloseBtn}
//           onClick={showNavbar}
//         >
//           <FaTimes />
//         </button>
//       </ul>

//       <button className={style.sideIcon} id={style.navBtn}>
//         <BiAlignRight onClick={showNavbar} />
//       </button>
//       <button className={style.profileIcon}>
//         <BiUser />
//       </button>
//     </nav>
//   );
// }

// export default Navigation;

//new react
import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navigation.css";

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/register" onClick={showNavbar}>
          Register
        </Link>
        <Link to="/login" onClick={showNavbar}>
          Login
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
export default Navigation;
