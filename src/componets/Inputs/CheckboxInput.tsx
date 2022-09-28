import React, { FC } from "react"
import { Form } from "react-bootstrap"
import { Field } from "react-final-form"


interface Props {
    name: string
}

const CheckboxInput: FC<Props> = ({ name }) => {

    return (
        <Field name={name}>
            {props => (
                <div>
                    <Form.Check
                        type="checkbox"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}/>
                </div>
            )
            }
        </Field>
    )
}

export default CheckboxInput