import styled from 'styled-components';

const HeaderStyle = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo {
        height: 100%;
        width: 70px;
        padding: 25px; 
    }
    .options {
        width: 50%;
        height: 100%;
        display: felx;
        align-items: center;
        justify-content: flex-end;
    }

    .option {
        padding: 10px 15px;
    }
`;

export default HeaderStyle;
