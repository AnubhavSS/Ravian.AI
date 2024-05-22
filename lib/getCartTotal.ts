export function getCartTotal(products:any){
const total=products.reduce((acc:any,curr:any)=>{
    return acc+curr.price
},0)

return `$ ${total.toFixed(2)}`
}