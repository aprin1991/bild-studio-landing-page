import Container from "components/container";
import { Loading } from "components/loading";
import Modal from "components/modal";
import { useState } from "react";
import ReactPlayer from "react-player";
import { playIcon } from "utilities/icons";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setVideoLoading(true);
  };
  return (
    <div className="home-about">
      <Container classes="flex gap-5">
        <div className="w-5/12 pl-2">
          <div className="w-full h-60 home-about-video flex justify-center items-center">
            <span className="cursor-pointer" onClick={() => setShowModal(true)}>
              {playIcon}
            </span>
          </div>
        </div>
        <div className="w-7/12 pl-3 home-about-description">
          <h1 className="text-xl mb-3 ">Get To Know Us a Little Better!</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
            <br />
            <br /> Nullam tellus turpis, fringilla sit amet congue ut, luctus a
            nulla. Donec sit amet <br />
            sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
            pellentesque arcu a elit congue lacinia.
          </p>
        </div>
      </Container>
      {showModal && (
        <Modal show={showModal} close={handleCloseModal}>
          <div className="max-w-lg " style={{ minHeight: 200 }}>
            {videoLoading && (
              <div className="absolute left-0 right-0 top-24 z-50 pointer-events-none">
                <Loading />
              </div>
            )}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8dUpL8SCO1w"
              onReady={() => setVideoLoading(false)}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default About;
