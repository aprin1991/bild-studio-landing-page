import React from "react";
import { ProductProp } from "../types";
import { motion } from "framer-motion";
import { linkIcon } from "utilities/icons";
import toast from "components/toast";
type IProps = {
  product: ProductProp;
};
const ProductCard: React.FC<IProps> = ({ product }) => {
  const copyLink = (title) => {
    navigator.clipboard.writeText(title);
    toast("success", "Successfully paste the link to the system clipboard");
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      transition={{ duration: 0.5 }}
      className="product-card relative"
    >
      <img
        className="w-full h-32 md:h-56 object-cover"
        src={product.img}
        alt={product.title}
        loading="lazy"
      />
      <div className="copy-link" onClick={() => copyLink(product.img)}>
        {linkIcon}
      </div>
    </motion.div>
  );
};

export default ProductCard;
