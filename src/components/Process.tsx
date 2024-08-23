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
      imgSrc: "https://www.youtube.com/embed/YppKBQFIswE?si=_1GTqDzVjLK7roY5?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video2: {
      id: 2,
      imgSrc: "https://www.youtube.com/embed/ozl4u8viqYM?si=mn9J00YyK4PzhVoy?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video3: {
      id: 3,
      imgSrc:
        "https://www.youtube.com/embed/kV19nujgvZI?si=feFWf6cyGbcKgVAD?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video4: {
      id: 4,
      imgSrc:
        "https://www.youtube.com/embed/OpyRKaROb0M?si=EJK15LcMctamPgc9?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video5: {
      id: 5,
      imgSrc:
        "https://www.youtube-nocookie.com/embed/_Qp3b0pr4y4?si=Eti0A4FKxaqcXBWj?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video6: {
      id: 6,
      imgSrc:
        "https://www.youtube.com/embed/pPRK1vTdSfE?si=GYBQm5a4oZr_821N?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video7: {
      id: 7,
      imgSrc:
        "https://www.youtube.com/embed/hzL_ldn6R9U?si=XXsUgGXZtqvRFkuh?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video8: {
      id: 8,
      imgSrc:
        "https://www.youtube.com/embed/I8g_g3ne8xw?si=OQjYgoBr5fjO6DAt?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video9: {
      id: 9,
      imgSrc:
        "https://www.youtube.com/embed/sFixwriaQU4?si=c4YmtYKe7uoy7Ehb?rel=0",
      title: "Manufacturing",
      type: "video",
    },
    video10: {
      id: 10,
      imgSrc:
        "https://www.youtube.com/embed/rlyie2iRqBc?si=3Zu5gEq4XS3J6mtS?rel=0",
      title: "Manufacturing",
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
