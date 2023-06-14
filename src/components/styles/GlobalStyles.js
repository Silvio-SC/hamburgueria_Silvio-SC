import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --Color-primary: #27AE60;
        --Color-primary-50: #93D7AF;
        --Color-secondary: #EB5757;
        --Color-gray-600: #333333;
        --Color-gray-300: #828282;
        --Color-gray-100: #E0E0E0;
        --Color-gray-000: #F5F5F5;
        --Color-negative: #E60000
        --Color-warning: #FFCD07;
        --Color-sucess: #168821;
        --Color-information: #155BCB;
        

        --font: "Inter", sans-serif;
    }

    body {
        font-family: var(--font);
        line-height: 150%;
    }

    * {
        margin: 0;
        padding: 0;
        font: inherit;
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }
    input, button{
        outline: none;
        font-family: var(--font);
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--Color-gray-100);
        padding: 2px;
        border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--Color-primary);
        border-radius: 2px;
    }
`
