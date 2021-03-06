import styled from 'styled-components';

const CheckOutPageStyle = styled.div`
  width: 55%;
  min-height: 90vh;
  display; flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  
  .testing {
    text-align : center;
    margin-top: 40px;
    font-size: 24px;

    a {
      color: blue;
      text-decoration: underline;
    }
  }


  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
  
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  .header {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    .column {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }
`;

export default CheckOutPageStyle;
