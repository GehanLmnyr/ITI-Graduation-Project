import React from 'react';
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule'
import { RemoteData } from './get.reservation';


const Schedule = ({doctorToken}) => {
    return ( 
    <div  id="schedule" className="mb-5">
        <RemoteData doctorToken={doctorToken}/> 
    </div>
    );
}
 
export default Schedule;