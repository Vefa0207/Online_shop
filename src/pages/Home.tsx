import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import SkeletonCard from "../pages/Skeleton.tsx";
import NotFound from "./NotFound.tsx";
import NavMobile from "../Components/NavMobile.tsx";
import Sort from "./Sort";
import Paginate from "./Paginate";

interface IProduct {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  thumbnail: string;
  discountPercentage: number;
}

const fetchProducts = async () => {
  const res = await axios.get("https://dummyjson.com/products?limit=200");
  return res.data.products;
};

const Home = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortKey, setSortKey] = useState("default");

  const [currentItems, setCurrentItems] = useState<IProduct[]>([]);
  const itemsPerPage = 12;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    const filtered = products.filter((product: IProduct) =>
      product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const sorted = [...filtered];

    if (sortKey === "name")
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortKey === "price") return sorted.sort((a, b) => a.price - b.price);
    if (sortKey === "stock") return sorted.sort((a, b) => b.stock - a.stock);

    return sorted;
  }, [products, debouncedSearch, sortKey]);

  useEffect(() => {
    setCurrentItems(sortedProducts.slice(0, itemsPerPage));
  }, [sortedProducts]);

  if (error) return <NotFound />;

  return (
    <div className="home">
      <NavMobile/>
      <div className="container">
        <div className="home_top_box">  
          <input
            type="text"
            className="home_top_box_search"
            placeholder="Search products..."
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
            <Sort sortKey={sortKey} setSortKey={setSortKey} />

        </div>

        <div className="home_buttom_box">
          <div className="products_list">
            {isLoading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : currentItems.map((product) => {
                  const discount =
                    product.price * (product.discountPercentage / 100);
                  const finalPrice = (product.price - discount).toFixed(2);
                  return (
                    <Link
                      to={`/${product.id}`}
                      className="product_card"
                      key={product.id}
                    >
                      <img
                        className="product_card_img"
                        src={product.thumbnail}
                        alt=""
                      />
                      <h3 className="product_card_title">{product.title}</h3>
                      <h3 className="product_card_category">
                        Category: <span>{product.category}</span>
                      </h3>
                      <h3 className="product_card_stock">
                        Stock: <span>{product.stock} pieces</span>
                      </h3>
                      <h3 className="product_card_price">
                        Price: <span>${product.price}</span>{" "}
                        <span className="finalPrice">${finalPrice}</span>
                      </h3>
                    </Link>
                  );
                })}
          </div>

           
            <Paginate
              itemsPerPage={itemsPerPage}
              totalItems={sortedProducts.length}
              items={sortedProducts}
              setCurrentItems={setCurrentItems}
            />
        </div>
      </div>
    </div>
  );
};

export default Home;