const HeroImg = ({ className, imgSrc, altText }) => {
  return <img className={`bg-[#ba5eba]  border-none border-transparent h-40  md:h-60 rounded-lg  ${className}`} src={imgSrc} alt={altText} />;
};

export default HeroImg;
