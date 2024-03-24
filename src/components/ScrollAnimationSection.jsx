import AmazonMusic from './AmazonMusic';
import AppleMusic from './AppleMusic';
import ButtonLink from './ButtonLink';
import Heart from './Heart';
import {
  MotionTextFeature,
  MotionTextMeloEmo,
} from './MotionTextInfiniteMaterial';
import Spotify from './Spotify';
import YoutubeMusic from './YoutubeMusic';

export const ScrollAnimationSection = () => {
  return (
    <>
      <HeroSection />
      <FeatureBeforeSection />
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      <div className="absolute left-[-2%] top-[4%] z-50  px-20 py-8">
        <div className="text-displaySm w-fit -rotate-6 bg-black px-2 py-1 text-white">
          CD頒布＆楽曲配信中！
        </div>
      </div>
      <section className="absolute top-0 h-screen w-screen">
        <div className="relative z-[1] h-screen w-screen">
          <div className="relative h-full w-full">
            <div className="h-full w-full px-20 py-8">
              <div className="relative h-full w-full">
                <div className="absolute bottom-0 h-auto w-[calc(100%/8*3.5)]  rounded-tr-[2rem] bg-themePink-500 px-8 py-8">
                  <span className="absolute -top-[4%] block bg-black px-2 py-1 font-Anton text-2xl text-white">
                    kenPachi[.design] 1st Mini Album
                  </span>
                  <div className="mb-4">
                    <h1 className="font-DotGothic text-[min(2.6vw,5.5rem)] text-white">
                      めろえも！タッチ・ザ・ハートストリングス
                    </h1>
                  </div>
                  <div>
                    <ButtonLink href="#info">Album Info</ButtonLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 flex h-full w-20 items-center justify-center">
              <div className="flex flex-col gap-8">
                <Heart className="h-auto w-[24px] stroke-white  stroke-[1rem]" />
                <Heart className="h-auto w-[24px] stroke-white stroke-[1rem]" />
                <Heart className="h-auto w-[24px] stroke-white stroke-[1rem]" />
                <Heart className="h-auto w-[24px] fill-white stroke-[1rem]" />
                <Heart className="h-auto w-[24px] stroke-white stroke-[1rem]" />
              </div>
            </div>
            <div className="absolute right-0 top-0 flex h-full w-20 items-center justify-center">
              <span className="font-Anton text-4xl text-white [writing-mode:vertical-rl]">
                Melo-Emo! Touch the Heartstrings
              </span>
            </div>
            <div className="absolute bottom-[calc(2rem-30%)] right-[6%] h-auto w-[46%]">
              <figure className="h-auto w-full">
                <img src="./assets/images/main-illust.png" alt="" />
              </figure>
            </div>
            <div className="absolute right-[10%] top-[calc(2rem-1%)]">
              <div className="text-display flex flex-col gap-[min(2.5vw,3rem)]  [writing-mode:vertical-rl]">
                <span className="gradient-bg--opacity w-fit p-2 text-white">
                  心の琴線に触れる、
                </span>
                <span className="gradient-bg--opacity w-fit p-2  text-white">
                  えもいメロディー。
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureBeforeSection = () => {
  return (
    <>
      {/* FEATURE Display TEXT */}
      <section className="relative h-screen  w-screen ">
        <MotionTextFeature />
      </section>
      <section className="relative h-screen w-screen">
        {/* FEATURE DETAIL AREA */}
        {/* Meloemo Display TEXT */}
        <MotionTextMeloEmo />
        {/* FEATURE DESC */}
        {/* FEATURE DESC 01 */}
        <div className="flex h-full w-full items-center justify-center  px-20 py-8">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="absolute top-[40%] z-[-1] w-full -translate-y-[30%]  px-14">
              <Heart className="fill-themeRed-500" />
            </div>
            <h3 className="relative text-4xl text-white before:absolute before:-left-[4%] before:-top-[36%] before:font-Anton before:text-[4em] before:opacity-50 before:content-['01'] before:text-stroke-1 before:text-stroke-white before:text-stroke-fill-transparent">
              初音ミクをボーカルに起用したkenPachi[.design]
              自身初となるミニアルバム！
            </h3>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
      <section className="h-screen w-screen" id="feature-scroll-end">
        {/* FEATURE DESC 02 */}
        <div className="flex h-full w-full flex-row-reverse items-center justify-center  px-20 py-8">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="absolute top-[20%] z-[-1] w-full px-14">
              <Heart className="fill-themeRed-500" />
            </div>
            <h3 className=" relative mb-4 text-4xl text-white before:absolute before:-left-[4%] before:-top-[36%] before:font-Anton before:text-[4em] before:opacity-50 before:content-['02'] before:text-stroke-1 before:text-stroke-white before:text-stroke-fill-transparent">
              「M3-2023春」にてCD頒布&各種音楽配信サービスで配信開始！
            </h3>
            {/* MUSIC LINK */}
            <div className="">
              <h4 className="mb-4 text-3xl text-white">＜配信先リンク＞</h4>
              <div className="mb-8 flex w-full items-center justify-between gap-16">
                <a
                  href="https://open.spotify.com/intl-ja/album/4AGvNA0mTGf8Zo6XDIJm7T"
                  target="_blank"
                >
                  <Spotify />
                </a>
                <a
                  href="https://music.apple.com/jp/album/melo-emo-touch-the-heartstrings-feat-hatsune-miku-ep/1683330803"
                  target="_blank"
                >
                  <AppleMusic />
                </a>
                <a
                  href="https://amazon.co.jp/music/player/albums/B0C2Y5BSW9?marketplaceId=A1VC38T7YXB528&musicTerritory=JP&ref=dm_sh_WArdoRj8XOip3x13ArHYPwLQE"
                  target="_blank"
                >
                  <AmazonMusic />
                </a>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_nOzLvetgMZYXv8oE0oFdb7bLktlmVhfb4&si=Mfa8JZrJuuigeNax"
                  target="_blank"
                >
                  <YoutubeMusic />
                </a>
              </div>
              <div className="flex justify-end">
                <ButtonLink href="https://nodee.net/a/rv09dqc2" blank>
                  Listen Now!
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
    </>
  );
};
