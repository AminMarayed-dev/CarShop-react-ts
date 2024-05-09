import CardItem from "../card/Card"


function CardWrapper() {
  return (
    <div className="flex gap-4 px-4">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
    </div>
  )
}

export default CardWrapper