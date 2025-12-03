import { courses } from "../constants";

const Courses = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {courses.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full  px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-1 [&>h4]:even:text-color-1 [&>h4]:last:text-color-1"
        >
          <h4 className="h4 mb-4 text-center w-full">{item.title}</h4>
          <div className="flex items-center justify-center mb-6 h-[5.5rem]">
            {item.iconUrl && (
              <img
                src={item.iconUrl}
                width={140}
                height={140}
                alt={item.title}
                className="object-contain"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
