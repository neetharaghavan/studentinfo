import React, { useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

export default function StudentDetailsForm({ addStudent }) {

    //component state
    const [componentState, setComponentState] = useState({
        name: "",
        dob: "",
        class: "",
        division: "",
        gender: ""
    })

    //function for updating state safely
    const onChangeHandler = (label, value) =>
        setComponentState(previousState => ({
            ...previousState,
            [label]: value
        }))

    //function to clear state after submitting
    const clearState = () =>
        setComponentState({
            name: "",
            dob: "",
            class: "",
            division: "",
            gender: ""
        })

    //constants used on the form
    const classes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

    //setup vaidations on submit
    const validate = () => {
        let errors = 0
        //to check of any value is unchanged
        Object.values(componentState)
            .map(item => item === "" && errors++)
        if(errors !== 0)
            return false
        return true
    }

    //to handle submit based on validations and alert if there are errors
    const handleSubmit = () => {
        if (validate()) {
            addStudent(componentState)
            clearState()
        } else 
        alert("All fields are mandatory, please check your entry")
    }

    return (
        <Container style={{ borderRadius: "10px", height: "85vh", display: "grid", placeItems: "center" }}>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={e =>
                                //value is accepted iff it is a string of alphabets
                                /^[a-zA-Z()]+$/.test(e.target.value) &&
                                    onChangeHandler(e.target.name, e.target.value)}
                            name="name"
                            type="text"
                            value={componentState.name}
                            placeholder="Enter name"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDob">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            onChange={e => onChangeHandler(e.target.name, e.target.value)}
                            name="dob"
                            type="date"
                            value={componentState.dob}
                            placeholder="Date"
                        />
                    </Form.Group>
                </Row>

                <Form.Group controlId="formClass">
                    <Form.Label>Class</Form.Label>
                    <Form.Select value={componentState.class} onChange={e => onChangeHandler("class", e.target.value)} className="mb-3">
                        <option value="">Select class of study</option>
                        {
                            Object.values(classes)
                                .map((value, index) =>
                                    <option key={index} value={value}>{value}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formDivision">
                    <Form.Label>Division</Form.Label>
                    <Form.Select value={componentState.division} onChange={e => onChangeHandler("division", e.target.value)} className="mb-3">
                        <option value="">Select division of class</option>
                        <option key="0" value="A">A</option>
                        <option key="1" value="B">B</option>
                        <option key="2" value="C">C</option>
                    </Form.Select>
                </Form.Group>

                <Form.Label>Gender</Form.Label>
                <Form.Group controlId="formGender">
                    <Form.Check
                        inline
                        checked={componentState.gender === "Male" ? true : false}
                        label="Male"
                        value="Male"
                        onChange={e => onChangeHandler(e.target.name, e.target.value)}
                        type="radio"
                        name="gender"
                        id={`inline-radio-3`}
                    />
                    <Form.Check
                        inline
                        checked={componentState.gender === "Female" ? true : false}
                        label="Female"
                        value="Female"
                        onChange={e => onChangeHandler(e.target.name, e.target.value)}
                        name="gender"
                        type="radio"
                        id={`inline-radio-3`}
                    />
                    <Form.Check
                        inline
                        checked={componentState.gender === "Others" ? true : false}
                        label="Others"
                        value="Others"
                        onChange={e => onChangeHandler(e.target.name, e.target.value)}
                        name="gender"
                        type="radio"
                        id={`inline-radio-3`}
                    />
                </Form.Group>

                <Button onClick={() => handleSubmit()} style={{ marginTop: "10px" }} variant="primary">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}