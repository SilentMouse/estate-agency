



import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { Field } from "react-final-form";
import { afterZero, required } from "../../utils/validates";
import NumberInput from "../Inputs/NumberInput";
import TextInput from "../Inputs/TextInput";

interface Props {
    fields?: any
    name?: string
    indexHouse: number
    index: number
}


const PorchFields: FC<Props> = ({ name, index, fields, indexHouse }) => {

    return (
        <div>
            <Field type="hidden" value={index} name={`houses[${indexHouse}].porches[${index}].id`} component="input"></Field>
            <Field type="hidden" value={index} name={`houses[${indexHouse}].porches[${index}].number`} component="input"></Field>
            <div className={'row mb-3'}>
                <div className='col-3'><b>Подъезд номер</b></div>
                <div className='col-3'><b>{index + 1}</b></div>
            </div>
            <div className={'row mb-3'}>
                <div className='col-3'>Кол-во этажей в подъезде</div>
                <div className='col-3'>
                    <NumberInput name={`houses[${indexHouse}].porches[${index}].floorsTotal`} validate={afterZero}/>
                </div>
            </div>
            <div className={'row mb-3'}>
                <div className='col-3'>Кол-во квартир на этаже</div>
                <div className='col-3'>
                    <NumberInput name={`houses[${indexHouse}].porches[${index}].apartmentsCount`} validate={afterZero}/>
                </div>
            </div>
        </div>
    )

}

export default PorchFields