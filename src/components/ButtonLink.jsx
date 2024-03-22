const ButtonLink = ({ children, href, blank, red }) => {
  return (
    <a
      href={href}
      className={`group flex items-center justify-center gap-8 ${red ? 'text-themeRed-800' : 'text-white'}`}
      target={blank ? '_blank' : '_self'}
    >
      <span className=" font-Anton text-5xl">{children}</span>
      <div
        className={`${red ? 'border-themeRed-800 before:bg-themeRed-800 after:bg-themeRed-800' : 'border-white before:bg-white after:bg-white'} relative h-20 w-20 rounded-[50%] border-2 before:absolute before:-right-[22px] before:top-1/2 before:h-[1px] before:w-16  before:transition-all before:duration-200 before:content-[''] after:absolute after:-right-[16px] after:top-[35%] after:h-[12px]  after:w-[2px] after:skew-x-[45deg]  after:transition-all after:content-[''] group-hover:before:-right-[32px] group-hover:after:-right-[26px]`}
      ></div>
    </a>
  );
};

export default ButtonLink;
