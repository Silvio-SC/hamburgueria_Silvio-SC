import { useState } from "react" 

import { StyledInput } from "./style"
import searhIcon from "../../../assets/lupa.svg"
import { StyledButtonGreen } from "../../Button/Button"


export const SearhInput = ({setSearch}) => {

    const [inputSearch, setInputSearch] = useState("")

    const hendleSubmit = (e) => {
        e.preventDefault();
        setSearch(inputSearch)
    }

    return (
        <StyledInput onSubmit={hendleSubmit}>
            <input type="searh" placeholder="Digitar Pesquisa" onChange={(e) => setInputSearch(e.target.value)} />
            <StyledButtonGreen><img src={searhIcon} alt="" /></StyledButtonGreen>
        </StyledInput>
)
}