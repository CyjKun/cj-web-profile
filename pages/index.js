import statsCard from "./api/stats";

export default function Home() {
  return (
    <div>
      <img
        className="absolute h-full w-full object-cover"
        src="/Photo=4, First Person=false.jpg"
        alt="Photo4"
      />
      <div className="relative bg-black bg-opacity-80">
        <div className="h-screen relative">
          <div className="absolute w-screen h-full py-8">
            {/* middle */}
            <div className="relative h-5/6 mt-24 w-full object-cover bg-botw-foreground bg-opacity-40 border-b border-t border-botw-foreground">
              {/* card */}
              <div className="absolute h-250 w-910 bottom-0 right-0 mb-14 flex flex-row-reversed rounded bg-black bg-opacity-50">
                <div className="w-full border-t border-l border-b border-botw-foreground rounded m-0.5">
                  <div className="mt-2 ml-9 mb-4 h-218 w-550">
                    {/* title */}
                    <h1 className="text-botw-text text-5xl font-sans italic font-bold">
                      Weapon Name
                    </h1>
                    {/* line */}
                    <div className="border-b p-1"></div>
                    {/* stats */}
                    <div className="flex flex-wrap content-center mt-1 space-x-3">
                      <img
                        className="h-9 w-9"
                        src="/Bonus Effect - Icons.svg"
                        alt="Sheikah Slate"
                      />
                      <div className="bg-gradient-to-b from-black rounded flex">
                        <div className="border border-opacity-30 border-botw-foreground m-0.5">
                          <div className="font-sans font-medium text-xl text-white flex flex-wrap content-center px-3 py-1">
                            60
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-b from-black rounded flex">
                        <div className="border border-opacity-30 border-botw-foreground m-0.5">
                          <div className="flex flex-wrap content-center px-3 py-1 space-x-1">
                            <img
                              className="h-7 w-7"
                              src="/Bonus Effect - Icons(1).svg"
                              alt="Sheikah Slate"
                            />
                            <div className="font-sans font-medium text-xl text-botw-bonus-text">
                              Critical Hit
                            </div>
                          </div>
                        </div>
                      </div>
                      {statsCard}
                    </div>
                    {/* Description */}
                    <p className="text-botw-text text-2xl font-sans italic font-normal">
                      A description of the weapon goes here, which describe a
                      brief history of the item or weapon, indicate what it can
                      do, as well as it’s strengths and weaknesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
