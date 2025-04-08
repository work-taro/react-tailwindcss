
const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto bg-programming">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className="heroHeadText">
            Hello, I'm <span className="text-[#16c734]">TARO</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I'm a Software Developer.<br/>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;