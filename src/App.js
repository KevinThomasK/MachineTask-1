import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Addons, FAQ, Perks, Support, SharedLayout, Dash } from "./dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Dash />} />
          <Route path="add-ons" element={<Addons />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="perks" element={<Perks />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
