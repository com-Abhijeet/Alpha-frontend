import ReactPlayer from "react-player";
import useLazyLoadVideo from "../helpers/useLazyLoadVideo";

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
      imgSrc: "video/process-video1.MOV",
      title: "Process 1",
      type: "video",
    },
    video2: {
      id: 2,
      imgSrc: "video/process-video2.MOV",
      title: "Process 2",
      type: "video",
    },
    video3: {
      id: 3,
      imgSrc: "video/process-video3.MOV",
      title: "Process 3",
      type: "video",
    },
    video4: {
      id: 4,
      imgSrc: "video/process-video4.MOV",
      title: "Process 4",
      type: "video",
    },
    video5: {
      id: 5,
      imgSrc: "video/process-video5.MOV",
      title: "Process 5",
      type: "video",
    },
    video6: {
      id: 6,
      imgSrc: "video/process-video6.MOV",
      title: "Process 6",
      type: "video",
    },
    video7: {
      id: 7,
      imgSrc: "video/process-video7.MOV",
      title: "Process 7",
      type: "video",
    },
    video8: {
      id: 8,
      imgSrc: "video/process-video8.MOV",
      title: "Process 8",
      type: "video",
    },
    video9: {
      id: 9,
      imgSrc: "video/process-video9.MOV",
      title: "Process 9",
      type: "video",
    },
    video10: {
      id: 10,
      imgSrc: "video/process-video10.MOV",
      title: "Process 10",
      type: "video",
    },
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
        <div className="process-tiles">
          {Object.values(videos).map((video) => {
            const { videoRef, isIntersecting } = useLazyLoadVideo();

            return (
              <div className="process-tile" key={video.id} ref={videoRef}>
                <h4>{video.title}</h4>
                {isIntersecting && (
                  <ReactPlayer
                    className="process-video-player"
                    url={`${video.imgSrc}`}
                    playing={true}
                    controls={true}
                    width={"100%"}
                    type="video/mov"
                    stopOnUnmount={true}
                    volume={0}
                    loop={true}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
