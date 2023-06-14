import styled from "styled-components";

export const StyledCartCard = styled.div`
    display: flex;
    align-items: start;
    gap: 0.5rem;

    margin-bottom: 1rem;
    
    > img {
        width: 5em;
        height: 5rem;

        background-color: var(--Color-gray-100);
        padding: 0.75rem;
        border-radius: 5px;
    }

    button {
        margin-left: auto;
    }

`