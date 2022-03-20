import { AnimatePresence } from "framer-motion";
import map from "lodash/map";
import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfinitScrollProps } from "../types";
import ProductCard from "./ProductCard";

const InfiniteScrollProducts: FC<InfinitScrollProps> = ({
  products,
  loadMoreDate,
  hasNext,
  display,
}) => {
  const fetchData = () => {
    loadMoreDate();
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchData}
        hasMore={hasNext}
        className={`grid works-container ${
          display === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        } gap-4`}
        loader={products.length > 8 && <h4>Loading...</h4>}
      >
        <AnimatePresence>
          {map(products, (product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </AnimatePresence>
      </InfiniteScroll>
      {!hasNext && (
        <div className="col-span-3">
          <p className="flexBox h-32 text-secondary font-medium text-base">
            <b>Yay! You have seen it all</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollProducts;
