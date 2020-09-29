import styled from 'styled-components';

const ShopCategoryStyles = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .item {
      margin-bottom: 30px;
    }
  }
`;

export default ShopCategoryStyles;