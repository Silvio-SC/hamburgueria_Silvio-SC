import { StyledHeader } from "./style" 
import { SearhInput } from "./InputSearch"
import { CartButton } from "./CartButton"

import logo from "../../assets/logo.svg"

export const Header = ({setSearch, setModalIsOpen, cartList}) => {
    return (
        <StyledHeader> 
            <div className="car-logo">
                <img src={logo} alt="logo" />
                <CartButton setModalIsOpen={setModalIsOpen}  cartList={cartList} />
            </div>
            <SearhInput setSearch={setSearch} />
        </StyledHeader>
    )
}