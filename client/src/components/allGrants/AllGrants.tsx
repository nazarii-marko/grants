import { useQuery } from '@apollo/client';
import { GRANTS } from '../../graphql/grants.ts';
import { useState } from 'react';
import { Grant } from '../../typings';
import formatNumbers from '../../utils/formatNumbers.ts';
import formatStatus from '../../utils/formatStatus.tsx';
import formatDate from '../../utils/formatDate.ts';

export default function AllGrants() {
  const pageSize = 10;
  const [orderBy, setOrderBy] = useState('foundationName');
  const [orderDirection, setOrderDirection] = useState('asc');
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GRANTS, {
    variables: {
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: {
        field: orderBy,
        direction: orderDirection,
      },
    },
  });
  const handlePagination = (next: boolean = true) => {
    setPage((prev) => (next ? prev + 1 : prev - 1));
  };
  const handleOrderChange = (field: string) => {
    setOrderBy(field);
    setOrderDirection((prev) => {
      return prev === 'asc' ? 'desc' : 'asc';
    });
  };
  return loading && !data ? (
    'Loading...'
  ) : (
    <div className="overflow-x-auto sm:rounded-t-xl border border-gray-200">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-700 bg-gray-50 cursor-pointer">
          <tr>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('foundationName')}
            >
              Foundation name
            </th>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('name')}
            >
              Grant name
            </th>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('averageAmount')}
            >
              Average amount
            </th>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('status')}
            >
              Status
            </th>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('deadline')}
            >
              Deadline
            </th>
            <th
              scope="col"
              className="px-4 py-5"
              onClick={() => handleOrderChange('matchDate')}
            >
              Match date
            </th>
          </tr>
        </thead>
        <tbody>
          {data.grants?.grants?.map((grant: Grant) => (
            <tr
              key={grant.id}
              className="odd:bg-white even:bg-gray-50 border border-gray-200"
            >
              <td className="px-4 py-5 text-gray-500 whitespace-nowrap border border-gray-200">
                {grant.name}
              </td>
              <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
                {grant.foundationName}
              </td>
              <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
                {formatNumbers(grant.averageAmount)}
              </td>
              <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
                {formatStatus(grant.status)}
              </td>
              <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
                {formatDate(grant.deadline)}
              </td>
              <td className="px-4 py-5 font-medium text-gray-500 whitespace-nowrap border border-gray-200">
                {formatDate(grant.deadline, true)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.grants?.totalCount > pageSize && (
        <nav className="flex justify-end odd:bg-white even:bg-gray-50 px-4 py-3">
          <button
            onClick={() => handlePagination(false)}
            className={`flex disabled:bg-gray-300 disabled:cursor-not-allowed items-center justify-center px-3 h-8 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 active:text-gray-800 `}
            disabled={page === 1}
          >
            Previous
          </button>

          <button
            onClick={() => handlePagination(true)}
            disabled={data.grants?.totalCount < page * pageSize}
            className={`flex disabled:bg-gray-300 disabled:cursor-not-allowed items-center justify-center px-3 h-8 ms-3 text-sm text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 active:text-gray-800`}
          >
            Next
          </button>
        </nav>
      )}
    </div>
  );
}
