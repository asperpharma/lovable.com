"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

interface Variant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
}

interface ProductVariantSelectorProps {
  productId: string;
  variants: Variant[];
  defaultVariantId?: string;
}

export default function ProductVariantSelector({
  productId,
  variants,
  defaultVariantId,
}: ProductVariantSelectorProps) {
  const [selectedVariantId, setSelectedVariantId] = useState(
    defaultVariantId || variants[0]?.id || "",
  );

  if (variants.length === 0) {
    return <AddToCartButton productId={productId} />;
  }

  const selectedVariant = variants.find((v) => v.id === selectedVariantId);

  return (
    <div>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Select Variant:</label>
        <select
          value={selectedVariantId}
          onChange={(e) => setSelectedVariantId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {variants.map((variant) => (
            <option key={variant.id} value={variant.id}>
              {variant.title} - {variant.price.amount}{" "}
              {variant.price.currencyCode}
              {!variant.availableForSale && " (Out of Stock)"}
            </option>
          ))}
        </select>
      </div>

      {selectedVariant && (
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Price: {selectedVariant.price.amount}{" "}
            {selectedVariant.price.currencyCode}
          </p>
        </div>
      )}

      <AddToCartButton
        productId={productId}
        variantId={selectedVariantId}
      />
    </div>
  );
}
