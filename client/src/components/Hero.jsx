
const Hero = () => {
  const listA = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 },
  ];
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className="heroHeadText">
            Hello, I'm <span className="text-[#16c734]">Visuth Kuptsunti</span>
          </h1>
          <p className="heroSubText mt-2 text-white-100">
            I'm a Software Developer.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
