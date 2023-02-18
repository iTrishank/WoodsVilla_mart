import styled from "styled-components";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Telegram from "@mui/icons-material/Telegram";
import YouTube from "@mui/icons-material/YouTube";
import Map from "@mui/icons-material/Room";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/MailOutline";
import paymentMir from "../Assests/paymentMir.png";
import paymentVisa from "../Assests/paymentVisa.png";
import paymentMaster from "../Assests/paymentMaster.png";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.div``;
const PaymentImage = styled.img`
  width: 70px;
  height: 90%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WOODS.</Logo>
        <Description>
          Welcome to our online handicraft store, where you'll find a unique
          collection of handcrafted products that are made with love and care by
          skilled artisans from around the world. We believe that handmade items
          bring warmth and character to any space, and we're passionate about
          bringing you the best of the best. Our store features a wide range of
          products, including beautiful ceramics unique textiles, and handmade
          jewelry.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Man Fashion</ListItems>
          <ListItems>Women Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Map style={{ marginRight: "10px" }} />
          75/2 5th Dorm Izmailovskii Prospekt, Мама Россия
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +7 915 277 48 69
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          trishankwork@gmail.com
        </ContactItem>
        <Payment>
          <PaymentImage src={paymentMir} />
          <PaymentImage src={paymentVisa} />
          <PaymentImage src={paymentMaster} />
        </Payment>
      </Right>
    </Container>
  );
};

export default Footer;
