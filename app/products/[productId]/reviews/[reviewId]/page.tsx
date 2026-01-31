import { notFound } from "next/navigation";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if(parseInt(reviewId > 1000)){
    return notFound(); 
  }
  return (
    <h1>
      {" "}
      Review {reviewId} Product ID: {productId}
    </h1>
  );
};

export default ProductReview;
