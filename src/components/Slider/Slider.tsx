import {} from "react";

const Slider = () => {
  <section className="w-full flex justify-center absolute">
    <div className="">
      <button>left</button>
      <div className="">
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return <div className="w-[3000px] h-[300px] relative black"></div>;
        })}
      </div>
      <button>right</button>
    </div>
  </section>;
};

export { Slider };
