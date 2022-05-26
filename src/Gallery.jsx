import React from "react";
import ReactGallery from "react-photo-gallery";

const images = [
  {
    src: "/images/2a1b5493-b45b-443f-b432-7fe63b5bf10c.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/7ad96243-9505-4441-ade7-64ded842dc30.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/31ef64a2-8ed4-4fbf-95a1-9181a13e63a7.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/43e763d2-103d-42a0-9b8e-1eb458a6ceea.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/56c5740d-f8c4-4eee-86e2-01811d088bc8.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/437d1272-b7f8-43e0-8770-96006e8db5c3.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/5143ee19-46a4-4b2f-8f35-3cb5c20ab046.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/6813c204-cb8c-4210-af2f-01c91a3c26d4.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/8995a22f-74f6-4365-9ca2-c58a241cc8f9.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/77869ba8-0080-4888-8350-93019c2b12fc.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/1842810a-ba32-4a41-b685-7e19fd7df018.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/cf50db80-e537-4014-bdd1-e6da07f55814.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/dffdd54b-4fb5-4563-9d52-486a049c1950.png",
    width: 9,
    height: 16,
  },
  {
    src: "/images/f3e3643b-5b2e-4eea-813c-9bc9386916d1.png",
    width: 9,
    height: 16,
  },
];

export const Gallery = () => {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  return (
    <section id="gallery" className="text-gray-700 ">
      <h2 className="text-3xl text-center py-5 font-bold">Gallery</h2>
      <ReactGallery
        photos={images.map((img) => ({
          ...img,
          src: process.env.PUBLIC_URL + img.src,
        }))}
        // onClick={openLightbox}
      />
      {/* <Lightbox images={images} /> */}
      {/* <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                urlset: x.urlSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
     */}
    </section>
  );
};
