const HeroImg = ({ className, imgSrc, altText }) => {
    return (
      <div className="border-none border-transparent h-48 w-32 rounded-lg overflow-hidden flex flex-col">
            <img className={className}  src={imgSrc} alt={altText}/>
            </div>
    );
  };
  
  export default HeroImg;