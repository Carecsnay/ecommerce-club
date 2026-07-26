import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
`;

export const CategoryTitle = styled.p`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 21px;
    font-weight: 500;
`;

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`;
