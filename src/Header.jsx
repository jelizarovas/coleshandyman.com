export const Header = (props) => {
  return (
    <header className=" h-[1000px] overflow-hidden  max-h-screen bg-yellow-600  ">
      <div className="container relative h-full mx-auto flex flex-col">
        <img src="images/bg.jpg" className="z-0 blur-md h-full w-full absolute" />
        <img src="images/Untitled-1.png" className="aspect-[72/96] w-[1420px] absolute right-[-200px] bottom-0 lg:top-0" />
        <div className="text-2xl   m-2 p-2 rounded flex flex-col">
          <span className="text-3xl">Coles Handyman</span> <span>Service LLC</span>
        </div>
        "We do it all" Fully Insured Dave Coles Owner Commercial * Industrial * Residential We Do The Best For Less
        email: chilldc37@icloud.com CELL: 609-417-0688 PHN 856-221-3494 FAX 856-221-3494
      </div>
    </header>
  );
};
