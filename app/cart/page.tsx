import Link from "next/link";

export default function CartPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="border rounded-lg p-8 text-center">
          <p className="text-gray-600 mb-4">Your cart is empty</p>
          <Link
            href="/products"
            className="text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
