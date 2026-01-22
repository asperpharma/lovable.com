import Link from "next/link";
import { getProducts } from "@/lib/shopify-client";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-xl text-gray-600">Powered by Lovable & Shopify</p>
        </header>

        <nav className="mb-8">
          <Link href="/products" className="text-blue-600 hover:underline mr-4">
            All Products
          </Link>
          <Link href="/cart" className="text-blue-600 hover:underline">
            Cart
          </Link>
        </nav>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.slice(0, 8).map((product: any) => (
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
        </section>
      </div>
    </main>
  );
}
