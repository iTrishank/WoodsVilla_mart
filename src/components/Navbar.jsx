import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ padding: "0px" })}
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 35px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  ${mobile({ fontSize: "24px", marginLeft: "20px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItems = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const history = useNavigate();

  const handleMenuLinkClick = (event) => {
    history.push(event.target.getAttribute("href"));
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/WoodsVilla_mart" onClick={handleMenuLinkClick}>
            WOODS.
          </Logo>
        </Center>
        <Right>
          {/* <Link
            style={{
              textDecoration: "none",
              color: "inherit",
              fontSize: "14px",
              cursor: "pointer",
              marginLeft: "25px",
            }}
            to="/Register"
          >
            REGISTER
          </Link> */}
          <MenuLink to="/Register" onClick={handleMenuLinkClick}>
            REGISTER
          </MenuLink>
          <MenuLink to="/Login" onClick={handleMenuLinkClick}>
            SIGN-IN
          </MenuLink>
          <MenuItems to="/Cart" onClick={handleMenuLinkClick}>
            <Badge badgeContent={69} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
