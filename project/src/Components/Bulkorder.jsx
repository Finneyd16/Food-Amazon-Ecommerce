import P18 from "../assets/P18.png";
import P19 from "../assets/P19.png";
import P20 from "../assets/P20.png";
import P21 from "../assets/P21.png";
import { FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: "1",
    title: "Organic Almond Delight",
    description:
      "Crunchy almonds coated with a touch of organic honey, perfect for a healthy snack.",
    image: P18,
    button: "ORDER NOW ",
  },
  {
    id: "2",
    title: "Berry Bliss Bites",
    description:
      "A delightful mix of organic berries and nuts, offering a burst of flavor in every bite.",
    image: P19,
    button: "ORDER NOW ",
  },
  {
    id: "3",
    title: "Coconut Crunchies",
    description:
      "Light and crispy coconut flakes, naturally sweet and utterly delicious taste.",
    image: P20,
    button: "ORDER NOW ",
  },
  {
    id: "4",
    category: "Others",
    content: "Milk, Tools, Spice, etc.",
    image: P21,
    button: "See Others ",
  },
];



const OrdersGrid = () => {

    return (
      <div className="my-5 container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className=" py-3 col-sm-12 col-md-6 col-lg-3 ">
              <div
                className={`card d-flex flex-column ${
                  product.category === "Others" ? "others-card" : "main-card"
                }`}
                style={{ width: "16rem" }}
              >
                <img
                  src={product.image}
                  className={`card-img-top ${
                    product.category === "Others" ? "p21" : "other-img"
                  }`}
                  alt=""
                />
                <div
                  className={`card-body d-flex flex-column align-items-center ${
                    product.category === "Others" ? "others-card-body" : ""
                  }`}
                >
                  <h6 style={{ fontWeight: "900" }}>{product.title}</h6>
                  <p style={{ width: "75%", textAlign: "center" }}>
                    {product.description}
                  </p>
                  <p>{product.category}</p>
                  <p style={{ marginTop: "-10px" }}>{product.content}</p>
                  <button>
                    {product.button}
                    <FaChevronRight  size={`${product.category === "Others" ? 14 : 10}`} style={{ marginLeft: "5px" }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default OrdersGrid
