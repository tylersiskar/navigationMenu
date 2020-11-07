import Header from './Header';

const menuItems = [
  "Teams", "Tickets", "Patriot Club", "Inside Athletics", "Fan Central"
];

const mensSports = [ 'Baseball', 'Basketball', 'Cross Country'];
const womensSports = [ 'Basketball', 'Cross Country'];

function App() {
  return (
    <Header menuItems={menuItems} mensSports={mensSports} womensSports={womensSports}/>
  );
}

export default App;
