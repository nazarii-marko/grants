import AllGrants from './components/allGrants/AllGrants.tsx';
import MatchesList from './components/matchesList/MatchesList.tsx';

function App() {
  return (
    <div className="container mx-auto">
      <div>
        <MatchesList />
        <AllGrants />
      </div>
    </div>
  );
}

export default App;
