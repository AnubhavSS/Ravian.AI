export function groupBySKU(product:any){
    return product.reduce((acc:any,curr:any)=>{
       const sku=curr.title
        if(!acc[sku]){
            acc[sku]=[]
        }
        acc[sku].push(curr)
        return acc;
    },{})
}