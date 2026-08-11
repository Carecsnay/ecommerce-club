import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 15px;
`;

export const CategoryTitle = styled.p`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 1366px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;
