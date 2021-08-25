import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function StudentDetailsList({ studentsList }) {

    //styles for the container
    const style = {
        color: "white",
        backgroundColor: "#212529",
        borderRadius: "10px",
        height: "85vh",
        padding: "50px",
        // overflow: "scroll",
        overflowX: "hidden",
    }

    //variable for providing keys for list elements
    var index = 0

    return (
        <Container style={style}>
            <Row>
                <h6>Students List</h6>
            </Row>
            <Container style={{ backgroundColor: "grey", padding: "5px" }}>
                <Row style={{ backgroundColor: "#d3d7de" }}>
                    <Col>Name</Col>
                    <Col>DOB</Col>
                    <Col>Class</Col>
                    <Col>Division</Col>
                    <Col>Gender</Col>
                </Row>
                {
                    Object.values(studentsList)
                        .map(item =>
                            <Row key={index++}>
                                <Col>{item.name}</Col>
                                <Col>{item.dob}</Col>
                                <Col>{item.class}</Col>
                                <Col>{item.division}</Col>
                                <Col>{item.gender}</Col>
                            </Row>
                        )
                }

            </Container>
        </Container>
    )
}