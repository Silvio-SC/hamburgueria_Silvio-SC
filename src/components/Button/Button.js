import styled, { css } from "styled-components";

const button = css`

    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;

     ${({size}) => {
        if(size === "default" || ""){
            return css`
                padding: 1.25rem;
            `
        }else if (size === "medium") {
            return css`
                padding: 0.75rem 1.25rem;
            `
        }
    }}
`

export const StyledButtonGreen = styled.button`
    ${button}
    background-color: var(--Color-primary);
    color: var(--Color-gray-000);

    :hover {
        background-color: var(--Color-primary-50);
    }
`

export const StyledButtonGray = styled.button`
    ${button}
    background-color: var(--Color-gray-100);
    color: var(--Color-gray-300);

    :hover {
        background-color: var(--Color-gray-300);
        color: var(--Color-gray-100);
    }
`