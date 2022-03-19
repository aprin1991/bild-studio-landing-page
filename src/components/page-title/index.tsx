import { IProps } from "./types";
import Container from "components/container";
import React from "react";

const PageTitle: React.FC<IProps> = ({ title }) => {
  return (
    <div className="bg-green">
      <Container>
        <h1 className="py-7 uppercase text-white text-2xl font-bold novecento">
          {title}
        </h1>
      </Container>
    </div>
  );
};

export default PageTitle;
