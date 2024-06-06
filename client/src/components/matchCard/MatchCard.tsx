import { useEffect, useRef, useState } from 'react';

export default function MatchCard() {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const card = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // eslint:disable-next-line @typescript-eslint/no-explicit-any
    const listenerOver: any = card.current?.addEventListener(
      'mouseover',
      () => {
        setIsMouseOver(true);
      },
    );
    // eslint:disable-next-line @typescript-eslint/no-explicit-any
    const listenerOut: any = card.current?.addEventListener(
      'mouseleave',
      () => {
        setIsMouseOver(false);
      },
    );
    return () => {
      card.current?.removeEventListener('mouseover', listenerOver);
      card.current?.removeEventListener('mouseleave', listenerOut);
    };
  }, []);
  return (
    <div ref={card} className="relative m-2 max-w-xs">
      <div className="flex flex-col border rounded-2xl hover:border-amber-500 border-gray-500 p-5">
        <div className="flex justify-between pb-1 my-2">
          <img src="./vite.svg" width="35" height="35" />
          <div>
            <button className="border rounded-md border-gray-500 p-1 m-1">
              <img src="./icon-thumbs-up.svg" width="35" height="35" />
            </button>
            <button className="border rounded-md border-gray-500 p-1 m-1">
              <img src="./icon-thumbs-down.svg" width="35" height="35" />
            </button>
          </div>
        </div>
        <p className="font-bold text-sm">Robinson Foundation</p>
        <h2 className="font-bold text-xl my-2 mb-4">
          Robinson Foundation Grant
        </h2>
        <div className="flex justify-evenly">
          <div className="bg-orange-100 rounded-2xl min-h-36 p-4 w-full mr-1 flex flex-col justify-between">
            <img src="./icon-package.svg" width="25" height="25" />
            <div>
              <p className="font-bold text-xl text-orange-500">$25,000</p>
              <p className="text-sm">Avg Amount</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 w-full ml-1 flex flex-col justify-evenly">
            <div>
              <p className="text-gray-400 text-sm">Deadline</p>
              <p className="font-bold text-sm">January 1st</p>
            </div>
            <hr />
            <div>
              <p className="text-gray-400 text-sm">Getting Started</p>
              <p className="font-bold text-sm">Apply Online</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-gray-400 text-md">Location</p>
          <p className="text-md">Wilmington, Delaware</p>
        </div>
        {/*<div className="flex justify-between mt-3">*/}
        <p className="text-gray-400 text-md mt-3">Area of Funding</p>
        <div className="flex flex-wrap">
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            Public Health Women
          </p>
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            Culture Food
          </p>
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            Public Health Women
          </p>
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            Culture Food
          </p>
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            Environment Art
          </p>
          <p className="text-md rounded-3xl bg-gray-100 w-auto m-1 px-3 py-1">
            +3
          </p>
        </div>
      </div>
      {isMouseOver && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-2 flex items-end justify-center">
          {/*<div className="bg-gradient-to-t from-white h-full w-full ">*/}
          <button className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md w-full mb-1 mx-3 shadow-[0_-50px_90px_100px_rgba(255,255,255,.5)]">
            Apply here
          </button>
          {/*</div>*/}
        </div>
      )}
    </div>
  );
}
