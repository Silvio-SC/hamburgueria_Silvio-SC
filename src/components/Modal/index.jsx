import { useEffect, useRef } from "react"
import { StyledButtonGray } from "../Button/Button"
import { NotFound } from "../NotFound"
import { Heading2 } from "../styles/Typography"
import { CartCard } from "./CartCard"
import { TotalCard } from "./TotalCart"
import { StyledModal } from "./style"


export const Modal = ({setModalIsOpen, cartList, setCartList}) => {

    const removeAllCart = () => {
        setCartList([])
        localStorage.setItem("@cart", JSON.stringify([]))
    }

    const modalRef = useRef(null)

    useEffect(() => { 
        const hendleOutClick = (event) => {
            if(!modalRef.current?.contains(event.target)){
                setModalIsOpen(false)
            }
        }

        window.addEventListener("mousedown", hendleOutClick)

        return () => {
            window.removeEventListener("mousedown", hendleOutClick)
        }

    }, [])

    useEffect(() => { 
        const hendleKeyEscape = (event) => {
            if(event.key === "Escape"){
                setModalIsOpen(false)
            }
        }

        window.addEventListener("keydown", hendleKeyEscape)

        return () => {
            window.removeEventListener("keydown", hendleKeyEscape)
        }

    }, [])


    return (
        <StyledModal>
            <div className="modalBox" ref={modalRef}>
                <header>
                    <Heading2 size={18} >Carrinho de compras</Heading2> 
                    <button onClick={() => setModalIsOpen(false)}>x</button>
                </header>
                <div>
                    <div className="modalBox__products">
                        {cartList.length === 0 ? <NotFound /> 
                        :cartList.map((product) => 
                            <CartCard 
                                {...product} 
                                setCartList={setCartList} 
                                cartList={cartList}    
                            />) 
                        }   
                    </div>
                    <TotalCard cartList={cartList} />
                    <StyledButtonGray size={"default"} onClick={removeAllCart} >Remover todos</StyledButtonGray>
                </div>
            </div>
        </StyledModal>
    )
}