import { Request, URLS } from "api";
import Container from "components/container";
import PageTitle from "components/page-title";
import AnimatedPage from "components/page-transition/AnimatedPage";
import toast from "components/toast";
import map from "lodash/map";
import { useEffect, useState } from "react";
import { grid, horizontal } from "utilities/icons";
import Filters from "./components/Filters";

import { motion } from "framer-motion";
import WorksLoading from "./components/WorksLoading";
import MetaTags from "react-meta-tags";
import InfiniteScrollProducts from "./components/InfiniteScrollProducts";
import filter from "lodash/filter";
const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [display, setDisplay] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any>([]);
  const [filtered, setFiltered] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [pageSize, setPageSize] = useState(9);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await Request.get(URLS.Categories);
        setCategories(response);
      } catch (err) {
      } finally {
      }
    };
    getCategories();
  }, []);
  useEffect(() => {
    if (selectedCategory === "all") {
      return;
    }
    const filtered = filter(products, (el) => {
      return el.categories.includes(selectedCategory);
    });
    setFiltered(filtered);
  }, [products]);
  const getProducts = async () => {
    try {
      const responseProducts: any = await Request.get(
        URLS.Works(currentPage, pageSize)
      );
      if (responseProducts) {
        if (responseProducts?.length > 0) {
          setProducts(products.concat(responseProducts));
          setFiltered(filtered.concat(responseProducts));
        } else {
          setHasNext(false);
        }
      }
    } catch (err) {
      toast("error", "Error!");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  const handleFetchData = () => {
    setCurrentPage((prev) => prev + 1);
  };
  useEffect(() => {
    getProducts();
  }, [currentPage]);
  return (
    <>
      <MetaTags>
        <title>Work</title>
        <meta name="description" content="Some work description." />
        <link rel="canonical" href={`/work`} />
        <meta id="og-title" property="og:title" content="work" />
        <meta itemProp="name" content={"Work Page"} />
        <meta property="og:description" content="Some work description." />
        <meta name="twitter:title" content={"Twitter."} />
        <meta name="twitter:description" content={"Some work description."} />
      </MetaTags>
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
          <Container classes="">
            {loading && (
              <motion.div
                layout
                className={`grid ${
                  display === "grid"
                    ? "grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                } gap-4`}
              >
                <WorksLoading />
              </motion.div>
            )}
            {filtered.length > 0 ? (
              <InfiniteScrollProducts
                products={filtered}
                loadMoreDate={handleFetchData}
                hasNext={hasNext}
                display={display}
              />
            ) : (
              <div className="w-full h-64 text-secondary flexBox text-lg font-bold novecento">
                No Results.
              </div>
            )}
          </Container>
        </div>
      </AnimatedPage>
    </>
  );
};

export default Work;
