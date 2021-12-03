import React, { useEffect, useState } from 'react';
import AppRouter from './AppRouter';
import useGaTracker from '../useGaTracker';
import ReactGA from "react-ga";

const trackingId = "UA-162900800-1";
ReactGA.initialize(trackingId);

const App = () => {
    useGaTracker();

    return <AppRouter />
    
};
export default App;
