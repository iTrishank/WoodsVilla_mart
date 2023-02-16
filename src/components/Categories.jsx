import styled from "styled-components";
import catagories from "../data/data2";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content:space-between;
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
