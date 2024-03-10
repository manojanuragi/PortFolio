import heroImg from "../images/manoj_hero.jpg";
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-center items-center gap-5">
          <div>
            <h4 className="text-center text-xl font-bold">
                Hi and welcome to
            </h4>
            <h2 className="text-center text-stone-500 text-5xl font-bold">
              My Portfolio Website
            </h2>
          </div>
          <p className="text-center">
            I am your friendly neighbourhood osm developer...
          </p>
        </div>
        <div className="flex-1">
          <div className="w-96 h-96 bg-stone-900 rounded-full p-1 ">
          <img src={heroImg}
               alt="Hello.svg"
               className=" pt-2 pl-2  pr-2 pb-2 border-stone-100 border-2 rounded-full"/>
            
          </div>
        </div>
      </section>
    );
    }