import { BrowserRouter } from "react-router-dom";
import "./assets/translate/i18next";
import PagesLayot from "./layout/PagesLayot";
import ManagementRoute from "./routes/route";

const App = () => {
  return (
    <PagesLayot>
      <BrowserRouter>
        <ManagementRoute />
      </BrowserRouter>
    </PagesLayot>
  );
};

export default App;
