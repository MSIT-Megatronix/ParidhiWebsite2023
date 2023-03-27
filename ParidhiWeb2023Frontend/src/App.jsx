// import "./App.css";
import React, { useState, useEffect } from "react";
import PreLoader from "./Components/HomePage/components/PreLoader";
import { PageLoader } from "./Components/HomePage/components/PreLoader";
import { Routes, Route } from "react-router-dom";
import TeamMain from "./Components/TeamPage/TeamMain";
import DomainEvents from "./Components/EventsPage/components/DomainEvents";
import CardDetailsFull from "./Components/EventsPage/components/CardDetailsFull";
import Workshop from "./Components/Workshop/Workshop";
import PreParidhiEventsMain from "./Components/PreParidhiEvents/PreParidhiEventsMain";
import NavbarMain from "./Components/Navbar/NavbarMain";
import PdfViewer from "./Components/EventsPage/components/PdfViewer";
import Sponsor from "./Components/Sponsor/Sponsor";
const LazyHome = React.lazy(() => import("./Components/HomePage/HomeMain"));
const LazyEvents = React.lazy(() =>
  import("./Components/EventsPage/EventsMain")
);
const LazyTeams = React.lazy(() => import("./Components/TeamPage/TeamMain"));
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
        {/* <Route
          path="/team"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <LazyTeams />
            </React.Suspense>
          }
        /> */}
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
          path="/sponsors"
          element={
            <React.Suspense fallback={<PageLoader />}>
              <Sponsor />
            </React.Suspense>
          }
        />
        <Route path="/events/:domain" element={<DomainEvents />} />
        <Route path="/events/:domain/:event" element={<CardDetailsFull />} />
        <Route
          path="/events/:domain/:event/viewpdf"
          element={<PdfViewer />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
