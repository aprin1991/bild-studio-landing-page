import { motion } from "framer-motion";
import { FC } from "react";
const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -100 },
};

type IProps = {
  html: string;
};
const ServiceTab: FC<IProps> = ({ html }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </motion.div>
  );
};

export default ServiceTab;
