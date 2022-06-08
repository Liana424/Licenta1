import React from 'react'
import { Form } from 'react-bootstrap';

const DatePicker = ({onClickDate, title}) => (
    <div>
        <div className="row">
            <div className="col-md-4">
                <Form.Group controlId="dob">
                    <Form.Label>{title}</Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={e => onClickDate(e.target.value)}/>
                </Form.Group>
            </div>
        </div>
    </div>
);

export default DatePicker;