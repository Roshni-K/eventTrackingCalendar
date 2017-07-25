import React from 'react';
import fullCalendar from 'fullcalendar';
import $ from 'jquery';
import css from '../../node_modules/fullcalendar/dist/fullcalendar.css';

class Calendar extends React.Component {
  render() {
    return <div id="calendar"></div>;
  }
  componentDidMount() {
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			}
    })
  }
}

module.exports = Calendar;