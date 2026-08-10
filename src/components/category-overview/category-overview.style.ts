import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
`;

export const CategoryTitle = styled.p`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px 15px;
    text-align: start;
    font-size: 1.25rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 1.25rem;
        width: 97.5%;
        text-align: center;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
`;
