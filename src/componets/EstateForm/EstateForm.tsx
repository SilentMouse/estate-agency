import React, { FC, useState } from 'react'
import { render } from 'react-dom'
import { Form as FinalForm, Field } from 'react-final-form'
import { Button } from 'react-bootstrap';
import arrayMutators from 'final-form-arrays'
import TextInput from '../Inputs/TextInput';
import HouseFields from '../HouseFields/HouseFields';
import { useDispatch, useSelector } from 'react-redux';
import { addEstate, editEstate } from '../../store/estatesSlice';
import { useNavigate } from 'react-router-dom';
import { required } from '../../utils/validates';
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

interface Props {
    edit: boolean
}

const EstateForm: FC<Props> = ({ edit }) => {

    const { currentEstate } = useSelector((state: any) => state.estates)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValuesGetter = () => {
        if (edit && currentEstate) {
            return currentEstate
        } else {
            return { houses: [] }
        }
    }

    const onSubmit = async (values: any) => {
        await sleep(300)
        if (edit){
            await dispatch(editEstate(values))
        }else{
            await dispatch(addEstate(values))
        }
        

        navigate("/estates")

        // console.log(values)
    }

    return (
        <>
            <h1 className='mb-5 mt-5'>{edit ? "редактировать" : "Добавить"} ЖК</h1>
            <FinalForm
                onSubmit={onSubmit}
                mutators={{
                    ...arrayMutators
                }}
                initialValues={initialValuesGetter()}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>

                            <div className='row mb-3'>
                                <div className="col-2">
                                    ID
                                </div>
                                <div className="col-4 ">
                                    <Field type="number" name="id" component="input" disabled
                                    ></Field>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-2">
                                    Застройщик
                                </div>
                                <div className="col-4 ">
                                    <TextInput name="developer" placeholder="Введите значение" validate={required}/>
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-2">
                                    Юридический адрес
                                </div>
                                <div className="col-4">
                                    <TextInput validate={required} name="legalEntity" placeholder="Введите значение" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className="col-2">
                                    Название
                                </div>
                                <div className="col-4">
                                    <TextInput validate={required} name="title" placeholder="Введите значение" />
                                </div>
                            </div>

                            {values.houses.map((e: any, i: number) => {
                                return (
                                    <div className="card mb-3" key={i}>
                                        <div className="card-body">
                                            <HouseFields index={i} values={values} form={form} name={'houses'}></HouseFields>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className='mt-3'>
                                <Button className="btn btn-primary btn-sm" onClick={() => form.mutators.push('houses', { name: '', year: 2022 })}>
                                    Добавить дом +
                                </Button>
                            </div>
                        </div>


                        <div className="buttons mt-5">

                            <Button className="btn btn-success me-3" type="submit" disabled={submitting || pristine}>
                                Сохранить
                            </Button>
                            <Button
                                type="button"
                                className="btn btn-warning"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Очистить
                            </Button>
                        </div>
                        <pre>{JSON.stringify(values)}</pre>
                    </form>
                )}
            />
        </>
    )
}

export default EstateForm
