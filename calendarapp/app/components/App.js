import React from 'react';
import Calendar from './Calendar.js';
import { Modal, Button, FormControl, ControlLabel, FormGroup } from 'react-bootstrap'
//import $ from 'jquery-ui';
//var Popular = require('./Popular');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventList: [],
			showModal: false,
			eventStartTime: null,
			eventEndTime: null,
			eventTitle: "",
		};
		this.createEvent = this.createEvent.bind(this);
		this.onSave = this.onSave.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.eventObject = null;
	}
	createEvent(start, end) {
		this.setState({
			showModal: true,
			eventStartTime: start,
			eventEndTime: end,
		});
	}
	handleChange(e) {
		this.setState({ eventTitle: e.target.value });
	}
	onSave() {
		let eventData;
		if (this.state.eventTitle) {
			eventData = {
				title: this.state.eventTitle,
				start: this.state.eventStartTime,
				end: this.state.eventEndTime
			}
			this.eventObject = this.state.eventList;
			this.eventObject.push(eventData);
			this.setState({
				eventList: this.eventObject,
				showModal: false,
				eventTitle: null,
			});
		}
	}

	render() {
		let header = {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		}
		return <div>
			<Calendar
				header={header}
				events={this.state.eventList}
				editable
				selectable
				selectHelper
				eventLimit
				select={this.createEvent}
			/>
			{this.state.showModal && <Modal.Dialog>
				<Modal.Header>
					<Modal.Title>Add New Event</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<FormGroup>
						<ControlLabel className={'pull-left'} >Event Title</ControlLabel>
						<FormControl
							type="text"
							value={this.state.eventTitle}
							placeholder="Add New Event"
							onChange={this.handleChange}
						/>
						<ControlLabel className={'pull-left'} >Start Date</ControlLabel>
						{' '}
						<FormControl type="<text></text>" value={this.state.eventStartTime} placeholder="Start Date" />
						<ControlLabel className={'pull-left'}>End Date</ControlLabel>
						{' '}
						<FormControl type="text" value={this.state.eventEndTime} placeholder="End Date" />
					</FormGroup>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={() => { this.setState({ showModal: false, }) }}>Close</Button>
					<Button bsStyle="primary" onClick={this.onSave}>Add Event</Button>
				</Modal.Footer>

			</Modal.Dialog>}
		</div>;
	}
}
module.exports = App;