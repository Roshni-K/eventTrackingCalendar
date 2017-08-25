import React from 'react';
import fullCalendar from 'fullcalendar';
import $ from 'jquery';
import css from '../../node_modules/fullcalendar/dist/fullcalendar.css';

class Calendar extends React.Component {
  
  componentDidMount() {
		const {calendar} = this.refs;
    $(calendar).fullCalendar({
			header: this.props.header,
			editable: true,
			selectable: true,
			selectHelper: true,
			editable: true,
			eventLimit: true,
			events: this.props.events,
			select: function(start, end) {
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$(calendar).fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$(calendar).fullCalendar('unselect');
			},
			 // allow "more" link when too many events
			
			// drop: function() {
			// 	// is the "remove after drop" checkbox checked?
			// 	if ($('#drop-remove').is(':checked')) {
			// 		// if so, remove the element from the "Draggable Events" list
			// 		$(this).remove();
			// 	}
			// }
    })
	}
render() {
    return <div ref="calendar"></div>;
  }
}

module.exports = Calendar;