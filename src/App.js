import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Photos from "./Components/Photos/Photos";
import CompareTable from "./Components/CompareTable/CompareTable";
import Navbar from "./Components/Navbar/Navbar";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchDataResponse } from "./Store/actions/Actions";

function App(props) {
  useEffect(() => {
    props.fetchingPhotos();
  });

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/comparison'>
            <Navbar />
            <CompareTable />
          </Route>
          <Route path='/'>
            <Navbar />
            <Photos />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingPhotos: () => dispatch(fetchDataResponse()),
    // comparingData: (data) => dispatch(AddingData(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
