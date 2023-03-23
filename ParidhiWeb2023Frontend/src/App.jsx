// import "./App.css";
import React from "react";
import PreLoader from "./Components/HomePage/components/PreLoader";
import { PageLoader } from "./Components/HomePage/components/PreLoader";
import { Routes, Route } from "react-router-dom";
import TeamMain from "./Components/TeamPage/TeamMain";
import DomainEvents from "./Components/EventsPage/components/DomainEvents";
import CardDetailsFull from "./Components/EventsPage/components/CardDetailsFull";
import Workshop from "./Components/Workshop/Workshop";
import PreParidhiEventsMain from "./Components/PreParidhiEvents/PreParidhiEventsMain";
const LazyHome = React.lazy(() => import("./Components/HomePage/HomeMain"));
const LazyEvents = React.lazy(() =>
  import("./Components/EventsPage/EventsMain")
);
const LazyTeams = React.lazy(() =>
  import("./Components/TeamPage/TeamMain")
);
function App() {
  return (
    <>
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
              <LazyTeams />
            </React.Suspense>
          }
        />
        <Route
          path="/pre_paridhi_events"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <PreParidhiEventsMain />
            </React.Suspense>
          }
        />
        <Route
          path="/workshop"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <Workshop />
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
        
      </Routes>
    </>
  );
}

export default App;
