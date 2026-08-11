import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const Container = styled.div`
    padding: 0px 40px 20px 40px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 0px 40px 20px 40px;
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
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
    flex-shrink: 0;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`;

export const CategoryTitle = styled.div`
    background-color: ${Colors.background.dark};
    color: ${Colors.text.white};
    border-radius: 10px;
    font-size: 1.25rem;
    width: 100%;
    font-weight: 500;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    p {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0;
    }

    @media (max-width: 768px) {
        p {
            display: block;
            font-size: 1rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%; /* Ocupa 100% do espaço restante sem travar em pixels */
        }
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    margin-top: 15px;
    overflow-x: hidden;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;
