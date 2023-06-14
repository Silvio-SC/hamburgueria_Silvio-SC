import { BodySemiBold, Caption, Heading3 } from "../../styles/Typography"
import { StyledProductCard } from "./style"


export const ProductCard = ({product, setCartList, cartList}) => {
    
    let list = []
    let isRepeat = false
    
    const updateCart = () => {
        list = cartList.map(elem => {
            if(elem.id === product.id) {
                let num = elem.amount + 1
                isRepeat = true
                return {...product, amount: num}
            } else {
                return elem
            }
        });
    }


    const addToCart = () => {

        let updatedList = []
        updateCart()

        if(cartList.length === 0) {
            updatedList = [...cartList, {...product, amount:1}]
        } else if (isRepeat) {
            updatedList = list
        } else {
            updatedList = [...cartList, {...product, amount: 1}]
        }
        
        setCartList(updatedList)
        localStorage.setItem("@cart", JSON.stringify(updatedList))
        isRepeat = false
    }

    return (
        <StyledProductCard>
            <div className="product-Card__img">
                <img src={product.img} alt="" />
            </div>
            <div>
                <Heading3 size={18}>{product.name}</Heading3>
                <Caption size={12}>{product.category}</Caption>
                <BodySemiBold color={"green"}>R$ {product.price.toFixed(2)}</BodySemiBold>
                <button onClick={addToCart}>Adicionar</button>
            </div>
        </StyledProductCard>
    )
}