import { NavLink } from "react-router-dom";

function Product() {
  const products = [
    {
      id: 0,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 2,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 3,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 4,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 5,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
    {
      id: 6,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",

        "https://cdn.dummyjson.com/product-images/1/2.jpg",

        "https://cdn.dummyjson.com/product-images/1/3.jpg",

        "https://cdn.dummyjson.com/product-images/1/4.jpg",

        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
  ];
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
            {products.map((product) => (
              <NavLink to= {`/product/${product.id}`} key={product.id} className="p-4 shadow-xl rounded-lg h-11/14 ">
                <img
                  alt="Product image"
                  className="w-full h-48 object-cover rounded-md"
                  height="200"
                  src={product.images[2]}
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
