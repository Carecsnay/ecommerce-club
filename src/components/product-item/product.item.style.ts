import styled from "styled-components";

interface ProductImageProps {
    $imageUrl: string;
}

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto 10px auto;
    width: 100%;

    p {
        font-size: 1rem;
        font-weight: 500;
    }

    /* Nome do produto */
    p:first-child {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 8px;
        min-width: 0;
    }

    /* Preço do produto */
    p:last-child {
        white-space: nowrap;
        flex-shrink: 0;
    }
`;

export const ProductImage = styled.div<ProductImageProps>`
    background-image: ${(props) => `url('${props.$imageUrl}')`};
    height: 380px;
    width: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
