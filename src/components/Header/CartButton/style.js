import { styled } from "styled-components";

export const StyledCart = styled.button`

    position: relative;

    svg {
        width: 25px;
    }

    p {
        position: absolute;
        top: -16px;
        right: -8px;

        padding: 0.25rem; 
        border-radius: 7px;
        background-color: var(--Color-primary);

        color: var(--Color-gray-000);
        font-size: 0.875rem;
        font-weight: bold;
        font-family: var(--font);

        text-align: center;
    }
`