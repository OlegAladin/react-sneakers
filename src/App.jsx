import { useState } from "react";
import Main from "./components/main/Main";
import Cart from "./components/cart/Cart";

function App() {
  const catalog = [
    { id: 0, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413191/item-1_zlkotn.jpg' },
    { id: 1, name: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-2_fi9f5a.jpg' },
    { id: 2, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-3_imjsaa.jpg' },
    { id: 3, name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413191/item-4_ogrxgw.jpg' },
    { id: 4, name: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-5_arkuuw.jpg' },
    { id: 5, name: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413191/item-6_mpjs7n.jpg' },
    { id: 6, name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-7_w0od8k.jpg' },
    { id: 7, name: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-8_mjztq5.jpg' },
    { id: 8, name: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413192/item-9_nayzov.jpg' },
    { id: 9, name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 11299, imgUrl: 'https://res.cloudinary.com/drsvhzbsp/image/upload/v1667413191/item-10_asxwz1.jpg' }
  ]

  const [sneakersCatalog, setSneakersCatalog] = useState(catalog);
  const [favoriteList, setFavoriteList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [purchaseList, setPurchasedList] = useState([]);

  const changeFavoriteList = (id) => {
    if (!favoriteList.includes(id)) {
      setFavoriteList([...favoriteList, id])
    } else {
      setFavoriteList(favoriteList.filter(element => element !== id))
    };
  };

  const changeCartList = (id, price) => {
    if (!cartList.includes(id)) {
      setCartList([...cartList, id])
      setTotalPrice(totalPrice + price)
    } else {
      setCartList(cartList.filter(element => element !== id))
      setTotalPrice(totalPrice - price)
    };
  };

  const addToPurchaseList = () => {
    setPurchasedList([...new Set(purchaseList.concat(cartList))]);
    setCartList([]);
    setTotalPrice(0)
  };

  return (
    <div className="app">
      <Main
        sneakersCatalog={sneakersCatalog}
        setSneakersCatalog={setSneakersCatalog} //сделать загрузку
        favoriteList={favoriteList}
        changeFavoriteList={changeFavoriteList}
        cartList={cartList}
        purchaseList={purchaseList}
        changeCartList={changeCartList}
        totalPrice={totalPrice}
        setCartOpen={setCartOpen}
      />
      <Cart
        sneakersCatalog={sneakersCatalog}
        cartList={cartList}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        totalPrice={totalPrice}
        changeCartList={changeCartList}
        addToPurchaseList={addToPurchaseList}
      />
    </div>
  );
}

export default App;
