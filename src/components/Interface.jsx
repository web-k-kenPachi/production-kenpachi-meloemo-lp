import Heart from './Heart';

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
                    めろえも！タッチ・ザ・
                    <br />
                    ハートストリングス
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
              <span className="w-fit bg-black p-2 text-white">
                心の琴線に触れる、
              </span>
              <span className="w-fit bg-black p-2  text-white">
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
              <div className="absolute top-1/2 z-[-1] w-full -translate-y-[44%] px-14">
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
              <div className="absolute top-1/2 z-[-1] w-full -translate-y-[44%] px-14">
                <Heart className="fill-themeRed-500" />
              </div>
              <h3 className="before:font-Anton before:text-stroke-1 before:text-stroke-fill-transparent before:text-stroke-white relative text-4xl before:absolute before:-left-[4%] before:-top-[36%] before:text-[4em] before:opacity-50 before:content-['02']">
                「M3-2023春」にてCD頒布&各種音楽配信サービスでï配信開始！
              </h3>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
        {/* FEATURE SEPARATE */}
        <div className=""></div>
        {/* FEATURE DESC 03 */}
        <div className="h-screen w-screen px-20 py-8">
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <h3 className="text-4xl">
                初音ミクをボーカルに起用したkenPachi[.design]
                自身初となるミニアルバム！
              </h3>
            </div>
            <div className="w-full"></div>
          </div>
        </div>
      </div>
      {/* CIRCLE TEXT ART AREA */}
      <div className=""></div>
    </Section>
  );
};

const InfoSection = () => {
  return (
    <Section backgroundColor="bg-themeYellow-500">
      <div className="test">INFOSection</div>
    </Section>
  );
};

const MessageSection = () => {
  return <div className="">MessageSection</div>;
};

const Footer = () => {
  return <footer>Footer</footer>;
};
