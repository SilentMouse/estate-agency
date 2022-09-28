import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { Field } from "react-final-form";
import { afterZero, minMax, required } from "../../utils/validates";
import CheckboxInput from "../Inputs/CheckboxInput";
import NumberInput from "../Inputs/NumberInput";
import TextInput from "../Inputs/TextInput";
import PorchFields from "../PorchFields/PorchFields";

interface Props {
    name?: string
    index: number
    values: any
    form: any
}


const HouseFields: FC<Props> = ({ name, index, form, values }) => {

    return (
        <div>
            <div className={'row mb-3'}>
                <div className='col-3'><b>Название дома номер {index + 1}</b></div>
                <div className='col-4'>
                    <TextInput name={`${name}[${index}].title`} validate={required}/>
                </div>
            </div>
            <div className={'row mb-3'}>
                <div className='col-3'>Срок сдачи в эксплуатацию</div>
                <div className='col-1'>Квартал</div>
                <div className='col-1'>
                    <NumberInput name={`${name}[${index}].quartal`} validate={minMax}/>
                </div>
                <div className='col-1'>Год</div>
                <div className='col-1'>
                    <NumberInput name={`${name}[${index}].year`} validate={afterZero}/>
                </div>
                <div className='col-2'>Введен в эксплуатацию</div>
                <div className='col-1'>
                    <CheckboxInput name={`${name}[${index}].commissioned`}/>
                </div>
            </div>


            {values.houses[index].porches && values.houses[index].porches.map((f: any, q: number) => {
                return (
                    <PorchFields index={q} indexHouse={index} ></PorchFields>
                )
            })}
            <Button className="btn btn-primary btn-sm"
                onClick={() => form.mutators.push(`houses[${index}].porches`, { floorCount: 0, porch: 1 })}>
                Добавить подъезд +
            </Button>
        </div>
    )

}

export default HouseFields
