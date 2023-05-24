import CardDetails from "@/components/cardDetails";
import React from "react";
export async function getProduct(id) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });
  return res.json();
}
export async function generateMetadata({params}){
  const product=await getProduct(params.id)
  return{
    title:product.title,
    description:product.description,
    thumbnail:product.images[0],
    metadataBase: new URL('https://findtopia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title:product.title,
    description:product.description,
    thumbnail:product.images[0]
  },
  }
}

export default async function page({ params }) {
  const product = await getProduct(params.id);
  return (
    <main className="my-10 flex justify-center">
      {
        <CardDetails
          image={product.images[0]}
          description={product.description}
          title={product.title}
        />
      }
    </main>
  );
}
