import "./assets/translate/i18next";
import StolenBikesDisplay from "./feature/stolenBikes/pages/StolenBikesDisplay";
import PagesLayot from "./layout/PagesLayot";

const App = () => {
  return (
    <PagesLayot>
      <StolenBikesDisplay />
    </PagesLayot>
  );
};

export default App;
