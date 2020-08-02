import { styled } from 'baseui';

export const Header = styled('header', {
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  background: "#07d1d1",
  justifyContent: "space-between"
});

export const Logo = styled('div', {
  fontSize: "36px",
  fontWeight: "bold",
  cursor: "pointer",
  margin: "0 40px"
});

export const NavContainer = styled('ul', {
  display: "flex",
  color: "#000"
});

export const NavItem = styled('li', {
  cursor: "pointer",
  margin: "0 8px",
  fontSize: "20px",
  ":hover": {
    color: "#fff"
  }
})