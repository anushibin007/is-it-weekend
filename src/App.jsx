import React, { useState } from "react";
import { Container, Row, Form, Col } from "react-bootstrap";
import "./App.css";
import Timer from "./components/Timer";

function App() {
	const [dayOfTheWeek, setDayOfTheWeek] = useState(6);

	const handleDayOfTheWeekChanged = (e) => {
		setDayOfTheWeek(e.target.value);
	};

	return (
		<Container>
			<Row className="align-items-center" style={{ height: "100vh" }}>
				<Row>
					<Col>
						<Form.Group controlId="formBasicSelect">
							<Form.Label>Your weekend starts on:</Form.Label>
							<Form.Control as="select" value={dayOfTheWeek} onChange={handleDayOfTheWeekChanged}>
								<option value="6">Saturday</option>
								<option value="0">Sunday</option>
								<option value="5">Friday</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Row>
				<Timer dayOfTheWeek={dayOfTheWeek} />
			</Row>
		</Container>
	);
}

export default App;
