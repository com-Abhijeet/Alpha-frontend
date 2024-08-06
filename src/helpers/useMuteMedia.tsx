import { useEffect } from 'react';

const useMuteMedia = () => {
  useEffect(() => {
    const muteAllMedia = () => {
      const mediaElements = document.querySelectorAll('audio, video');
      mediaElements.forEach((element: Element) => {
        const mediaElement = element as HTMLMediaElement;
        mediaElement.muted = true;
      });
    };

    muteAllMedia();
  }, []);
};

export default useMuteMedia;