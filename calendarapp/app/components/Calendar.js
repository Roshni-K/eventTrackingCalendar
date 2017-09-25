import React from 'react';
import fullCalendar from 'fullcalendar';
import $ from 'jquery';
import css from '../../node_modules/fullcalendar/dist/fullcalendar.css';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		this.addEvent = this.addEvent.bind(this);
	}

	componentDidMount() {
		this.addEvent(this.props);
	}
	shouldComponentUpdate(nextProps) {
		if (this.props !== nextProps) {
			return true;
		} else {
			return false;
		}
	}
	componentWillUpdate(nextProps) {
		this.addEvent(nextProps);
	}
	componentWillUnmount() {
		const { calendar } = this.refs;
		$(calendar).fullCalendar('destroy');
	}
	addEvent(props) {
		const { calendar } = this.refs;
		$(calendar).fullCalendar('destroy');
		$(calendar).fullCalendar({
			header: props.header,
			editable: props.editable,
			selectable: props.selectable,
			selectHelper: props.selectHelper,
			eventLimit: props.eventLimit,
			events: props.events,
			select: props.select
		});
	}
	render() {
		return <div ref="calendar"></div>;
	}
}

module.exports = Calendar;