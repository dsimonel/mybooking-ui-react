import React, { Suspense, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
