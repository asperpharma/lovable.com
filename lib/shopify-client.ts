import {
  GET_PRODUCT_BY_HANDLE_QUERY,
  GET_PRODUCTS_QUERY,
  shopifyRequest,
} from "./shopify";

export async function getProducts(first: number = 20) {
  try {
    const response = await shopifyClient.request(GET_PRODUCTS_QUERY, {
      variables: { first },
    });

    return response.data?.products?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      description: edge.node.description,
      handle: edge.node.handle,
      priceRange: edge.node.priceRange,
      images: edge.node.images?.edges?.map((img: any) => ({
        url: img.node.url,
        altText: img.node.altText,
      })),
    })) || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductByHandle(handle: string) {
  try {
    const response = await shopifyRequest(GET_PRODUCT_BY_HANDLE_QUERY, {
      handle,
    });

    const product = response.data?.product;
    if (!product) return null;

    return {
      id: product.id,
      title: product.title,
      description: product.description,
      handle: product.handle,
      priceRange: product.priceRange,
      images: product.images?.edges?.map((img: any) => ({
        url: img.node.url,
        altText: img.node.altText,
      })),
      variants: product.variants?.edges?.map((variant: any) => ({
        id: variant.node.id,
        title: variant.node.title,
        price: variant.node.price,
        availableForSale: variant.node.availableForSale,
      })),
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
