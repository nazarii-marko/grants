import { useQuery } from '@apollo/client';
import { NEW_MATCHES } from '../../graphql/grants.ts';
import MatchCard from '../matchCard/MatchCard.tsx';
import { Grant } from '../../typings';

export default function MatchesList() {
  const { data, loading } = useQuery(NEW_MATCHES, {
    fetchPolicy: 'network-only',
  });
  return loading
    ? 'Loading...'
    : !!data?.newMatches?.length && (
        <div>
          <h2 className="font-bold mx-2 text-2xl">New Matches</h2>
          <div className="flex flex-wrap justify-center">
            {data.newMatches.map((grant: Grant) => {
              return <MatchCard key={grant.id} cardData={grant} />;
            })}
          </div>
        </div>
      );
}
