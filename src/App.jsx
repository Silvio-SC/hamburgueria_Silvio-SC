import { useEffect, useState } from "react"
import { GlobalStyles } from "./components/styles/GlobalStyles"
import { Header } from "./components/Header"
import { ProductsSection } from "./components/ProductsList"
import { api } from "./services/api"
import { Modal } from "./components/Modal"

function App() {
  const localStorageCart = JSON.parse(localStorage.getItem("@cart"))

  const [productsList, setProductsList] = useState([])
  const [search, setSearch] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [cartList, setCartList] = useState(localStorageCart ? localStorageCart : [] )

  useEffect(() => {
    const getProductsList = async () => {
      const response = await api.get("/products")
      setProductsList(response.data)
    }
    
    getProductsList()
  }, [])

  const filteredList = productsList.filter((product) => {
    // return product ? product.name.toUpperCase().includes(search.toUpperCase()) : product.category.toUpperCase().includes(search.toUpperCase()) 
    if (product.name.toUpperCase().includes(search.toUpperCase())) {
      return product
    } else if (product.category.toUpperCase().includes(search.toUpperCase())) {
      return product
    }
  })

  return (
    <>
      <GlobalStyles />
      {modalIsOpen ? 
        <Modal setModalIsOpen={setModalIsOpen} 
        cartList={cartList}
        setCartList={setCartList}
        /> : null}
      <Header setSearch={setSearch} setModalIsOpen={setModalIsOpen} cartList={cartList} />
      <ProductsSection 
        productsList={filteredList} 
        setProductsList={setProductsList} 
        cartList={cartList}
        setCartList={setCartList}
        />
    </>
  )
}

export default App
