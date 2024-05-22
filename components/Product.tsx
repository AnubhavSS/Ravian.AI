import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

const Product = ({ product }:any) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query:  {q:JSON.stringify(product)},
      }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
     <Image src={product.image} alt={product.title} width={200} height={200} className="mx-auto h-[250px]"/>
     <p className="text-xl font-bold">
        {'$'}
        {product?.price}
     </p>
     <p className="font-light">{product?.title}</p>
     <p className="font-light text-xs">{product?.rating?.rate}  ({product?.rating.count})</p>
    </Link>
  );
};

export default Product;
