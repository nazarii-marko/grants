export default function AllGrants() {
  return (
    <div className="overflow-x-auto sm:rounded-t-xl border border-gray-200">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-700 bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-5">
              Foundation name
            </th>
            <th scope="col" className="px-4 py-5">
              Grant name
            </th>
            <th scope="col" className="px-4 py-5">
              Average amount
            </th>
            <th scope="col" className="px-4 py-5">
              Status
            </th>
            <th scope="col" className="px-4 py-5">
              Deadline
            </th>
            <th scope="col" className="px-4 py-5">
              Match date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50 border border-gray-200">
            <td className="px-4 py-5 text-gray-500 whitespace-nowrap border border-gray-200">
              Robinson Foundation
            </td>
            <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
              Robinson Foundation Grant
            </td>
            <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
              $25,000
            </td>
            <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
              <span className="bg-purple-300 text-purple-800 px-2 py-1 rounded-full">
                Applied
              </span>
            </td>
            <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
              January 1st
            </td>
            <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
              20 December 2024
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
