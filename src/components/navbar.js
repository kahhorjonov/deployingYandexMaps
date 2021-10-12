import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link className="nav-logo-img" to="/">
          <img src={Logo} alt="logo of organization" />
        </Link>
        <Link to="/" className="nameOffice">
          <li>Tashkilot nomi</li>
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Asosiy sahifas </Link>
          <Link to="/table-comp"> Yo'llar ro'yxati </Link>
          <Link to="/about"> Biz haqimizda </Link>
          <Link to="/contact"> Aloqa </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/table-comp"> Yo'llar ro'yxati </Link>
        <Link to="/about"> Biz haqimizda </Link>
        <Link to="/contact"> Aloqa </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

// import { Container, Nav, Navbar } from "react-bootstrap";
// import Logo from "../assets/logo1.png";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/navbar.css";

// function Navbar2() {
//   return (
//     <div className="navbar bg-blue d-flex justify-content-center">
//       <Navbar
//         bg="blue"
//         sticky="top"
//         expand="lg"
//         className="px-4 w-100 border-bottom"
//       >
//         <Container>
//           <Navbar.Brand>
//             <Link to="/" className="nav-logo-img">
//               <img src={Logo} width="60px" height="45px" />
//             </Link>
//             <Link to="/" className="text-light m-3 text-decoration-none">
//               Tashkilot nomi
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <Nav className="bg-blue text-center">
//               <Nav.Link
//                 className="bg-blue m-2 p-0 px-2 text-light"
//                 href="/table-comp"
//               >
//                 Yo'llar ro'yxati
//               </Nav.Link>
//               <Nav.Link
//                 className="bg-blue m-2 p-0 px-2 text-light"
//                 href="/about"
//               >
//                 Biz haqimizda
//               </Nav.Link>
//               <Nav.Link
//                 className="bg-blue m-2 p-0 px-2 text-light"
//                 href="/contact"
//               >
//                 Aloqa
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Navbar2;
