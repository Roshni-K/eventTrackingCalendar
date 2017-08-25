import React from 'react';
import Calendar from './Calendar.js';
//import $ from 'jquery-ui';
//var Popular = require('./Popular');

class App extends React.Component {
  
  render() {
    let header= {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
      }
     const events= [
				{
					title: 'Meetup',
					start: '2017-08-03T13:00:00',
					constraint: 'availableForMeeting'
				},
				{
					title: 'Meeting',
					start: '2017-08-13T11:00:00',
					constraint: 'availableForMeeting', // defined below
					color: '#257e4a'
				},
				{
					title: 'Conference',
					start: '2017-08-18',
					end: '2017-08-20'
				},
				{
					title: 'Party',
					start: '2017-08-29T20:00:00'
				},
				// areas where "Meeting" must be dropped
				{
					id: 'availableForMeeting',
					start: '2017-08-11T10:00:00',
					end: '2017-08-11T16:00:00',
					rendering: 'background'
				},
				{
					id: 'availableForMeeting',
					start: '2017-08-13T10:00:00',
					end: '2017-08-13T16:00:00',
					rendering: 'background'
				},
				// red areas where no events can be dropped
				{
					start: '2017-08-24',
					end: '2017-08-28',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				},
				{
					start: '2017-08-06',
					end: '2017-08-08',
					overlap: false,
					rendering: 'background',
					color: '#ff9f89'
				}
			] 
    return <div>
      <Calendar 
      header={header}
      events = {events}
      /></div>;
  }
}

/*
 * A simple React component
 */
// class Calendar extends React.Component {
//   render() {
//     return <div id="calendar"></div>;
//   }
//   componentDidMount() {
//     $('#calendar').fullCalendar({
// 			header: {
// 				left: 'prev,next today',
// 				center: 'title',
// 				right: 'month,agendaWeek,agendaDay'
// 			},
// 			editable: true,
// 			droppable: true, // this allows things to be dropped onto the calendar
// 			drop: function() {
// 				// is the "remove after drop" checkbox checked?
// 				if ($('#drop-remove').is(':checked')) {
// 					// if so, remove the element from the "Draggable Events" list
// 					$(this).remove();
// 				}
// 			}
//     })
//   }
// }

// class External extends React.Component {
//   render() {
//     return <div id='external-events'>
// 			<h4>Draggable Events</h4>
// 			<div className='fc-event'>My Event 1</div>
// 			<div className='fc-event'>My Event 2</div>
// 			<div className='fc-event'>My Event 3</div>
// 			<div className='fc-event'>My Event 4</div>
// 			<div className='fc-event'>My Event 5</div>
// 			<p>
// 				<input type='checkbox' id='drop-remove' />
// 				<label for='drop-remove'>remove after drop</label>
// 			</p>
// 		</div>;
//   }
//   componentDidMount() {
// 		$('#external-events .fc-event').each(function() {

// 			// store data so the calendar knows to render an event upon drop
// 			$(this).data('event', {
// 				title: $.trim($(this).text()), // use the element's text as the event title
// 				stick: true // maintain when user navigates (see docs on the renderEvent method)
// 			});

// 			// make the event draggable using jQuery UI
// 			// $(this).draggable({
// 			// 	zIndex: 999,
// 			// 	revert: true,      // will cause the event to go back to its
// 			// 	revertDuration: 0  //  original position after the drag
// 			// });
// 		});
//   }
// }


module.exports = App;