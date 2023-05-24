import React from "react";
import SeasonalProduceList from "./SeasonalProduceList";
import SeasonalProduce from "./SeasonalProduce";

class SeasonalProduceControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonalProduceVisibleOnPage: false,
      chooseVisibleMonth: null
    };
  }
    
  
  chooseMonth = (inputMonth) => {
    this.setState({chooseVisibleMonth: inputMonth});
  }

  render() {
    let formInputMonth = this.state.chooseVisibleMonth;

    return (
      <React.Fragment>
        <hr/>
          <button onClick={()=>{this.chooseMonth("January")}}>January</button>
          <button onClick={()=>{this.chooseMonth("February")}}>February</button>
          <button onClick={()=>{this.chooseMonth("March")}}>March</button>
          <button onClick={()=>{this.chooseMonth("April")}}>April</button>
          <button onClick={()=>{this.chooseMonth("May")}}>May</button>
          <button onClick={()=>{this.chooseMonth("June")}}>June</button>
          <button onClick={()=>{this.chooseMonth("July")}}>July</button>
          <button onClick={()=>{this.chooseMonth("August")}}>August</button>
          <button onClick={()=>{this.chooseMonth("September")}}>September</button>
          <button onClick={()=>{this.chooseMonth("October")}}>October</button>
          <button onClick={()=>{this.chooseMonth("November")}}>November</button>
          <button onClick={()=>{this.chooseMonth("December")}}>December</button>
          <SeasonalProduceList inputMonth={formInputMonth}/>
      </React.Fragment>

     );
  }
}

export default SeasonalProduceControl;