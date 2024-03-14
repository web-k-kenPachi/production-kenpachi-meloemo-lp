import { useState } from 'react';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/scss/modal-video.scss';
import Play from './Play';

export const VideoArea = () => {
  return (
    <>
      <div className="m-auto flex h-full w-full max-w-[1100px] flex-col gap-[min(8rem,30vw)] px-8 py-60">
        <ComponentVideo01 />
        <ComponentVideo02 />
      </div>
    </>
  );
};

const ComponentVideo01 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="ljyB57S37ho"
        onClose={() => setOpen(false)}
      />
      <button
        className="h-auto w-8/12 place-self-end shadow-lg"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <img src="./assets/images/promo-video01.jpg" alt="" />
          <div className="absolute -left-[30%] bottom-[16%] w-fit bg-themePink-500 px-4 py-2 text-4xl font-bold text-white ">
            クロスフェードムービー
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 h-auto w-1/6 -translate-x-1/2 -translate-y-1/2 text-themePink-500">
            <Play />
          </div>
        </div>
      </button>
    </>
  );
};

const ComponentVideo02 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="zY40Di-O-xU"
        onClose={() => setOpen(false)}
      />
      <button
        className="h-auto w-8/12  shadow-lg"
        onClick={() => setOpen(true)}
      >
        <div className="relative">
          <img src="./assets/images/promo-video02.jpg" alt="" />
          <div className="absolute -right-[20%] top-[8%] w-fit bg-themePink-500 px-4 py-2 text-4xl font-bold text-white">
            M3用動画CM
          </div>
          <div className="absolute left-1/2 top-1/2 z-50 h-auto w-1/6 -translate-x-1/2 -translate-y-1/2 text-themePink-500">
            <Play />
          </div>
        </div>
      </button>
    </>
  );
};
