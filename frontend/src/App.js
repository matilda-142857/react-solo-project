import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import UploadForm from "./components/UploadFormPage/UploadFormPage";
import UpdateForm from "./components/UpdateFormPage/UpdateFormPage";
import AboutMe from "./components/About/about";
// import Splash from "./components/Splash/splash";
import Navigation from "./components/Navigation";
import SongPage from "./components/SongPage/SongPage";
import AllSongs from "./components/AllSongs/AllSongs";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/upload">
            <UploadForm />
          </Route>
          {/* <Route exact path="/splash">
            <Splash />
          </Route> */}
          <Route exact path='/song/edit/:songId'>
            <UpdateForm />
          </Route>
          <Route path="/songs/:songId">
            <SongPage />
          </Route>
          <Route exact path="/songs">
            <AllSongs />
          </Route>
          <Route path="/songs/:songId">
            <SongPage isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;