import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 1.25rem 7%;
    background-color: var(--Color-gray-000);

    max-width: 100vw;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .car-logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .car-logo > img {
        width: 160px;
    }


    @media screen and (min-width: 768px) {
        flex-direction: row;
    }

    @media screen and (min-width: 1440px) {
        padding: 1.25rem 15%;
    }

    @media screen and (min-width: 2560px) {
        padding: 1.25rem 25%;
    }
`