import { BodySemiBold } from "../../styles/Typography"


export const TotalCard = ({cartList}) => {

    const totalPrice = () => {
        const priceList = cartList.map((product) => parseInt(product.price * product.amount))
        return priceList.reduce((acc, current) => acc + current, 0).toFixed(2)
    }

    return (
        <div className="totalPrice">
            <BodySemiBold>Total:</BodySemiBold>
            <BodySemiBold>R$ {totalPrice()}</BodySemiBold>
        </div>
    )
}