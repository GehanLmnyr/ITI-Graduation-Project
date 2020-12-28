import * as React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject } from '@syncfusion/ej2-react-schedule';
import { SampleBase } from '../sample-base';
import axios from 'axios';
import { extend } from "@syncfusion/ej2-base";
import { toast } from 'react-toastify';


const API_URL = 'https://pet-care-iti.herokuapp.com/api/reservations';



const Delete=document.getElementsByClassName('e-quick-dialog-delete')
export class RemoteData extends SampleBase {
  constructor() {
    super(...arguments);
    this.state = {
      schedule: [],
      eventId:''    
    }
  }

  async componentDidMount() {
    Delete.onClick=()=>{
      
        axios.delete(
        `${API_URL}/${this.state.eventId}`,
        {
          headers: {
            Authorization: this.props.doctorToken ,
          },
        }
      )
      toast.success('Reservation Deleted')
    }
    let { data } = await axios.get(API_URL, { headers: { "Authorization": this.props.doctorToken } })
    let result=[]; 
    data.data.forEach((r)=>{
      console.log(r)
      let dt = new Date(r.date);
      result.push({name:r.user.name,phone:r.user.phone,date:r.date,id:r.id,endDate:new Date(dt.setHours( dt.getHours()+1 )),address:r.user.address,title: r.services.map((elem)=>{return elem.title}).join(" , ")})
      }
    )
    this.setState({schedule:result})
    console.log(this.state.schedule)
  };


  popupOpen=(args)=> {
    // debugger
    if (
      args.type === "QuickInfo" &&
      args.element.querySelector(".e-popup-header").querySelector(".e-edit")
    ){
      args.element
      .querySelector(".e-popup-header")
      .querySelector(".e-edit").ej2_instances[0].disabled = true;
    }
  }
 
  render() {
   
    console.log(this.state.eventId)
    return (<div className='schedule-control-section'>
      <div className='control-section'>
        <div className='control-wrapper'>
          <ScheduleComponent
            width='100%'
            height='450px'
            selectedDate={new Date().now}
            eventSettings={{ 
              dataSource: extend([], this.state.schedule, null, true) ,
              fields:{
               id:{name:'id'},
               startTime:{name:'date'}, 
               endTime:{name:'endDate'},
               subject:{name:'name'},
               description:{name:'title'},
               location:{name:'address'},
               note:{name:'phone'},
             }
            }}
            cssClass='schedule-cell-dimension'
            showWeekend={false}
            workDays={[0, 1, 2, 3, 4]}
            startHour='07:00'
            endHour='16:00'
            popupOpen={this.popupOpen.bind(this)}
            firstDayOfWeek={0}
            // readonly={true}
            minDate={new Date().now}
            maxDate={new Date(2022, 5, 17)}
            timeScale={{ enable: true, interval: 60, slotCount: 1 }}
            showTimeIndicator={false}
            cellClick={false}
            cellDoubleClick={false}

            
            actionComplete={(e)=>{
              // console.log(e)
              if(e.deletedRecords){
                axios.delete(
                  `${API_URL}/${this.state.eventId}`,
                  {
                    headers: {
                      Authorization: this.props.doctorToken ,
                    },
                  }
                )
                alert('success')
              }
            }}
          >
            <Inject services={[Day, Week, WorkWeek, Month]} />
          </ScheduleComponent>
        </div>
      </div>
    </div>);
  }
}
