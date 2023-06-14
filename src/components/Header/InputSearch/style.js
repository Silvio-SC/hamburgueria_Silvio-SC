import styled from "styled-components";

export const StyledInput = styled.form`
    padding: 0.25rem;
    border: 2px solid var(--Color-gray-100);
    border-radius: 8px;
    background-color: #fff;

    display: flex;
    justify-content: space-between;

    
    &:has(input:focus) {
            border-color: var(--Color-gray-600);
        }

    input {
        border: none;
        background-color: transparent;
        color: var(--Color-gray-300);

        font-size: 1rem;
        width: 180px;

        &::placeholder {
            color: var(--Color-gray-100);
        };
    }

    button {
        padding: 0.75rem 1rem;
    }

    @media screen and (min-width: 375px) {
        input {
            width: 250px;
        }
    }
`