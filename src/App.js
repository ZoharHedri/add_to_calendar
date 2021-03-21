/*
  Component that add tasks to "Google calendar" & "Outlook calendar" (right now it working on Google calendar).
  Inspired by: 
    https://codepen.io/Ducan8x/pen/zWvbEv
    &
    https://codepen.io/Ducan8x/pen/zWvbEv

    Created at: august 22 2019 (22/8/19)
*/
import React, { Component } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CalendarToday from '@material-ui/icons/CalendarToday'

// import NotWorkingGoodExample from './NotWorkingGoodExample'

/*1 */
function _getUTCTime(dateObj, zone) {
  var newDateObj = _adjustToUTC(dateObj, zone);
  return _getDatePart(newDateObj.getFullYear(), 4) + _getDatePart(newDateObj.getMonth() + 1, 2) + _getDatePart(newDateObj.getDate(), 2) + 'T' + _getDatePart(newDateObj.getHours(), 2) + _getDatePart(newDateObj.getMinutes(), 2) + _getDatePart(newDateObj.getSeconds(), 2) + 'Z';
}

/*1.1 */
function _adjustToUTC(dateObj, zone) {
  var dateOut = new Date(dateObj),
    hours, mins;

  if (isNaN(dateOut.getTime())) {
    return new Date();
  }

  // adjust to UTC
  hours = zone.substring(1, 3);
  mins = zone.substring(4, 6);
  if (zone.substring(0, 1) === '-') {
    dateOut.setHours(dateOut.getHours() + (hours - 0));
    dateOut.setMinutes(dateOut.getMinutes() + (mins - 0));
  } else {
    dateOut.setHours(dateOut.getHours() - hours);
    dateOut.setMinutes(dateOut.getMinutes() - mins);
  }
  return dateOut;
}

/* */
function _getDatePart(part, digits) {
  part = part.toString();
  while (part.length < digits) {
    part = '0' + part;
  }
  return part;
}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      data: {
        "title": "Test the MK Tasks and Docs",
        "desc": "Test the MK Tasks and Docs",
        "location": "Location of MK",
        "time": {
          //  "start":"March 27, 2019 12:00:00",
          //  "end":"March 27, 2019 14:00:00",
          "start": new Date(),
          "end": new Date(),
          "zone": "+03:00" //if the time is: Oct 27.19 the "zoen" is "+01:00"
        },
        "organizer": {
          "name": "Quze",
          //  "email":"email@gmail.com"
        }
      }
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onOnClick = this.onOnClick.bind(this);
    this.getUrl_google = this.getUrl_google.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
    // setAnchorEl(null);
  }


  getUrl_google(data) {
    var url = 'https://www.google.com/calendar/render?action=TEMPLATE'; //insted 'event?' it is now 'render?' (21.3.21)
    url += '&text=' + encodeURIComponent(data.title);
    url += '&details=' + encodeURIComponent(data.desc);
    url += '&location=' + encodeURIComponent(data.location);
    url += '&dates=' + encodeURIComponent(_getUTCTime(data.time.start, data.time.zone) + '/' + _getUTCTime(data.time.end, data.time.zone));  // time needs to be sent as UTC and let Google handle converting to local
    // url += '&sprop=website:' + encodeURIComponent(data.url);
    // url += '&sprop=name:' + encodeURIComponent(data.organizer.name);
    return url;
  }



  onOnClick(event) {
    console.log(event.target.id)
    let type = event.target.id;
    var calendarLink = ""
    // var time = new Date()
    // console.log("time:", time)
    if (type === "Google") {
      // var googleLink = "https://www.google.com/calendar/render?action=TEMPLATE&text=test of Task123&dates=20190822T170000Z%2F20190822T180000Z";
      let googleData = this.getUrl_google(this.state.data)
      console.log("google data:", googleData);
      // calendarLink = "https://www.google.com/calendar/render?action=TEMPLATE&text=TiMedia&dates=20180710T170000Z%2F20180710T180000Z"; //%2F = \
      window.open(googleData)
    }
    else if (type === "Outlook") {
      calendarLink = "https://outlook.live.com/owa/"
      window.open(calendarLink)
    }
    // else {
    //   calendarLink = "https://calendar.yahoo.com"
    //   window.open(calendarLink)
    // }

    this.handleClose()
  }

  render() {
    return (
      <div className="app">
        Add to my calendar example
        {/*<hr/> <NotWorkingGoodExample/> */}
        <hr />
        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
          <CalendarToday color="primary" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.onOnClick} id="Google">Google</MenuItem>
          <MenuItem onClick={this.onOnClick} id="Outlook">Outlook</MenuItem>
          {/* <MenuItem onClick={onOnClick} id="Yahoo">Yahoo</MenuItem> */}
        </Menu>
      </div>
    )
  }
}

export default App;
