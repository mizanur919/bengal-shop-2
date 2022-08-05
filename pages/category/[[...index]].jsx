import CategoryPage from "../../components/subPages/Category";

const Category = ({ products }) => {
  return <CategoryPage products={products} />;
};

export default Category;

export async function getServerSideProps() {
  const response = await fetch(
    "https://shielded-wave-70948.herokuapp.com/products"
  );
  const products = await response.json();
  return {
    props: { products },
  };
}
