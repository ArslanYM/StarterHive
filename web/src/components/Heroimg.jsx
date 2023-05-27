const HeroImg = ({ className, imgSrc, altText }) => {
    return (
      <img
        className={`bg-[#ba5eba] object-cover object-center rounded border-none border-transparent h-72 min-w-[40%] ${className}`}
        src={imgSrc}
        alt={altText}
      />
    );
  };
  
  export default HeroImg;