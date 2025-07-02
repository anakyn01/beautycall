import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {

  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-danger">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="text-white">BeautyCall</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="custom-toggler"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={isMobile ? { width: '50%' } : {}}           
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Nav.Link as={Link} to="/">BeautyCall</Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/splash">스플래시</Nav.Link>
                  <Nav.Link as={Link} to="/mypage">마이페이지</Nav.Link>
                  <Nav.Link as={Link} to="/find">프리랜서찾기</Nav.Link>
                  <Nav.Link as={Link} to="/member">회원정보수정</Nav.Link>
                  <Nav.Link as={Link} to="/edu">교육신청목록</Nav.Link>     
                 <Nav.Link as={Link} to="/charge">충전내역</Nav.Link>
                  <Nav.Link as={Link} to="/point">포인트사용내역</Nav.Link>
                  <Nav.Link as={Link} to="/call">콜승인내역</Nav.Link>
                  {/*<NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>*/}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className=""
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
}

export default Header;
