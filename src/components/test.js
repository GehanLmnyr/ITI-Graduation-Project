// const { render } = require("@testing-library/react");

// Set working days
// in state===>  this.workingDays = [1, 3, 5];
// in ScheduleComponent===>  workDays={this.workingDays}


// Hiding weekend days
// in ScheduleComponent===>  showWeekend={false} workDays={[1, 3, 4, 5]} //workind days static 1==>monday


// Set working hours
// in ScheduleComponent===>  workHours={{highlight: true, start: '11:00', end: '20:00'}}


// Scheduler displaying custom hours
// in ScheduleComponent===>  startHour='07:00' endHour='18:00' //بتحدد بس الساعات المتاحه


// Scroll to specific time and date
// in import ===>import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
// before render===>      
// onChange(args) {
//   this.scheduleObj.scrollTo(args.text);
// }
// before ScheduleComponent===>
// <div className='property-section'>
// <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
//   <tbody>
//     <tr style={{ height: '50px' }}>
//       <td style={{ width: '30%' }}>
//         <div className='col-md-4' style={{ paddingTop: '8px' }}>Scroll To</div>
//       </td>
//       <td style={{ width: '70%' }}>
//         <div>
//           <TimePickerComponent width={100} value={new Date(2000, 0, 1, 9)} format='HH:mm' change={this.onChange.bind(this)}></TimePickerComponent>
//         </div>
//       </td>
//     </tr>
//   </tbody>
// </table>
// </div>





















// if(currentVet){
//       return (
//         <div className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <Link to={"/profile"} className="nav-link">
//               {currentVet.data.name}
//             </Link>
//           </li>
//           <li className="nav-item borderRight">
//             <a href="/login" className="nav-link" onClick={this.logOutVet}>
//               LogOut
//             </a>
//           </li>
//         </div>
//       )
//     }else if(currentUser){
//     return (
//       <div className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link to={"/profile"} className="nav-link">
//             {currentUser.data.name}
//           </Link>
//         </li>
//         <li className="nav-item borderRight">
//           <a href="/login" className="nav-link" onClick={this.logOut}>
//             LogOut
//           </a>
//         </li>
//       </div>
//     )} else{
//     return (
//       <div className="navbar-nav ml-auto">
//         <li className="nav-item">
//           <Link to={"/login"} className="nav-link">
//             Login
//           </Link>
//         </li>
    
//         <li className="nav-item borderRight">
//           <Link to={"/register"} className="nav-link">
//             Sign Up
//           </Link>
//         </li>
//       </div>
//     )
//     }
    




    (<div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
    </div>)





