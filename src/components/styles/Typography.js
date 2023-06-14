import styled, { css } from "styled-components";

const bold = css`
    font-weight: 700;
    color: var(--Color-gray-600);
    font-family: var(--font);
    ${({size}) => {
        return css`
            font-size: ${size/16}rem;
        `
    }}
`

const regular = css`
    font-weight: 400;
    color: var(--Color-gray-600);
    font-family: var(--font);
    ${({size}) => {
        return css`
            font-size: ${size/16}rem;
        `
    }}
`

export const Heading1 = styled.h1`
    ${bold}
`

export const Heading2 = styled.h2`
    ${bold}
`

export const Heading3 = styled.h3`
    ${bold}
`
export const Heading = styled.h4`
    ${regular}
`
export const BodyText = styled.p`
    ${regular}
`
export const Caption = styled.p`
    ${regular}
`
export const BodySemiBold = styled.p`
    font-weight: 600;
    color: var(--Color-gray-600);
    font-family: var(--font);
    font-size: 0.875rem;

    ${({color}) => {
        if(color === "") {
            return css`
            color: var(--Color-gray-600);
            `
        } else if (color === "green") {
            return css`
            color: var(--Color-primary);
            `
        }
    }}
`