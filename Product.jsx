import "./Product.css";

export default function Product({ title, price, Items }) {
    // This is the advance method..
       let isDiscount = price > 40000 ? "Discount of 10%" : <a href="#">Get Discount</a>;

    // easy and old Method...
    //     if (price > 40000) {
    //         return (
    //             <div className="Product">
    //                 <h3>{title}</h3>
    //                 <h5>Price: {price}</h5>
    //                 <p>Discount of 5%</p>
    //                 </div>
    //     );
    // }
    // else {
    //     return (
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price: {price}</h5>
    //             </div>
    // );
    // }

    // }

    // Passing Arrays to props:
    // let featuresArray = ["Oppo", "I-Phone", "Android"];

    // Passing Objects to props:
    // let Products = { Name: "KasHii", rolno: 51909, Dep: "ICIT" };

    // Rendering Arrays with the help of map() method...
    // let Lists = Items.map((item, index) => <li key={index}>{item}</li>);

    // Dynamic Components Styling..
    let styles = {backgroundColor: price > 40000 ? 'Pink' : ''};

    return (
        <div className="Product" style={styles}> 
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {/* <h5>Items: {featuresArray.join(" , ")}</h5>
            <h5>Product Name: {Products.Name}</h5>   */}
            <p>{isDiscount}</p>

            {/* We Can directly Call here.. */}
            {/* <ul>{ price > 40000 ? "Discount of %10" : "No Discount"}</ul> */}

            {/* Other method. */}
            {/* <ul>{Items.map((item, index) => <li key={index}>{item}</li>)}</ul> */}
        </div>
    );
}
