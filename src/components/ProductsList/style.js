import { styled } from "styled-components";

export const StyledProductSection = styled.div`
    padding: 2rem 1rem;

    display: flex;
    gap: 1.25rem;

    overflow-x: auto;


    @media screen and (min-width: 768px) {
        overflow-x: auto;
        flex-wrap: wrap;
        padding: 2rem 10%;
        gap: 3rem 5% ;
    }
    
    @media screen and (min-width: 1440px) {
        padding: 1.25rem 15%;
    }

    @media screen and (min-width: 2560px) {
        padding: 1.25rem 25%;
    }
`