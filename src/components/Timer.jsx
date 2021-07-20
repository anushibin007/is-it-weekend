import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import dayjs from "dayjs";
import Firebase from "../Firebase";

const Timer = (props) => {
	const [weekendData, setWeekendData] = useState({});

	let dayOfTheWeek = props.dayOfTheWeek;

	useEffect(() => {
		Firebase.init();
	}, []);

	useEffect(() => {
		populateWeekendData();
		const interval = setInterval(() => {
			populateWeekendData();
		}, 1000);
		return () => clearInterval(interval);
	}, [props.dayOfTheWeek]);

	const populateWeekendData = () => {
		const nextWeekend = nextDate(dayOfTheWeek);

		const now = new Date();

		const nowInDayjs = dayjs(now).second(now.getSeconds());

		const nextWeekendInDayjs = dayjs(nextWeekend);

		const timeTillNextWeekendMs = nextWeekendInDayjs.diff(nowInDayjs);

		const timeTillNextWeekendDays = nextWeekendInDayjs.diff(nowInDayjs, "days");

		const timeTillNextWeekendHours = nextWeekendInDayjs.diff(nowInDayjs, "hours");

		const timeTillNextWeekendMinutes = nextWeekendInDayjs.diff(nowInDayjs, "minutes");

		const timeTillNextWeekendSeconds = nextWeekendInDayjs.diff(nowInDayjs, "seconds");

		setWeekendData({ nextWeekend, timeTillNextWeekendMs, timeTillNextWeekendDays, timeTillNextWeekendHours, timeTillNextWeekendMinutes, timeTillNextWeekendSeconds });
	};

	useEffect(() => {
		dayOfTheWeek = props.dayOfTheWeek;
	}, [props.dayOfTheWeek]);

	const nextDate = (dayIndex) => {
		var today = new Date();
		today.setDate(today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1);
		today.setHours(17, 30, 0, 0);
		return today;
	};
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h1 className="weekendNext line1">Next weekend is on:</h1>
					<h1 className="weekendNext line2">{weekendData.nextWeekend && weekendData.nextWeekend.toLocaleString()}</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="daysRemaining line1">Days till next weekend:</h1>
					<h1 className="daysRemaining line2">{weekendData.timeTillNextWeekendDays}</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="hoursRemaining line1">Hours till next weekend:</h1>
					<h1 className="hoursRemaining line2">{weekendData.timeTillNextWeekendHours}</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="minutesRemaining line1">Minutes till next weekend:</h1>
					<h1 className="minutesRemaining line2">{weekendData.timeTillNextWeekendMinutes}</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1 className="secondsRemaining line1">Seconds till next weekend:</h1>
					<h1 className="secondsRemaining line2">{weekendData.timeTillNextWeekendSeconds}</h1>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default Timer;
