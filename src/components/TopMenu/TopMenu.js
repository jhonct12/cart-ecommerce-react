import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";

import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./TopMenu.scss";
import Cart from "../Cart";

export default ({ productCart }) => {
  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav></BrandNav>
        {/*<MenuNav></MenuNav>*/}
        <Cart productCart={productCart}></Cart>
      </Container>
    </Navbar>
  );
};

const BrandNav = () => {
  return (
    <NavbarBrand>
      <Logo></Logo>
      <h2>La casa de los helados</h2>
    </NavbarBrand>
  );
};

const MenuNav = () => {
  return (
    <Nav className="mr-auto">
      <NavLink href="#">Aperitivos</NavLink>
      <NavLink href="#">Helados</NavLink>
      <NavLink href="#">Mascotas</NavLink>
    </Nav>
  );
};
