import { createSlice } from "@reduxjs/toolkit";
import fakeApi  from "./api/fakeApi";
import { IEstate } from "./types/Estate";

const estatesSlice = createSlice({
   name: "estates",
   initialState: {
      count: 0,
      estates: [] as IEstate[],
      currentEstate: {} as IEstate
   },
   reducers: {
      setEstates(state, action) {
         state.estates = action.payload
      },
      setEstatesRequest(state, action) {
         const response = fakeApi.getEstates()
         state.estates = response.data
      },
      editEstate(state, action) {
         const res: any[] = []
         state.estates.forEach((e, i) => {
            if (e.id === action.payload.id){
               res[i] = action.payload
            }else{
               res[i] = e
            }
         })
         state.estates = res
      },
      addEstate(state, action) {
         state.estates.push({...action.payload, id: state.estates.length + 1})
      },
      setCurrentEstate(state, action) {
         state.currentEstate = action.payload
      }
   }
})

export const { setEstates, setEstatesRequest, setCurrentEstate, addEstate, editEstate} = estatesSlice.actions

export default estatesSlice.reducer