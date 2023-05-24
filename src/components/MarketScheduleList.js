import React from "react";
import MarketSchedule from "./MarketSchedule";
import PropTypes from "prop-types";


const marketScheduleData = [  
  {  
     day: "Sunday",
     location: "Lents International",
     hours: "9:00am - 2:00pm",
     booth: "4A"
  },
  {  
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {  
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {  
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {  
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {  
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
 ];


//MarketScheduleList("Day")
//MarketScheduleData => get schedule that matches the day
//Call <MarketSchedule > for that day
 function MarketScheduleList(props){
  return (
    <React.Fragment>
      {marketScheduleData.filter(schedule => schedule.day === props.inputDay).map((schedule, index) =>
         <MarketSchedule day={schedule.day}
            location={schedule.location}
            hours={schedule.hours}
            booth={schedule.booth}
            key={index}/>
     )}
    </React.Fragment>
  );
 }

 MarketScheduleList.propTypes = {
   inputDay: PropTypes.string
 };

 export default MarketScheduleList;
