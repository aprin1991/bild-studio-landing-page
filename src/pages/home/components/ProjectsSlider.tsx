import { Request, URLS } from "api";
import Container from "components/container";
import toast from "components/toast";
import React, { useEffect, useState } from "react";
import CustomSlider from "./CustomSlider";
import SliderLoading from "./SliderLoading";

function ProjectsSlider() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const response = await Request.get(URLS.Projects);
        setProducts(response);
      } catch (err) {
        toast("error", "Fetch Error! Try again later");
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);
  return (
    <div className="py-14">
      <Container classes="text-center mb-10">
        <h3 className="text-secondary text-xl mb-3">
          A Couple of Our Featured Projects
        </h3>
        <p className="text-secondary text-sm px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros.
        </p>
      </Container>
      {products?.length > 0 ? (
        <div>
          {loading ? <SliderLoading /> : <CustomSlider products={products} />}
        </div>
      ) : (
        <div className="flex justify-center items-center h-32 text-primary  text-lg">
          No Data
        </div>
      )}
    </div>
  );
}

export default ProjectsSlider;
