import React, { Component } from 'react'
//package 1:
import AddToCalendar from 'react-add-to-calendar';
//package 2:
import AddToCalendarHOC from 'react-add-to-calendar-hoc';
import moment from 'moment';

export class NotWorkingGoodExample extends Component {
    render() {
        //package 1:
    let event = {
        title: 'Sample Event',
        description: 'This is the sample event provided as an example only',
        location: 'Portland, OR',
        startTime: '2019-08-22T20:15:00-04:00',
        endTime: '2019-08-22T21:45:00-04:00'
        // start: {
        //    "date": '2019-08-22T20:15:00-04:00',
        //   "dateTime": '2019-08-22T20:15:00-04:00',
        //   // "timeZone": string
        // },
        // end: {
        //   // "date": date,
        //   "dateTime": '2019-08-22T21:45:00-04:00',
        //   // "timeZone": string
        // } 
        
      }
  
      /* object property can be any 'Font Awesome' icon and value can be 'left' or 'right' */
      let icon = { 'calendar-plus-o': 'left' };
  
    //   let items = [
    //     { outlook: 'Outlook' },
    //     { outlookcom: 'Outlook.com' },
    //     { apple: 'iCal' },
    //     { yahoo: 'Yahoo!' },
    //     { google: 'Google' }
    //  ];

    /* package 2:
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

    const startDatetime = moment().utc().add(2, 'days');
    const endDatetime = startDatetime.clone().add(2, 'hours');
    const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
    const event = {
      description: 'Description of event. Going to have a lot of fun doing things that we scheduled ahead of time.',
      duration,
      endDatetime: endDatetime.format('YYYYMMDDTHHmmssZ'),
      location: 'NYC',
      startDatetime: startDatetime.format('YYYYMMDDTHHmmssZ'),
      title: 'Super Fun Event',
    }

    */
  
    
        return (
            <div>
                {/* 
                    package 1: this is good if i whant "text" = ""Add to My Calendar
                    but if i want JUSt icon it is not good example
                */}
                <AddToCalendar 
                    event={event} 
                    // buttonLabel="Put on my calendar"
                    buttonTemplate={icon} 
                    // document.getElementsByClassName("react-add-to-calendar__icon--left fa fa-calendar-plus-o")[0].nextSibling.data = "" 
                    // +style => ul= list-style-type: none;  margin: 0;  padding-inline-start: 20px;  list-style-type: none;
                    //
                    // listItems={items}
                />
                <hr/>


                {/* Example 3: */}
                <ul className="dropdown" className="dropdown-toggle" data-toggle="dropdown">Dropdown 
                    {/* <li className="dropdown"> */}
                        <i className="fa fa-calendar-plus"></i>
                        {/* <a href="#" ></a> */}
                        <ul class="dropdown-menu">
                            <li><a href="https://google.com"><i className="fa fa-google"></i>google</a></li>
                            <li><a href="https://calendar.yahoo.com/"><i className="fa fa-yahoo"></i>Yahoo</a></li>
                            <li><a href="https://outlook.live.com/owa/"><i className="fa fa-windows"></i>Outlook</a></li>
                            {/* <li><a href="https://support.apple.com/he-il/guide/calendar/welcome/mac"><i className="fa -apple"></i>Apple</a></li> */}
                        </ul>
                    {/* </li> */}
                </ul>

                <hr/>

                {/*package 2:
                <AddToCalendarDropdown
                    className={componentStyles}
                    className="app"
                    linkProps={{ className: linkStyles }}
                    event={event}
                    buttonText="Custom Button Text"
                /> */}
            </div>
        )
    }
}

export default NotWorkingGoodExample
