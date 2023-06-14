import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.3);

    .modalBox {
        position: relative;
        width: 100%;
        max-width: 500px;
        max-height: 500px;
        margin: 0 2rem;
        background-color: #fff;
        border-radius: 5px;

        header {
            background-color: var(--Color-primary);
            padding: 1.25rem;

            display: flex;
            justify-content: space-between;

            border-radius: 5px 5px 0 0;

            > h2 {
                color: var(--Color-gray-000);
            }

            > button {
                color: rgba(255,255,255,0.5);
                font-size: 1.25rem;

                &:hover {
                    color: rgba(255,255,255);
                }
            }
        }

        > div {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            padding: 2rem;

        }

        .modalBox__products {
            overflow-y: auto;
            max-height: 220px;
        }

    }

    .totalPrice {
        display: flex;
        justify-content: space-between;

        border-top: 2px solid var(--Color-gray-100);
        padding: 1rem 0;

        > p:nth-child(2) {
            color: var(--Color-gray-300);
        }
    }
`
