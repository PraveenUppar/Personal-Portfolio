const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 bg-black lg:bg-n-8/90 lg:backdrop-blur-sm`}
    >
      <div className="flex items-center justify-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <a className="text-2xl ">pavicodes.in</a>
        </a>
      </div>
    </div>
  );
};

export default Header;
