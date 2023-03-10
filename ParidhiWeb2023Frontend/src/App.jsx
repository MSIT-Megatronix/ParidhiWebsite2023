// import "./App.css";
import React from "react";
import PreLoader from "./Components/HomePage/components/PreLoader";
import { PageLoader } from "./Components/HomePage/components/PreLoader";
// import HomeMain from "./Components/HomePage/HomeMain";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarMain from "./Components/Navbar/NavbarMain";
import EventsMain from "./Components/EventsPage/EventsMain";
const LazyHome = React.lazy(() => import("./Components/HomePage/HomeMain"));
const LazyEvents = React.lazy(() =>
  import("./Components/EventsPage/EventsMain")
);
function App() {
  // return <HomeMain />;
  return (
    <>
      {/* <NavbarMain /> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<PreLoader />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <LazyEvents />
            </React.Suspense>
            // <EventsMain/>
          }
        />
        <Route
            path="/team"
            element={
              <React.Suspense fallback={<PageLoader />}>
                {/* <NavbarMain /> */}
              {/* <LazyEvents/> */}
              </React.Suspense>
            }
          />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
