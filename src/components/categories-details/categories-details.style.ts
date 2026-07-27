import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const Container = styled.div`
    padding: 0px 40px 20px 40px;
    width: 100%;
    box-sizing: border-box;
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const CategoryTitle = styled.div`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    text-align: start;
    font-size: 21px;
    width: 100%;
    font-weight: 500;
    padding: 10px 15px;

    p {
        font-size: 21px;
        font-weight: 500;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 23px;
    margin-top: 15px;
    overflow-x: hidden;
`;
