const ButtonLink = ({ children, href, blank }) => {
  return (
    <a
      href={href}
      className="group flex items-center justify-center gap-8 text-white"
      target={blank ? '_blank' : '_self'}
    >
      <span className=" font-Anton text-5xl">{children}</span>
      <div className="relative h-20 w-20 rounded-[50%] border-2 border-white before:absolute before:-right-[22px] before:top-1/2 before:h-[1px] before:w-16 before:bg-white before:transition-all before:duration-200 before:content-[''] after:absolute after:-right-[16px] after:top-[35%] after:h-[12px]  after:w-[2px] after:skew-x-[45deg] after:bg-white after:transition-all after:content-[''] group-hover:before:-right-[32px] group-hover:after:-right-[26px]"></div>
    </a>
  );
};

export default ButtonLink;
