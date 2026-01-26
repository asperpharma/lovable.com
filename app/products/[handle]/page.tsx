import Link from "next/link";
import { getProductByHandle } from "@/lib/shopify-client";
import ProductVariantSelector from "@/components/ProductVariantSelector";

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/products"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {product.images?.[0] && (
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.title}
                className="w-full rounded-lg"
              />
            )}
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-3xl font-bold mb-6">
              {product.priceRange?.minVariantPrice?.amount}{" "}
              {product.priceRange?.minVariantPrice?.currencyCode}
            </p>

            {product.description && (
              <div
                className="mb-6 text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            <ProductVariantSelector
              productId={product.id}
              variants={product.variants || []}
              defaultVariantId={product.variants?.[0]?.id}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
