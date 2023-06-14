import { styled } from "styled-components";

export const StyledProductCard = styled.div`
    border: 2px solid var(--Color-gray-100);
    border-radius: 4px;

    min-width: 300px;
    
    overflow: hidden;

    transition: 300ms;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1.5rem 1.25rem;
    }

    .product-Card__img {
        width:100%; 
        height: 150px; 
        background-color: var(--Color-gray-000);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product-Card__img img {
        width:70%; 
    }
    
    button {
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 600;
        padding: 0.75rem 1.25rem;

        background-color: var(--Color-gray-300);
        color: var(--Color-gray-000);
    }

    &:hover {
        border-color: var(--Color-primary);
        transform: scale(1.1);

        button {
            background-color: var(--Color-primary);
        }
    }
`