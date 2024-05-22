"use client";

type Props = {
  searchParams: {
    q: string;
  };
};
import { useState, useEffect } from "react";
import Product from "@/components/Product";
import { fetchOnCategory } from "@/lib/services";
const SearchPage = ({ searchParams: { q } }: Props) => {
  //Fetch Data
  const [info, setinfo] = useState([]);
  useEffect(() => {
    async function fetchCat() {
      const data = await fetchOnCategory(q);
      // console.log(data);
      setinfo(data);
    }

    fetchCat();
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {info &&
          info.map((item, index) => {
           return <li key={index}>
              <Product product={item} />
            </li>;
          })}
      </ul>
    </div>
  );
};

export default SearchPage;
