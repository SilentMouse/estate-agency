import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EstateTableItem from "../../componets/EstateTableItem/EstateTableItem";
import { setEstatesRequest } from "../../store/estatesSlice";

const Estates = () => {

    const { estates } = useSelector((state: any) => state.estates)

    const dispatch = useDispatch()

    useEffect(() => {
        if (estates.length === 0) {
            dispatch(setEstatesRequest({ limit: 10, offset: 0 }))
        }
    }, [])


    return (
        <div>
            <h1>Новостройки</h1>
            <div className="row">
                <div className="col-6">
                    <Link to="/estates/new" className="btn btn-success">
                        + Добавить
                    </Link>

                </div>
                <div className="col-6">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Поиск" aria-label="search" />
                        <button className="btn btn-outline-secondary" type="button">Обновить</button>
                        <button className="btn btn-outline-secondary" type="button">Сбросить фильтры</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Название</th>
                            <th scope="col">Информация</th>
                            <th scope="col">Параметры</th>
                            <th scope="col">Ипотека</th>
                            <th scope="col">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estates.map((e: any, i: number) => {
                            return (
                                <EstateTableItem item={e} key={i} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Estates