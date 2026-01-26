"use client";

import { useState } from "react";
import { CREATE_CHECKOUT_QUERY, shopifyRequest } from "@/lib/shopify";

interface AddToCartButtonProps {
  productId: string;
  variantId?: string;
}

export default function AddToCartButton(
  { productId, variantId }: AddToCartButtonProps,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = async () => {
    if (!variantId) {
      setError("Please select a variant");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await shopifyRequest(CREATE_CHECKOUT_QUERY, {
        input: {
          lineItems: [
            {
              variantId: variantId,
              quantity: 1,
            },
          ],
        },
      });

      const checkout = response.data?.checkoutCreate?.checkout;
      if (checkout?.webUrl) {
        // Redirect to Shopify checkout
        window.location.href = checkout.webUrl;
      } else {
        const errors = response.data?.checkoutCreate?.checkoutUserErrors;
        if (errors && errors.length > 0) {
          setError(errors[0].message);
        } else {
          setError("Failed to create checkout");
        }
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        disabled={loading || !variantId}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Adding..." : "Add to Cart"}
      </button>
      {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
    </div>
  );
}
