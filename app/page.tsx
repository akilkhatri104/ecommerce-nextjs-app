import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/lib/mockData";
import Image from "next/image";

export const metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <div className="text-primary bg-background min-h-screen p-4">
      <main >
        <div className="mx-auto">
          <div className="flex md:flex-row flex-wrap flex-col  items-center justify-center">
          {
            mockProducts.map(product => (
              <div key={product.id} className="p-4 border rounded-lg shadow-md">
                <ProductCard product={product} />
              </div>
            ))
          }
        </div>
        </div>

      </main>
    </div>
  );
}
