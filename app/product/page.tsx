import AddToCart from "@/components/AddToCart";
import Image from "next/image";

type Props = {
  searchParams: {
    q: string;
  };
};

const ProductPage = ({ searchParams: { q } }: Props) => {
  let parsedData;
  try {
    parsedData = JSON.parse(q);
    // console.log(parsedData);
  } catch (error) {
    console.error("Invalid JSON string:", error);
    parsedData = "Invalid JSON";
  }

  return (
    <div className="p-4 lg:p-10 flex flex-col  w-full">
      <div className="flex justify-center items-center mb-5">
        <Image
          src={parsedData?.image}
          alt={parsedData?.title}
          width={90}
          height={90}
          className="border rounded-sm w-[90%]"
        />
      </div>
      <div className=" flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{parsedData?.title}</h1>

        <p className="py-5">{parsedData?.description}</p>
        {parsedData?.rating && (
          <p className="text-yellow-400 text-sm">
            {parsedData?.rating?.rate} *
            <span className="text-gray-400 ml-2">
              ({parsedData?.rating?.count} reviews)
            </span>
          </p>
        )}

        <p className="text-2xl font-bold mt-2">$ {parsedData?.price}</p>

        {/* Add to Cart */}
        <AddToCart product={parsedData}/>
        <hr />
      </div>{" "}
    </div>
  );
};

export default ProductPage;
