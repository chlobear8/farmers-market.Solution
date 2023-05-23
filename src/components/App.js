import React from "react";
import Header from "./Header";
import MarketScheduleControl from "./MarketScheduleControl";
import SeasonalProduceControl from "./SeasonalProduceControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketScheduleControl />
      <SeasonalProduceControl />
    </React.Fragment>
  );
}

export default App;
