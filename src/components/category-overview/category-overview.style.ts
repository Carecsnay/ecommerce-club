import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;

    @media (max-width: 768px) {
        max-width: 300px;
    }
`;

export const CategoryTitle = styled.p`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 10px 15px;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`;
