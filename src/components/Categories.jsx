import styled from "styled-components";
import catagories from "../data/data2";
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content:space-between;
  ${mobile({ padding:"0px", flexDirection:"column"})}
`;

const Categories = () => {
  return (
    <Container>
      {catagories.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Categories;
