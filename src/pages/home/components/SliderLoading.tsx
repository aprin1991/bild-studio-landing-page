import { FC } from "react";
import map from "lodash/map";
const SliderLoading: FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        {map(new Array(5), (el, index) => {
          return (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 h-72 w-full" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center max-slider-desc w-full animate-pulse mx-auto mt-14">
        <span className="cursor-pointer slider-arrow"></span>
        <div className="text-center px-16 w-full max-w-lg">
          <h6 className="w-full h-2 bg-gray-300 mb-4" />
          <p className="w-full h-2 bg-gray-300" />
        </div>
        <span className="cursor-pointer slider-arrow"></span>
      </div>
    </>
  );
};

export default SliderLoading;
