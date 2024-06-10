import Product from "./Product.jsx";

function AllProducts() {
    return (
        <div>
            <Product title="Laptop" price={50000} Items={["Feature1", "Feature2", "Feature3"]} />
            <Product title="Mobile" price={35000} Items={["FeatureA", "FeatureB", "FeatureC"]} />
        </div>
    );
}

export default AllProducts;
