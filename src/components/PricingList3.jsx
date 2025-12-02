import { pricing2 } from "../constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing2.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full  px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-1 [&>h4]:even:text-color-1 [&>h4]:last:text-color-1"
        >
          <h4 className="h4 mb-4 text-center w-full">{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
