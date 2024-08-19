import ReactPlayer from "react-player";
import useLazyLoadVideo from "../helpers/useLazyLoadVideo";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Autoplay,
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { useRef } from "react";

const Process = () => {
  const videos: {
    [key: string]: {
      id: number;
      imgSrc: string;
      title: string;
      type: string;
    };
  } = {
    video1: {
      id: 1,
      imgSrc: "video/process-video1.mp4",
      title: "Process 1",
      type: "video",
    },
    video2: {
      id: 2,
      imgSrc: "video/process-video2.mp4",
      title: "Process 2",
      type: "video",
    },
    video3: {
      id: 3,
      imgSrc: "video/process-video3.mp4",
      title: "Process 3",
      type: "video",
    },
    video4: {
      id: 4,
      imgSrc: "video/process-video4.mp4",
      title: "Process 4",
      type: "video",
    },
    video5: {
      id: 5,
      imgSrc: "video/process-video5.mp4",
      title: "Process 5",
      type: "video",
    },
    video6: {
      id: 6,
      imgSrc: "video/process-video6.mp4",
      title: "Process 6",
      type: "video",
    },
    video7: {
      id: 7,
      imgSrc: "video/process-video7.mp4",
      title: "Process 7",
      type: "video",
    },
    video8: {
      id: 8,
      imgSrc: "video/process-video8.mp4",
      title: "Process 8",
      type: "video",
    },
    video9: {
      id: 9,
      imgSrc: "video/process-video9.mp4",
      title: "Process 9",
      type: "video",
    },
    video10: {
      id: 10,
      imgSrc: "video/process-video10.mp4",
      title: "Process 10",
      type: "video",
    },
  };
  const playerRefs = useRef<{ [key: string]: ReactPlayer | null }>({});
  const handleSlideChange = () => {
    Object.values(playerRefs.current).forEach((player) => {
      if (player && player.getInternalPlayer) {
        player.getInternalPlayer().pause();
      }
    });
  };

  return (
    <section id="process" className="process section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Manufacturing Process</h2>
          <p>
            We cater to the High quality demands with precision Manufacturing
            processess
          </p>
        </div>
        <div className="process-swiper">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={handleSlideChange}
            loop={true}
          >
            {Object.values(videos).map((video) => {
              const { videoRef, isIntersecting } = useLazyLoadVideo();

              return (
                <SwiperSlide key={video.id}>
                  <div className="process-tile" ref={videoRef}>
                    <h4>{video.title}</h4>
                    {isIntersecting && (
                      <ReactPlayer
                        className="process-video-player"
                        url={`${video.imgSrc}`}
                        controls={true}
                        width={"100%"}
                        stopOnUnmount={true}
                        autoplay
                        volume={0}
                        light="thumbnail.png"
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Process;
