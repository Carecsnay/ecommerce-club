import styled from "styled-components";

export const CategoriesContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CategoriesContent = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1920px;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    grid-template-areas:
        "a b c"
        "d e f"
        "g h i"
        "j j j";
    grid-gap: 15px;
    padding: 30px;

    & > div:nth-child(1) {
        grid-area: a;
    }
    & > div:nth-child(2) {
        grid-area: b;
    }
    & > div:nth-child(3) {
        grid-area: c;
    }
    & > div:nth-child(4) {
        grid-area: d;
    }
    & > div:nth-child(5) {
        grid-area: e;
    }

    & > div:nth-child(6) {
        grid-area: f;
    }

    & > div:nth-child(7) {
        grid-area: g;
    }

    & > div:nth-child(8) {
        grid-area: h;
    }

    & > div:nth-child(9) {
        grid-area: i;
    }

    & > div:nth-child(10) {
        grid-area: j;
    }
`;
