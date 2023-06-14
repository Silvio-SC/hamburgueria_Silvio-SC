import { NotFound } from "../NotFound"
import { ProductCard } from "./ProductCard"
import { StyledProductSection } from "./style"


export const ProductsSection = ({productsList, cartList, setCartList}) => {

    return (
        <StyledProductSection>
            {productsList.length === 0 ? <NotFound /> 
                
            :productsList.map((product) => 
                <ProductCard 
                    key={product.id}
                    product={product}
                    setCartList={setCartList}
                    cartList={cartList}
                    />)}
        </StyledProductSection>
    )
}