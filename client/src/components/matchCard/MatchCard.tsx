import { useRef, useState } from 'react';
import { Grant } from '../../typings';
import formatNumbers from '../../utils/formatNumbers.ts';
import formatDate from '../../utils/formatDate.ts';
import formatLocation from '../../utils/formatLocation.ts';
import formatAreaOfFunding from '../../utils/formatAreaOfFunding.tsx';
import defaultLogo from '../../utils/defaultLogo.tsx';
import { useMutation } from '@apollo/client';
import { SUBMIT_FEEDBACK } from '../../graphql/submitFeedback.ts';
import { GRANTS, NEW_MATCHES } from '../../graphql/grants.ts';

export default function MatchCard({ cardData }: { cardData: Grant }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [positiveFeedback, setPositiveFeedback] = useState(true);
  const logo = useRef(defaultLogo(cardData.logoUrl, cardData.name));

  const [submitFeedback, { data }] = useMutation(SUBMIT_FEEDBACK, {
    fetchPolicy: 'network-only',
    refetchQueries: [NEW_MATCHES, GRANTS],
    variables: {
      submitFeedbackInput: {
        grantId: cardData.id,
        feedbackBody: feedback,
        positive: positiveFeedback,
      },
    },
  });
  console.log(data);
  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };
  const rateMatch = (positive: boolean) => {
    setPositiveFeedback(positive);
    setDisplayModal(true);
  };
  const cancelFeedback = () => {
    setDisplayModal(false);
    setFeedback('');
  };
  const handleFeedback = () => {
    submitFeedback();
    setDisplayModal(false);
  };
  return (
    <div
      className="relative m-2 max-w-[350px]"
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <div
        className={`flex flex-col border rounded-2xl p-5 h-full ${
          isMouseOver ? 'border-amber-500' : 'border-gray-500'
        }`}
      >
        <div className="flex justify-between pb-1 my-2 items-center">
          {logo.current}
          <div>
            <button
              className="border rounded-md border-gray-500 p-1 m-1"
              onClick={() => rateMatch(true)}
            >
              <img
                alt="thumbs-up"
                src="./icon-thumbs-up.svg"
                width="35"
                height="35"
              />
            </button>
            <button
              className="border rounded-md border-gray-500 p-1 m-1"
              onClick={() => rateMatch(false)}
            >
              <img
                alt="thumbs-down"
                src="./icon-thumbs-down.svg"
                width="35"
                height="35"
              />
            </button>
          </div>
        </div>
        <p className="font-bold text-sm">{cardData.foundationName}</p>
        <h2 className="font-bold text-xl my-2 mb-4">{cardData.name}</h2>
        <div className="flex justify-evenly">
          <div className="bg-orange-100 rounded-2xl min-h-36 p-4 w-full mr-1 flex flex-col justify-between">
            <img
              src="./icon-package.svg"
              alt="icon-package"
              width="25"
              height="25"
            />
            <div>
              <p className="font-bold text-xl text-orange-500">
                {formatNumbers(cardData.averageAmount)}
              </p>
              <p className="text-sm font-bold">Avg Amount</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 w-full ml-1 flex flex-col justify-evenly">
            <div>
              <p className="text-gray-400 text-sm">Deadline</p>
              <p className="font-bold text-sm">
                {formatDate(cardData.deadline)}
              </p>
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
          <p className="text-md">{formatLocation(cardData.location)}</p>
        </div>
        {/*<div className="flex justify-between mt-3">*/}
        <p className="text-gray-400 text-md mt-3">Area of Funding</p>
        <div className="flex flex-wrap">
          {formatAreaOfFunding(cardData.areaOfFunding)}
        </div>
      </div>
      {isMouseOver && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-2 flex items-end justify-center">
          <button className="bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 rounded-md w-full mb-1 mx-3 shadow-[0_-50px_90px_100px_rgba(255,255,255,.5)]">
            Apply here
          </button>
        </div>
      )}
      {displayModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-white p-4 w-1/2 rounded-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-3xl">Feedback</h3>
                <button
                  className="p-1 border-0 text-black text-3xl font-semibold "
                  onClick={() => setDisplayModal(false)}
                >
                  <span className="text-black text-3xl">×</span>
                </button>
              </div>
              <div className="py-4">
                <textarea
                  onChange={(e) => setFeedback(e.target.value)}
                  value={feedback}
                  id="message"
                  rows={10}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={cancelFeedback}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handleFeedback}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
}
