import CardWrapper from "../card-wrapper/CardWrapper"



function Home() {
  return (
    <div className="flex flex-col gap-4 ">
        <h3 className="w-full bg-blue-500 text-white text-center py-3">My Web Shop</h3>
        <p className="font-bold text-xl px-4">Product List</p>
        <CardWrapper/>
    </div>
  )
}

export default Home