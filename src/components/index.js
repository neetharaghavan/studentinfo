import React, {useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import StudentDetailsForm from "../common/form"
import StudentDetailsList from "../common/list"

export default function Home() {

    //initializing empty state array for keeping student details
    const [students, setStudents] = useState([])

    //function to add students as soon as the user submits the form
    const addStudent = student =>
        setStudents(previousState => ([
            ...previousState,
            student
        ]))

    return (<>
        <Container>
            <Row style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "0px" }}>
                <Col className="col-sm-6" style={{ flex: "1 1 400px", display: "grid", placeItems:"center", padding: "20px" }}>
                    <StudentDetailsForm addStudent={addStudent} />
                </Col>
                <Col className="col-sm-6" style={{ flex: "0 1 800px", display: "grid", placeItems:"center", padding: "20px" }}>
                    <StudentDetailsList studentsList={students} />
                </Col>
            </Row>
        </Container>
    </>)
}