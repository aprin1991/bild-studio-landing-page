import { Request, URLS } from "api";
import { AxiosResponse } from "axios";
import Container from "components/container";
import PageTitle from "components/page-title";
import AnimatedPage from "components/page-transition/AnimatedPage";
import toast from "components/toast";
import map from "lodash/map";
import { useEffect, useState } from "react";
import { grid, horizontal } from "utilities/icons";
import Filters from "./components/Filters";
import { CategoriesType, ProductProp } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./components/ProductCard";
import WorksLoading from "./components/WorksLoading";
const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [display, setDisplay] = useState("grid");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<
    AxiosResponse | undefined | Array<ProductProp>
  >([]);
  const [filtered, setFiltered] = useState<any>([]);
  const [categories, setCategories] = useState<
    AxiosResponse | undefined | Array<CategoriesType>
  >([]);
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const responseProducts = await Request.get(URLS.Works);
        if (responseProducts) {
          setProducts(responseProducts);
          setFiltered(responseProducts);
        }
      } catch (err) {
        toast("error", "Error!");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    const getCategories = async () => {
      try {
        const response = await Request.get(URLS.Categories);
        setCategories(response);
      } catch (err) {
      } finally {
      }
    };
    getCategories();
    getProducts();
  }, []);

  return (
    <>
      <AnimatedPage>
        <div>
          <PageTitle title="Check Out What I can Do" />
          <div className="">
            <Container>
              <div className="flex justify-between items-center top-categories">
                <Filters
                  categories={categories}
                  products={products}
                  setFilterFunction={setFiltered}
                  selectedCategory={selectedCategory}
                  setActiveCategory={setSelectedCategory}
                />
                <div className="flexBox gap-2.5 display-types">
                  <span
                    onClick={() => setDisplay("grid")}
                    className={`${display === "grid" ? "active" : ""}`}
                  >
                    {grid}
                  </span>
                  <span
                    onClick={() => setDisplay("horizontal")}
                    className={`${display === "horizontal" ? "active" : ""}`}
                  >
                    {horizontal}
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <Container classes="works-container">
            {filtered.length > 0 ? (
              <motion.div
                layout
                className={`popular-movies grid ${
                  display === "grid"
                    ? "grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                } gap-4`}
              >
                {loading ? (
                  <WorksLoading />
                ) : (
                  <AnimatePresence>
                    {map(filtered, (product) => (
                      <ProductCard key={product?.id} product={product} />
                    ))}
                  </AnimatePresence>
                )}
              </motion.div>
            ) : (
              <div className="w-full h-64 text-secondary flexBox text-lg font-bold novecento">
                No Data
              </div>
            )}
          </Container>
        </div>
      </AnimatedPage>
    </>
  );
};

export default Work;
