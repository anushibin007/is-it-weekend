import React, { useEffect, useState } from "react";
import { Container, Row, Form, Col, Accordion, Card } from "react-bootstrap";
import "./App.css";
import Timer from "./components/Timer";

function App() {
	const loadDayOfTheWeek = () => {
		const localDayOfTheWeek = localStorage.getItem("dayOfTheWeek");
		try {
			if (localDayOfTheWeek) {
				return parseInt(localDayOfTheWeek);
			}
		} catch (err) {
			// Ignore the error. Simply send the default dayOfTheWeek
		}
		return 5; // Friday is the default
	};

	const [dayOfTheWeek, setDayOfTheWeek] = useState(loadDayOfTheWeek());

	useEffect(() => {
		localStorage.setItem("dayOfTheWeek", dayOfTheWeek);
	}, [dayOfTheWeek]);

	const handleDayOfTheWeekChanged = (e) => {
		setDayOfTheWeek(e.target.value);
	};

	return (
		<Container>
			<Row className="align-items-center" style={{ height: "100vh" }}>
				<Timer dayOfTheWeek={dayOfTheWeek} />
				<Row>
					<Col>
						<Accordion>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="0">
									<h5>⚙ Config</h5>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Form.Group controlId="formBasicSelect">
											<Form.Label>Your weekend starts on:</Form.Label>
											<Form.Control as="select" value={dayOfTheWeek} onChange={handleDayOfTheWeekChanged}>
												<option value="6">Saturday</option>
												<option value="0">Sunday</option>
												<option value="5">Friday</option>
											</Form.Control>
										</Form.Group>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}

export default App;
