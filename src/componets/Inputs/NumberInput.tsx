import React, { FC } from "react"
import { Form } from "react-bootstrap"
import { Field } from "react-final-form"
import { BlockLike } from "typescript"


interface Props {
    name: string
    placeholder?: string
    validate?: any
}

const NumberInput: FC<Props> = ({ name, placeholder, validate }) => {

    return (
        <Field name={name} validate={validate}>
            {props => (
                <div>
                    <Form.Control
                        type="number"
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        placeholder={placeholder || ""} />
                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                </div>
            )
            }
        </Field>
    )
}

export default NumberInput