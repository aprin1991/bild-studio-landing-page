import React from "react";
import { ProductProp } from "../types";
import { motion } from "framer-motion";
type IProps = {
  product: ProductProp;
};
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      transition={{ duration: 0.5 }}
    >
      <img
        className="w-full h-56 object-cover"
        src={product.img}
        alt={product.title}
        loading="lazy"
      />
    </motion.div>
  );
};

export default ProductCard;
