import Container from "components/container";
import React from "react";
import CustomSlider from "./CustomSlider";

function ProjectsSlider() {
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
      <div>
        <CustomSlider />
      </div>
    </div>
  );
}

export default ProjectsSlider;
