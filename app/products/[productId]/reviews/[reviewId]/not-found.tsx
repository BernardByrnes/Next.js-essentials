"use client"
import { usePathname } from "next/navigation";

export default function NotFound(){
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h2>REVIEW {reviewId} Not Found for product {productId}</h2>
      <h2>Could not find requested resource</h2>
    </div>
  );
}