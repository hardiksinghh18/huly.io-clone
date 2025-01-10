import SplitLayoutComponent from "./scroll-reveal";


const MetaBrain = () => {



  return (
    <div className="bg-[#f6f6f6]">
      <section className="source-of-truth relative overflow-hidden pb-[40px] pt-[247px] xl:py-32 md:pb-[10px] md:pt-[100px] sm:pb-[10px] sm:pt-16">
        <div className="container-wide relative z-10 xl:max-w-5xl md:max-w-3xl xs:max-w-md">
          <h2 className="ml-64 font-title text-80 font-semibold leading-h2 tracking-tighter text-black xl:ml-64 xl:max-w-[500px] xl:text-7xl xl:leading-none md:ml-56 md:max-w-none md:text-54 sm:ml-0 sm:text-36">
            Huly MetaBrain
          </h2>
          <p className="ml-64 mt-5 max-w-2xl xl:text-lg leading-none tracking-tight text-gray-600 xl:ml-64 xl:mt-3 md:ml-56 md:mt-3 sm:ml-0 sm:mt-2 sm:text-base">
            Connect every element of your workflow to build a dynamic knowledge
            base. Soon, Huly AI will turn it into a powerful asset — a second
            brain for your team.
          </p>
        </div>


      </section>

     

      <SplitLayoutComponent />
    </div>
  );
};

export default MetaBrain;
