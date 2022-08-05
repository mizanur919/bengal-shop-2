import Head from "next/head";
import HomePage from "../components/subPages/Home";
export default function Home({ products }) {
  return <HomePage products={products} />;
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://shielded-wave-70948.herokuapp.com/products"
  );
  const products = await response.json();
  return {
    props: { products },
  };
}
