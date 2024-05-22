"use client"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store"
import RemoveFromCart from "./RemoveFromCart"
const AddToCart = ({product}:any) => {

  const [cart,addToCart]=useCartStore((state)=>[state.cart,state.addToCart])

  const howManyInCart=cart.filter((item)=>item.title===product.title).length

const handleAdd=()=>{
  addToCart(product)
}

  if(howManyInCart>0){
    return(
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product}/>

<span>{howManyInCart}</span>
<Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>+</Button>
      </div>
    )
  }

  return (
    <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>Add to Cart</Button>
  )
}

export default AddToCart