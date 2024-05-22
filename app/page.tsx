"use client";
import { useEffect, useState } from "react";
import GridOption from "@/components/GridOption";
import { fetchCategories } from "@/lib/services";
export default function Home() {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    async function fetchCat() {
      const data = await fetchCategories();
      setinfo(data);
    }

    fetchCat();
  }, []);

  return (
    <main className="flex-1">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-6 m-6">
        {info && (
          <>
            <GridOption
              title={`Shop for ${info[0]} `}
              image=""
              className="bg-pink-200 h-full md:h-32"
            />
            <GridOption
              title={`Shop for ${info[1]} `}
              image=""
              className="bg-blue-100 col-span-2 row-span-2"
            />
            <GridOption
         title={`Shop for ${info[2]} `}
              image=""
              className="bg-pink-200 row-span-2"
            />
            <GridOption
           title={`Shop for ${info[3]} `}
              image=""
              className="bg-yellow-100 h-64"
            />
            <GridOption
              title={`Shop for ${info[1]} `}
              image=""
              className="bg-green-100 h-64 col-span-2"
            />
            <GridOption
      title={`Shop for ${info[0]} `}
              image=""
              className="bg-red-100 row-span-2 col-span-2"
            />
            <GridOption
              title={`Shop for ${info[2]} `}
              image=""
              className="bg-orange-100 h-64"
            />
            <GridOption
             title={`Shop for ${info[3]} `}
              image=""
              className="bg-blue-100 h-64"
            />
            <GridOption
              title="Sweet gifts for less"
              image=""
              className="bg-blue-100 h-64 col-span-full"
            />
          </>
        )}
      </div>
    </main>
  );
}
