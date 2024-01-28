import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Product() {
 const products = useSelector(state => state.productReducer.products)
 if(!products || !products.products){
  return
 }
 let randomProducts= []

for(let i = 0 ; i < 15; i++){
  const randomIndex = Math.floor(Math.random() * products.products.length)
  randomProducts = [...randomProducts, products.products[randomIndex]]
}


  const rendingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐</span>);
    }

    // Render half star if needed
    if (halfStar) {
      stars.push(<span key="half">⭐️</span>);
    }

    // Render empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>☆</span>);
    }

    return stars;
  };


  return (
    <div>
      <div className="min-h-screen grid justify-center items-center products">
        <section className="py-12 px-6">
          <div className="grid grid-cols-1   gap-[3rem] justify-evenly sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {randomProducts.map((product) => (
              <NavLink to= {`/product/${product.id}`} key={product.id} className="p-4 shadow-xl rounded-lg h-11/14 ">
                <img
                  alt="Product image"
                  className="w-full h-48 object-cover rounded-md"
                  height="200"
                  src={product.thumbnail}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div>
                  <h3 className="text-lg font-semibold text-center">{product.title}</h3>
                 <h3 className="text=lg">{product.description}</h3>
                  <p className="text-gray-500 text-center font-bold text-xl">
                    ${product.price}
                    <span className="text-red-600">
                      {" "}
                      {product.discountPercentage} %
                    </span>
                  </p>
                  <p className="text-center text-2xl text-yellow-600">{rendingStars(product.rating)}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Product;
