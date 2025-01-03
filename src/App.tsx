import { BrowserRouter } from "react-router-dom";
import "./assets/translate/i18next";
import PagesLayot from "./layout/PagesLayot";
import ManagementRoute from "./routes/route";
import { CacheProvider } from "@emotion/react";
import useLanguages from "./shared/hooks/useLanguages";

const App = () => {
  const { cache } = useLanguages();
  return (
    <CacheProvider value={cache}>
      <PagesLayot>
        <BrowserRouter>
          <ManagementRoute />
        </BrowserRouter>
      </PagesLayot>
    </CacheProvider>
  );
};

export default App;
