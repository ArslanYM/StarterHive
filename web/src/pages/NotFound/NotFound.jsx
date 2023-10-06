const NotFound = () => {
  return (
    <div className="NotFoundPage h-[100vh] md:h-[calc(100vh-172px)] w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black  flex flex-col justify-center items-center font-OpenSans  text-white  gap-4 lg:gap-32">
      <div className="main-content flex flex-col items-center md:flex-row w-full justify-center gap-10 md:gap-20 ">
        <div className="wrapper md:scale-[70%] lg:scale-100">
          <div className="mascot flex flex-col justify-center items-center relative">
            <div
              className="mascot-hat w-[6rem] h-[4.5rem] bg-[#FE8C05] flex justify-center border-4 border-black relative top-8"
              style={{
                borderRadius: '20px',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
              }}
            >
              <div className="hat-line bg-[#FEB31E] w-[1.5rem] h-[4.5rem] border-2 border-black rounded-lg relative -top-1"></div>
            </div>
            <div className="hat-base bg-[#FFB31F] w-[8rem] h-[1.5rem] rounded-t-lg rounded-b-2xl relative top-2 z-10 border-4 border-black"></div>
            <div className="mascot-body w-[10rem] aspect-square border-4 border-black flex flex-col items-center gap-2 bg-[#FFFFFF] rounded-xl p-6 relative z-10">
              <div className="eyes flex justify-center gap-6">
                <div className="eye-l w-[2rem] h-[3rem] bg-black rounded-full">
                  <div className="eye-ball bg-white w-[0.6rem] aspect-square rounded-full relative left-4 top-2"></div>
                </div>
                <div className="eye-r w-[2rem] h-[2rem] bg-black rounded-t-full">
                  <div className="eye-ball bg-white w-[0.6rem] aspect-square rounded-full relative left-4 top-2"></div>
                </div>
              </div>
              <div className="mouth w-[4.5rem] h-[3rem] bg-black rounded-t-full relative border-4 border-black overflow-hidden">
                <div className="teeth w-[80%] h-[40%] bg-white rounded-t-full absolute bottom-0 left-2"></div>
                <div className="teeth w-[80%] h-[60%] bg-white rounded-b-full absolute -top-2 left-2"></div>
              </div>
              <div className="spots">
                <div className="spot-a w-4 h-4 bg-[#D9D2CA] rounded-full absolute top-2 left-4"></div>
                <div className="spot-b w-8 h-8 bg-[#D9D2CA] rounded-full absolute bottom-12 left-2"></div>
                <div className="spot-c w-6 h-6 bg-[#D9D2CA] rounded-full absolute top-10 right-1"></div>
                <div className="spot-d w-2 h-2 bg-[#D9D2CA] rounded-full absolute bottom-12 right-2"></div>
              </div>
            </div>
            <div className="hand-l bg-[#D9D2CA] w-[5rem] h-[1.5rem] rounded-l-full absolute -left-12 -rotate-45 z-0 bottom-24"></div>
            <div className="hand-r bg-[#D9D2CA] w-[5rem] h-[1.5rem] rounded-r-full absolute -right-12 rotate-45 z-0 bottom-24"></div>
            <div className="feet-l w-[1.8rem] h-[4rem] z-0 bg-[#d9d2ca] rounded-b-full rotate-12 absolute -bottom-6 left-8  border-4 border-black"></div>
            <div className="feet-r w-[1.8rem] h-[4rem] z-0 bg-[#d9d2ca] rounded-b-full -rotate-12 absolute -bottom-6 right-8 border-4 border-black"></div>
            <div className="shadow bg-[#CCCCCC] w-[9rem] h-[1rem] rounded-[100%] relative top-12 "></div>
          </div>
        </div>
        <div className="heading-main  text-[6rem] md:text-[9rem] lg:text-[12rem] font-extrabold">
          404
        </div>
      </div>

      <div className="sub-heading lg:text-2xl md:mb-12 lg:mb-0 text-center w-[90%]">
        Oops! We couldn&apos;t find the page that you&apos;re looking.
        <br />
        Please check the address and try again.
      </div>
    </div>
  );
};
export default NotFound;
