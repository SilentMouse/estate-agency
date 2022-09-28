import React, { FC } from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCurrentEstate } from "../../store/estatesSlice"
import { IEstate } from "../../store/types/Estate"

interface Props {
    item: IEstate
}


const EstateTableItem: FC<Props> = ({ item }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setEstateAndLink = () => {
       dispatch(setCurrentEstate(item))
       navigate("/estates/edit")
    }

    //TODO rewrite with optimization
    const getApartsCountTotal = () => {
        let sum = 0
        item.houses.forEach((h) => {
            h.porches.forEach((p) => {
                sum = sum + (p.floorsTotal * p.apartmentsCount)
            })
        })
        return sum
    }

    const getEndDate = () => {
        let maxYear = 0
        let quartal = 0
        item.houses.forEach((h) => {
            if (maxYear < h.year) {
                maxYear = h.year
                if (quartal < h.quartal) {
                    quartal = h.quartal
                }
            }
        })
        return { maxYear, quartal }
    }


    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>
                <p>Застройщик: {item.developer}</p>
                <p>Количествово домов: {item.houses.length}</p>
                <p>Количествово квартир: {getApartsCountTotal()}</p>
                <p>Срок сдачи: {getEndDate().quartal} кв. {getEndDate().maxYear} г.</p>
            </td>
            <td>
                <i className="bi bi-house me-2"></i>
                <i className="bi bi-3-circle-fill" />
            </td>
            <td>
                Ипотека от 5%
            </td>
            <td>
                <div className="mb-2">
                    <Button 
                    className="btn btn-default btn-primary mb-2" 
                    onClick={() => setEstateAndLink()}>Редактировать</Button>
                </div>
                <div className="mb-2">
                    <Button className="btn btn-default btn-secondory mb-2">К домам ЖК</Button>
                </div>
                <div className="mb-2">
                    <Button className="btn btn-default btn-info mb-2">Описание ЖК</Button>
                </div>
                <div className="mb-2">
                    <Button className="btn btn-default btn-warning mb-2">Скрыть весь ЖК</Button>
                </div>

            
            </td>
        </tr>
    )
}

export default EstateTableItem