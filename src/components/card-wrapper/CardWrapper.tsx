// import CardItem from "../card/Card"

import { CardType } from "../../type";
import CardItem from "../card/Card";

function CardWrapper({ products }: { products: Array<CardType> }) {
  return (
    <div className="flex gap-4 px-4">
      {products.map((product) => (
        <CardItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          imageURL={product.imageURL}
        />
      ))}
    </div>
  );
}

export default CardWrapper;
