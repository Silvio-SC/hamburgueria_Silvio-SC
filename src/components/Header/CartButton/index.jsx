import cart from "../../../assets/carrinho.svg"
import { StyledCart } from "./style"


export const CartButton = ({setModalIsOpen, cartList}) => {
    const listOfOrders = cartList.map((item) => item.amount)
    const numOfOrders = listOfOrders.reduce((acc, current) => acc + current, 0)
    return (
        <StyledCart onClick={() => setModalIsOpen(true)}>
            <img src={cart} alt="Icone de Carrinho" />
            <p>{numOfOrders}</p>
        </StyledCart>
)
}