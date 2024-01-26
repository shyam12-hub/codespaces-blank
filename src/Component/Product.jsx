import { start } from "repl";

function Product() {
  const products = [
    {
      id: 0,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      "rating": 4.69,
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
  const rendingStars = (rating) =>{
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
  
}
  
  return <div>
    <div className="flex flex-wrap justify-evenly">
        {
            products.map(product =>(
                <div key={product.id} className="flex flex-col w-[20rem] min-h-[23rem] border-2 border-black"> 
                    <div className="">
                         <img src={product.images[2]} />
                    </div>
                   
                    <h1>{product.title}</h1>
                    <h1>{product.description}</h1>
                   <h1>$ {product.price} <span>{product.discountPercentage} %</span></h1>
                   <h2>{rendingStars(product.rating)}</h2>
                </div>
            ))
        }
    </div>
  </div>;
}
export default Product