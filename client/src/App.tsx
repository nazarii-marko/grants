import MatchCard from './components/matchCard/MatchCard.tsx';
import AllGrants from './components/allGrants/AllGrants.tsx';

function App() {
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="font-bold mx-2 text-2xl">New Matches</h2>
        <div className="flex flex-wrap justify-center">
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
        <AllGrants />
      </div>
    </div>
  );
}

export default App;
