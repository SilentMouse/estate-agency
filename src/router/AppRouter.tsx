import React from "react";
import { Route, Routes } from "react-router-dom";
import EmptyIndex from "../componets/emptyIndex";
import EditEstate from "../pages/estates/edit/EditEstate";
import Estates from "../pages/estates/Estates";
import NewEstates from "../pages/estates/new/NewEstate";


const AppRouter = () => {
    return (

        <div>   
            <Routes>
                <Route path="/"  element={<Estates/>} />

                <Route path="/estates" element={<Estates/>} />

                <Route path="/estates/new" element={<NewEstates/>} />

                <Route path="/estates/edit" element={<EditEstate/>} />
            </Routes>
        </div>

    )
}

export default AppRouter