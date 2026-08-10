import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.background.dark};
    padding: 20px;
    color: ${Colors.text.white};

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const HeaderTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const HeaderItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
`;

export const HeaderItem = styled.div`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;

    & span {
        cursor: pointer;
    }

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
        margin-right: 40px;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;

        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
            margin-right: 0;
        }
    }
`;
