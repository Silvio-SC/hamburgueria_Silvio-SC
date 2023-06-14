import { Heading3, BodySemiBold } from "../../styles/Typography"
import { StyledCartCard } from "./style"

import trash from "../../../assets/lixeira.svg"


export const CartCard = ({img, name, id, price, amount, setCartList, cartList}) => {

    const TotalPrice = price * amount

    const removeFromCart = () => {
        let newList = []
        if (amount > 1) {
            newList = cartList.map((elem) => {
                if(id === elem.id) {
                    const newAmount = amount -1
                    return {...elem, amount: newAmount}
                } else {
                    return elem
                }
            })

            setCartList(newList)
            localStorage.setItem("@cart", JSON.stringify(newList))
        } else {
            newList = cartList.filter((product) => product.id !== id)
            setCartList(newList)
            localStorage.setItem("@cart", JSON.stringify(newList))
        }
    }

    return (
        <StyledCartCard>
            <div>
                <img src={img} alt="" />
                <p>{amount}</p>
            </div> 
            <div>
                <Heading3 size={13} >{name}</Heading3>
                <BodySemiBold color={"green"}>R$ {TotalPrice.toFixed(2)}</BodySemiBold>
            </div>
            <button onClick={removeFromCart}><img src={trash} alt="icone da lixeira" /></button>
        </StyledCartCard>
    )
}