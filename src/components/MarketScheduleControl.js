import React from "react";
import MarketScheduleList from "./MarketScheduleList";
//import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

class MarketScheduleControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleVisibleOnPage: false,
            chooseScheduleDay : null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            scheduleVisibleOnPage: !prevState.scheduleVisibleOnPage
        }));
    }

    chooseDay = (formInput) => {
        {console.log(formInput)};
        this.setState({chooseScheduleDay: formInput});
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        let formInputDay = this.state.chooseScheduleDay;
        if (this.state.scheduleVisibleOnPage) {
            currentlyVisibleState = <SeasonalProduce />;
            buttonText = "Go to market schedule";
        } else {
            currentlyVisibleState = <MarketScheduleList inputDay={formInputDay}/>
            buttonText = "Go to seasonal schedule";
        }
        return (
            <React.Fragment>
                <button onClick={()=>{this.chooseDay("Monday")}}>Monday</button>
                <button onClick={()=>{this.chooseDay("Tuesday")}}>Tuesday</button>
                <button onClick={()=>{this.chooseDay("Wednesday")}}>Wednesday</button>
                <button onClick={()=>{this.chooseDay("Thursday")}}>Thursday</button>
                <button onClick={()=>{this.chooseDay("Friday")}}>Friday</button>
                <button onClick={()=>{this.chooseDay("Saturday")}}>Saturday</button>
                <button onClick={()=>{this.chooseDay("Sunday")}}>Sunday</button>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>

        );
    }
}

export default MarketScheduleControl;