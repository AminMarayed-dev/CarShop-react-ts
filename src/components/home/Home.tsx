import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL, END_POINTS } from "../../config"
import CardWrapper from "../card-wrapper/CardWrapper";




function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    async function getProducts() {
      try {
        const {data} = await axios.get(`${BASE_URL}/${END_POINTS}`);
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProducts()
  },[])
  return (
    <div className="flex flex-col gap-4 ">
        <h3 className="w-full bg-blue-500 text-white text-center py-3">My Web Shop</h3>
        <p className="font-bold text-xl px-4">Product List</p>
        <CardWrapper products={products}/>
    </div>
  )
}

export default Home