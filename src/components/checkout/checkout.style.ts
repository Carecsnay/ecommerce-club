import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CheckoutContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 30px 20px;

    overflow: hidden;

    p {
        color: ${Colors.text.black};
    }

    button {
        width: 650px;
        @media (max-width: 768px) {
            width: 90%;
        }
    }

    & span {
        margin-top: 15px;
        display: flex;
        align-items: center;
    }

    & span p:nth-child(1) {
        font-size: 30px;
    }

    & span p:nth-child(2) {
        color: red;
        margin-left: 5px;
    }
`;

export const CheckoutTitle = styled.p`
    font-weight: bold;
    font-size: 1.325rem;
`;

export const CheckoutProducts = styled.div`
    min-width: 650px;
    overflow-y: scroll;
    margin-top: 15px;
    margin-bottom: 15px;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${Colors.input.background};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${Colors.text.black};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${Colors.text.black};
    }

    @media (max-width: 768px) {
        min-width: 85%;
    }
`;

export const CheckoutTotal = styled.p`
    width: 650px;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        max-width: 85%;
        text-align: center;
    }
`;
