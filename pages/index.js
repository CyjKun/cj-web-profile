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
              <div className="absolute h-250 w-910 bottom-0 right-0 mb-14 flex flex-row-reversed rounded bg-gradient-to-r bg-black bg-opacity-30">
                <div className="w-full border-t border-l border-b border-botw-foreground rounded m-0.5">
                  <div className="mt-2 ml-9 mb-4 h-218 w-550">
                    {/* title */}
                    <h1 className="text-botw-text text-5xl font-sans italic font-bold">
                      Weapon Name
                    </h1>
                    {/* line */}
                    <div className="border-b p-1"></div>
                    {/* stats */}
                    <div className="static h-10 mt-1 flex space-x-4">
                      <div>
                        <img
                          className="h-full"
                          src="/Bonus Effect - Icons.svg"
                          alt="Sheikah Slate"
                        />
                      </div>
                      <div>
                        <img
                          className="h-full"
                          src="/Bonus Effect - Icons.svg"
                          alt="Sheikah Slate"
                        />
                      </div>
                      <div>
                        <img
                          className="h-full"
                          src="/Bonus Effect - Icons.svg"
                          alt="Sheikah Slate"
                        />
                      </div>
                      {/* <div className="h-full bg-black">
                        <h1 className="h-full py-2 text-white">60</h1>
                      </div> */}
                      {/* <div className="bg-gradient-to-r bg-black bg-opacity-30">
                        <div className="absolute h-full m-0.5 border border-botw-foreground flex">
                          <img
                            className="h-full"
                            src="/Bonus Effect - Icons.svg"
                            alt="Sheikah Slate"
                          />
                          <h1 className="h-full py-2 text-botw-bonus-text font-sans font-normal">
                            Critical Hit
                          </h1>
                        </div>
                      </div> */}
                    </div>

                    {/* <div className="bg-gradient-to-r rounded bg-black bg-opacity-30">
                        <div className="flex border border-botw-foreground m-0.5 ">
                          <img
                            src="/Bonus Effect - Icons.svg"
                            alt="Sheikah Slate"
                          />
                          <span className="text-white text-2xl ">60</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r rounded bg-black bg-opacity-30">
                        <div className="border border-botw-foreground m-0.5">
                          <div className="flex m-1">
                            <img
                              src="/Bonus Effect - Icons.svg"
                              alt="Sheikah Slate"
                            />
                            <span className="text-botw-bonus-text text-2xl font-sans font-normal items-center">
                              Critical Hit
                            </span>
                          </div>
                        </div>
                      </div> */}
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
