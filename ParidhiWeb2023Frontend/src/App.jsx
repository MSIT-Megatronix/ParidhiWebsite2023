// import "./App.css";
import React from "react";
import PreLoader from "./Components/HomePage/components/PreLoader";
import { PageLoader } from "./Components/HomePage/components/PreLoader";
// import HomeMain from "./Components/HomePage/HomeMain";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NavbarMain from "./Components/Navbar/NavbarMain";
import EventsMain from "./Components/EventsPage/EventsMain";
import TeamMain from "./Components/TeamPage/TeamMain";
import DomainEvents from "./Components/EventsPage/components/DomainEvents";
import CardDetailsFull from "./Components/EventsPage/components/CardDetailsFull";
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
              <TeamMain />
            </React.Suspense>
          }
        />
        <Route
          path="/events/robotics"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data={0} />
            </React.Suspense>
          }
        />
        <Route
          path="/events/coding"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data={0} />
            </React.Suspense>
          }
        />
        <Route
          path="/events/civil"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data="0" />
            </React.Suspense>
          }
        />
        <Route
          path="/events/electrical"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data="0" />
            </React.Suspense>
          }
        />
        <Route
          path="/events/general"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data="0" />
            </React.Suspense>
          }
        />
        <Route
          path="/events/gaming"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data="0" />
            </React.Suspense>
          }
        />
        <Route
          path="/events/robotics/:event"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <CardDetailsFull/>
            </React.Suspense>
          }
        />
        {/* <Route
          path="/events/robotics/supernova"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <DomainEvents data="0" />
            </React.Suspense>
          }
        /> */}
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
