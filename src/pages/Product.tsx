import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonCard from "../pages/SkeletonId.tsx";
import NotFound from "./NotFound.tsx";

const fetchProductById = async (id: string) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);
  return res.data;
};

const ProductId = () => {
  const { id } = useParams();

  // 🔥 NOT FOUND (invalid id bo‘lsa)
  if (!id || isNaN(Number(id))) {
    return <NotFound />;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  if (isLoading)
    return Array.from({ length: 1 }).map((_, i) => (
      <SkeletonCard key={i} />
    ));

  if (error) return <NotFound />;

  const discount = data.price * (data.discountPercentage / 100);
  const finalPrice = (data.price - discount).toFixed(2);

  return (
    <div className="productId">
      <div className="container">
        <div className="productId_box">
          <img className="productId_box_img" src={data.thumbnail} alt="" />

          <div className="productId_mini_box">
            <h1 className="productId_mini_box_title">{data.title}</h1>

            <div className="productId_mini_box_description_box">
              <h3 className="description_title">Description</h3>
              <p className="description_text">{data.description}</p>
            </div>

            <h2 className="productId_mini_box_category">
              Category: <span>{data.category}</span>
            </h2>

            <h3 className="productId_mini_box_price">
              Price: <span>${data.price}</span>{" "}
              <span className="finalPrice">${finalPrice}</span>
            </h3>

            <h3 className="productId_mini_box_rating">
              Rating: <span>⭐️{data.rating}</span>
            </h3>

            <h3 className="productId_mini_box_stock">
              Stock: <span>{data.stock} pieces</span>
            </h3>

            <div className="productId_btn_box">
              <Link to="/" className="productId_btn_box_btn">
                Back...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductId;