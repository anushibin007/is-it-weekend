import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import dayjs from "dayjs";

function App() {
	const [weekendData, setWeekendData] = useState({});

	// Saturday
	const dayOfTheWeek = 6;

	useEffect(() => {
		setTimeTillNextWeekend();
	}, []);

	useEffect(() => {
		// console.log(weekendData);
	}, [weekendData]);

	const setTimeTillNextWeekend = () => {
		setInterval(() => {
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
		}, 1000);
	};

	const nextDate = (dayIndex) => {
		var today = new Date();
		today.setDate(today.getDate() + ((dayIndex - 1 - today.getDay() + 7) % 7) + 1);
		today.setHours(17, 30, 0, 0);
		return today;
	};

	return (
		<Container>
			<h1 id="nextWeekend">Next weekend is on: {weekendData.nextWeekend && weekendData.nextWeekend.toLocaleString()}</h1>
			<h1>Days till next weekend: {weekendData.timeTillNextWeekendDays}</h1>
			<h1>Hours till next weekend: {weekendData.timeTillNextWeekendHours}</h1>
			<h1>Minutes till next weekend: {weekendData.timeTillNextWeekendMinutes}</h1>
			<h1>Seconds till next weekend: {weekendData.timeTillNextWeekendSeconds}</h1>
		</Container>
	);
}

export default App;
