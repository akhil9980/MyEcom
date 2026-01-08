import React from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const Landing: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Hero Banner Section */}
      <div className="mx-auto py-20 w-full">
        <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-[10rem] lg:flex-auto lg:py-32 lg:text-left lg:scale-150">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-10">
                  Celebration of individuality and style
                </h1>
                <p className="mt-6 text-md leading-6 text-gray-400">
                  At ONCY TECH, we believe that true fashion comes from within,
                  and it's all about embracing your unique self.
                </p>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start cursor-pointer">
                <Link
                  to="/home"
                  className="bg-white text-black font-bold rounded-[1.3rem] px-4 py-4 text-sm shadow-md hover:bg-gray-300 transition-all"
                >
                  Get started
                </Link>
                <a
                  href="#"
                  className="text-white cursor-pointer relative text-4xl hover:text-gray-300 transition-colors"
                >
                  <Play className="w-10 h-10" />
                </a>
              </div>
              <div>
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="flex flex-col-reverse">
                    <dt className="text-[10px] leading-7 text-gray-400">
                      New Customers
                    </dt>
                    <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                      300+
                    </dd>
                  </div>
                  <div className="flex flex-col-reverse">
                    <dt className="text-[10px] leading-7 text-gray-400">
                      Products Sold
                    </dt>
                    <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                      200+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div>
            <div className="relative isolate lg:pt-0">
              <div className="relative top-[8rem] h-[35rem] w-[55rem] overflow-hidden rounded-[150px] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
                  alt="Fashion Background"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* Product Card 1 */}
              <div className="flex space-x-4 cursor-pointer">
                <div>
                  <div className="absolute top-[6rem] right-[5rem] h-[26rem] w-[20rem] overflow-hidden rounded-[88px] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce">
                    <div className="absolute top-2 left-2 h-[19rem] w-[19rem] overflow-hidden rounded-[78px] bg-gray-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                      <img
                        src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&q=80&w=800"
                        alt="Italian Coat"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="flex flex-1 text-3xl font-bold leading-9 tracking-tight relative top-[21rem] left-2 mx-[4rem] text-black border border-gray-600 pb-2 pt-2 pr-2 pl-4 rounded-[1.3rem]">
                      Italian Coat
                    </h1>
                  </div>
                  <div className="z-50 absolute top-[26rem] right-[21rem] h-[8rem] w-[8rem] overflow-hidden rounded-[84px] bg-gray-500 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-delayed flex justify-center items-center">
                    <h1 className="flex text-4xl font-bold leading-9 tracking-tight ml-6 text-white">
                      10% OFF
                    </h1>
                  </div>
                </div>
              </div>
              {/* Product Card 2 */}
              <div className="absolute right-[28rem] top-5 scale-75">
                <div className="flex space-x-4 cursor-pointer">
                  <div>
                    <div className="absolute top-[6rem] right-[5rem] h-[26rem] w-[20rem] overflow-hidden rounded-[88px] bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce">
                      <div className="absolute top-2 left-2 h-[19rem] w-[19rem] overflow-hidden rounded-[78px] bg-gray-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1">
                        <img
                          src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"
                          alt="Shorts"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h1 className="flex flex-1 text-3xl font-bold leading-9 tracking-tight relative top-[21rem] left-2 mx-[4rem] text-black border border-gray-600 pb-2 pt-2 pr-2 pl-4 rounded-[1.3rem]">
                        Shorts
                      </h1>
                    </div>
                    <div className="z-50 absolute top-[26rem] right-[21rem] h-[8rem] w-[8rem] overflow-hidden rounded-[84px] bg-gray-500 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-bounce-delayed flex justify-center items-center">
                      <h1 className="flex text-4xl font-bold leading-9 tracking-tight ml-6 text-white">
                        15% OFF
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="relative overflow-hidden bg-black max-h-full">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Step into the world of ONCY TECH
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                where we encourage you to break free from the ordinary and
                embrace your own unique fashion journey
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="group grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-scroll">
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem] sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 1"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 2"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 3"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[20rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 4"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 animate-scroll">
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 5"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 6"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 7"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-[30rem] w-[20rem] overflow-hidden rounded-[2rem]">
                          <img
                            src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=800"
                            alt="Fashion 8"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to="/home"
                  className="inline-block rounded-[1.3rem] border border-transparent bg-white px-14 py-5 text-center font-medium text-black hover:bg-gray-200 transition-colors"
                >
                  <div className="text-black text-lg flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes bounce-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-100%);
          }
        }

        .animate-bounce {
          animation: bounce 3s infinite ease-in-out;
        }

        .animate-bounce-delayed {
          animation: bounce-delayed 2.8s infinite ease-in-out;
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;
