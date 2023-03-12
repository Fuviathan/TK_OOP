import Header from "../components/HomePage/Header/Header";
import ProductList from "../components/ProductList/ProductList";

export default function newArrivals() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <ProductList />
      </div>
    </>
  );
}
