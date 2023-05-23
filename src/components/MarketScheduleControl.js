import React from "react";
import MarketList from "./MarketScheduleList";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

class MarketScheduleControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scheduleVisibleOnPage: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            scheduleVisibleOnPage: !prevState.scheduleVisibleOnPage
        }));
    }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.scheduleVisibleOnPage) {
            currentlyVisibleState = <SeasonalProduce />;
            buttonText = "Go to market schedule";
        } else {
            currentlyVisibleState = <MarketSchedule />;
            buttonText = "Go to seasonal schedule";
        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>

        );


    }
}

export default MarketScheduleControl;