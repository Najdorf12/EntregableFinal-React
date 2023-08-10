import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import SideBarCart from "./SideBarCart";


const AppNav = () => {

  
  
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Image src="/iconEcc.png" roundedCircle style={{maxWidth:70}} />
        <div className="nav-info">
         <Nav className="me-auto" style={{gap:".3rem"}}>
            <Nav.Link as={Link} to="/" > <i className='bx bx-home-alt-2'></i> </Nav.Link>
            <Nav.Link href="/login"> <i className='bx bx-user'></i></Nav.Link>
            <Nav.Link as={Link} to="/purchases"> <i className='bx bx-purchase-tag-alt' ></i></Nav.Link>
            
            <SideBarCart/> 
          </Nav>
        </div>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
