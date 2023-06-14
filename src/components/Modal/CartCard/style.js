import styled from "styled-components";

export const StyledCartCard = styled.div`
    display: flex;
    align-items: start;
    gap: 1rem;

    position: relative;

    margin: 0 0.5rem 1rem 0;
    
    div > img {
        width: 5em;
        height: 5rem;

        background-color: var(--Color-gray-100);
        padding: 0.75rem;
        border-radius: 5px;
    }

    div:nth-child(1) > p {
        position: absolute;
        bottom: -10px;
        left: 65px;

        padding: 0.125rem 0.5rem; 
        border-radius: 7px;
        background-color: var(--Color-primary);

        color: var(--Color-gray-000);
        font-size: 0.75rem;
        font-weight: bold;
        font-family: var(--font);

        text-align: center;
    }

    button {
        margin-left: auto;
    }

    div {
        display: flex; 
        flex-direction: column;
        gap: .5rem;
    }

    @media screen and (min-width: 425px) {
       h3 {
        font-size: 1.125rem;
       }
    }
`