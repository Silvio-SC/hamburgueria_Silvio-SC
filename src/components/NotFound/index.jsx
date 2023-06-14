import notFoundImg from "../../assets/NotFound.png"
import { BodySemiBold } from "../styles/Typography"
import { StyledNotFound } from "./styles"

export const NotFound = () => {
    return (
        <StyledNotFound>
            <img src={notFoundImg} alt="Icone de lupa" />
            <BodySemiBold color={"green"}>Vazio</BodySemiBold>
        </StyledNotFound>
    )
}