import Link from "next/link";
import { getProducts } from "@/lib/shopify-client";

export default async function ProductsPage() {
  const products = await getProducts(50);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <Link
            href="/"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.handle}`}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              {product.images?.[0] && (
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-lg font-bold">
                {product.priceRange?.minVariantPrice?.amount}{" "}
                {product.priceRange?.minVariantPrice?.currencyCode}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
