import AmazonMusic from './AmazonMusic';
import AppleMusic from './AppleMusic';
import { FeatureSlide } from './FeatureSlide';
import Heart from './Heart';
import Noise from './Noise';
import Spotify from './Spotify';
import { VideoArea } from './VideoArea';
import YoutubeMusic from './YoutubeMusic';

export const Interface = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <InfoSection />
      <MessageSection />
      <Footer />
    </>
  );
};

const Section = (props) => {
  const { children, backgroundColor } = props;
  return (
    <section className={`h-full w-full ${backgroundColor}`}>{children}</section>
  );
};

const HeroSection = () => {
  return (
    <Section backgroundColor="bg-themePink-500">
      <div className="h-screen w-screen">
        <div className="relative h-full w-full">
          <div className="h-full w-full px-20 py-8">
            <div className="relative h-full w-full">
              <figure className="absolute inset-0 h-full w-full overflow-hidden rounded-[2rem]">
                <img
                  className="h-full w-full object-cover"
                  src="./assets/images/dummy-main.jpg"
                  alt=""
                />
              </figure>
              <div className="absolute bottom-0 h-auto w-[calc(100%/8*3.5)]  max-w-[680px] rounded-tr-[2rem] bg-themePink-500 px-8 py-6">
                <span className="font-Anton absolute -top-4 block bg-black px-2 py-1 text-2xl text-white">
                  kenPachi[.design] 1st Mini Album
                </span>
                <div className="mb-4">
                  <h1 className="text-4xl text-white">
                    めろえも！タッチ・ザ・ハートストリングス
                  </h1>
                </div>
                <div>
                  <a href="#" className="text-white">
                    <span className="font-Anton text-5xl">Alubum Info</span>
                  </a>
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
          <div className="absolute right-[6%] top-[calc(2rem+12%)] h-auto w-[46%]">
            <figure className="h-auto w-full">
              <img src="./assets/images/main-illust.png" alt="" />
            </figure>
          </div>
          <div className="absolute right-[14%] top-[calc(2rem-1%)]">
            <div className="flex flex-col gap-9 text-4xl [writing-mode:vertical-rl]">
              <span className="gradient-bg w-fit p-2 text-white">
                心の琴線に触れる、
              </span>
              <span className="gradient-bg w-fit p-2  text-white">
                えもいメロディー。
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const FeatureSection = () => {
  return (
    <Section backgroundColor="bg-themePink-500">
      {/* FEATURE DETAIL AREA */}
      <div className="relative z-10 text-white">
        {/* FEATURE TEXT */}
        <div className="font-Anton flex gap-8 text-[10rem] text-white">
          <span>Feature</span>
          <span>Feature</span>
          <span>Feature</span>
          <span>Feature</span>
          <span>Feature</span>
        </div>
        {/* FEATURE MELOEMO TEXT */}
        <div className="font-Anton absolute top-[100vh] -z-[1] flex -translate-y-1/2 -rotate-12 gap-8 whitespace-nowrap text-[10rem] text-white">
          <span className="text-stroke-white text-stroke-fill-transparent text-stroke-1">
            Melo Emo!!
          </span>
          <span className="text-stroke-white text-stroke-fill-transparent text-stroke-1">
            Melo Emo!!
          </span>
          <span className="text-stroke-white text-stroke-fill-transparent text-stroke-1">
            Melo Emo!!
          </span>
          <span className="text-stroke-white text-stroke-fill-transparent text-stroke-1">
            Melo Emo!!
          </span>
        </div>
        {/* FEATURE DESC */}
        {/* FEATURE DESC 01 */}
        <div className="h-screen w-screen px-20 py-8">
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="absolute top-[40%] z-[-1] w-full -translate-y-[30%]  px-14">
                <Heart className="fill-themeRed-500" />
              </div>
              <h3 className="before:font-Anton before:text-stroke-1 before:text-stroke-fill-transparent before:text-stroke-white relative text-4xl before:absolute before:-left-[4%] before:-top-[36%] before:text-[4em] before:opacity-50 before:content-['01']">
                初音ミクをボーカルに起用したkenPachi[.design]
                自身初となるミニアルバム！
              </h3>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
        {/* FEATURE DESC 02 */}
        <div className="h-screen w-screen px-20 py-8">
          <div className="flex h-full w-full flex-row-reverse items-center justify-center">
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="absolute top-[20%] z-[-1] w-full px-14">
                <Heart className="fill-themeRed-500" />
              </div>
              <h3 className="before:font-Anton before:text-stroke-1 before:text-stroke-fill-transparent before:text-stroke-white relative mb-4 text-4xl before:absolute before:-left-[4%] before:-top-[36%] before:text-[4em] before:opacity-50 before:content-['02']">
                「M3-2023春」にてCD頒布&各種音楽配信サービスで配信開始！
              </h3>
              {/* MUSIC LINK */}
              <div className="">
                <h4 className="mb-4">＜配信先リンク＞</h4>
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
                  <a
                    href="https://nodee.net/a/rv09dqc2"
                    target="_blank"
                    className="font-Anton text-5xl"
                  >
                    Listen Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
        {/* FEATURE SEPARATE */}
        <div className="relative after:absolute after:inset-0 after:-z-10 after:bg-black after:opacity-60 after:content-[''] ">
          <figure className="absolute inset-0 -z-20">
            <img
              src="./assets/images/dummy-main.jpg"
              className="object-[center_30%]"
              alt=""
            />
          </figure>
          <div className="font-DotGothic flex flex-nowrap items-center justify-start text-nowrap py-10 text-4xl text-themeYellow-500">
            <h3>曲目：</h3>
            <ul className="flex items-center justify-start gap-20">
              <li>
                <span>1.御伽街物語</span>
              </li>
              <li>
                <span>2.it's a sensitive personality</span>
              </li>
              <li>
                <span>3.ピンキーメイデン</span>
              </li>
              <li>
                <span>4.ハッピー☆シーサイド</span>
              </li>
              <li>
                <span>5.君は宇宙</span>
              </li>
            </ul>
          </div>
        </div>
        {/* FEATURE DESC 03 */}
        <div className="flex h-screen w-screen flex-col justify-center ">
          <div className="h-auto w-full px-20 py-20">
            <div className="h-full w-full">
              <div className="flex h-full w-full items-center justify-start">
                <div className="relative flex h-full w-[calc(100%/8*6)] flex-col items-center justify-center">
                  <div className="px-14: absolute left-0 top-[40%] z-[-1] w-full  max-w-[calc(100vw/6*2)] -translate-y-[30%]">
                    <Heart className="fill-themeRed-500" />
                  </div>
                  <h3 className="before:font-Anton before:text-stroke-1 before:text-stroke-fill-transparent before:text-stroke-white relative text-4xl before:absolute before:-left-[4%] before:-top-[36%] before:text-[4em] before:opacity-50 before:content-['03']">
                    作詞・作曲・編曲者自身がジャケットデザイン・入稿作業・プロモーションも担当！
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-auto w-full overflow-hidden">
            <FeatureSlide />
          </div>
        </div>
      </div>
      {/* CIRCLE TEXT ART AREA */}
      <div className="">CIRCLETEXT</div>
    </Section>
  );
};

const InfoSection = () => {
  return (
    <Section backgroundColor="bg-themeYellow-500">
      <div className="flex h-auto min-h-screen w-screen flex-col justify-center px-20 py-12">
        <h2 className="font-Anton text-themeRed-800 mb-32 text-6xl">
          Information
        </h2>
        <div className="flex h-full w-full flex-row-reverse items-center justify-center">
          <div className="flex h-full w-full flex-col items-start justify-center">
            <h3 className="mb-8 flex flex-col">
              <span className="font-Anton bg-themeRed-800 w-fit px-4 py-1 text-xl  text-white">
                kenPachi[.design] 1st Mini Album
              </span>
              <span className="font-kaisei  text-themeRed-800 text-4xl font-bold">
                めろえも！タッチ・ザ・ ハートストリングス
              </span>
            </h3>
            <h4 className="text-themeRed-800 mb-4 text-3xl font-bold">
              収録曲
            </h4>
            <ul className="text-themeRed-800 mb-8 text-2xl font-bold">
              <li>01: 御伽街物語</li>
              <li>02: it’s a sensitive personality</li>
              <li>03: ピンキーメイデン</li>
              <li>04: ハッピー☆シーサイド</li>
              <li>05: 君は宇宙</li>
            </ul>
            {/* MUSIC LINK */}
            <div className="">
              <h4 className="text-themeRed-800 mb-6 text-3xl font-bold">
                ＜配信先リンク＞
              </h4>
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
                <a
                  href="https://nodee.net/a/rv09dqc2"
                  target="_blank"
                  className="font-Anton text-5xl"
                >
                  Listen Now!
                </a>
              </div>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className="h-auto min-h-screen w-screen  px-20 py-12">
        <h2 className="font-Anton relative z-[11] -mr-10 text-right text-6xl text-themePink-500">
          Promotion
        </h2>
        <div className="relative z-10 m-auto -mt-8 min-h-screen w-full max-w-[1360px] overflow-hidden rounded-2xl border-2 border-black">
          <div className="gradient-bg-promotion absolute inset-0 -z-[1] h-full w-full"></div>
          <Noise className="absolute inset-0 -z-[1] h-full w-full" />
          <figure className="absolute left-[-4%] -z-[1] w-2/12">
            <img src="./assets/svg/moji01.svg" alt="" />
          </figure>
          <figure className="absolute right-[4%] top-0 -z-[1] w-3/12">
            <img src="./assets/svg/moji02.svg" alt="" />
          </figure>
          <figure className="absolute bottom-[1%] left-[-4%] -z-[1] w-6/12">
            <img src="./assets/svg/moji03.svg" alt="" />
          </figure>
          <figure className="absolute bottom-[-4%] right-[-2%] -z-[1] w-5/12">
            <img src="./assets/svg/moji04.svg" alt="" />
          </figure>
          <div className="grid-bg"></div>
          {/* VIDEO */}
          {/* VIDEO AREA */}
          <div>
            <VideoArea />
          </div>
        </div>
      </div>
    </Section>
  );
};

const MessageSection = () => {
  return <div className="">MessageSection</div>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};
