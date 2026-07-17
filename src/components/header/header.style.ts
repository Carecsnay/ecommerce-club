import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const HeaderContainer = styled.div`
    width: 100%;
    flex-direction: row;
    background-color: ${Colors.background.dark};
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: ${Colors.text.white};
`;

export const HeaderTitle = styled.h2`
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const HeaderItems = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderItem = styled.div`
    font-weight: 600;
    font-size: 1rem;
    align-items: center;
    display: flex;
    cursor: pointer;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
        margin-right: 40px;
    }
`;
