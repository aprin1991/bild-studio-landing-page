import Container from "components/container";
import React, { FC, useState } from "react";
import map from "lodash/map";
import {
  applicationIcon,
  cameraIcon,
  seoIcon,
  settingIcon,
} from "utilities/icons";
import ServiceTab from "./ServiceTab";
const tabs = [
  {
    id: 1,
    title: "Websites",
    icon: settingIcon,
  },
  {
    id: 2,
    title: "Photography",
    icon: cameraIcon,
  },
  {
    id: 3,
    title: "SEO",
    icon: seoIcon,
  },
  {
    id: 4,
    title: "Applications",
    icon: applicationIcon,
  },
];
const html1 =
  "<h6>Tab1</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tab1. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>";
const html2 =
  "<h6>Tab2</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tab2. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>";
const html3 =
  "<h6>Tab3</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tab3. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>";
const html4 =
  "<h6>Tab4</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit tab4. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li></ul>";
const Services: FC = () => {
  const [selectedTab, setSelectedTab] = useState("Websites");
  const handleChangeTab = (type: string) => {
    setSelectedTab(type);
  };

  return (
    <div>
      <Container classes="mb-5">
        <h4 className="uppercase text-secondary novecento text-2xl ">
          Services
        </h4>
      </Container>
      <div className="services-tab-container">
        <Container>
          <ul className="grid grid-cols-4 services-tab">
            {map(tabs, (el) => {
              return (
                <li
                  key={el.id}
                  className={`flex flex-col novecento ${
                    selectedTab === el.title ? "active" : ""
                  }
                  `}
                  onClick={() => handleChangeTab(el.title)}
                >
                  <div>{el.icon}</div>
                  <span className="truncate w-full text-center">
                    {el.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
      <Container>
        <div className="tab-container overflow-hidden">
          {selectedTab === "Websites" && <ServiceTab html={html1} />}
          {selectedTab === "Photography" && <ServiceTab html={html2} />}
          {selectedTab === "SEO" && <ServiceTab html={html3} />}
          {selectedTab === "Applications" && <ServiceTab html={html4} />}
        </div>
      </Container>
    </div>
  );
};

export default Services;
