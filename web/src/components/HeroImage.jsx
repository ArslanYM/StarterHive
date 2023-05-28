const HeroImg = ({ className, imgSrc, altText }) => {
  return <img className={`bg-[#ba5eba]  border-none border-transparent h-48 w-32 rounded-lg  ${className}`} src={imgSrc} alt={altText} />;
};

export default HeroImg;
