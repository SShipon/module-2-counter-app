import { createSlice } from '@reduxjs/toolkit' 
import type { PayloadAction } from '@reduxjs/toolkit'

type CounterType ={
    count : number
}

const initialState : CounterType = {count:0};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
       
        increment: (state)=>{
            state.count = state.count +1 
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count = state.count - 1
            }
        },
        decrementValue:(state, action: PayloadAction<number>) =>{
            state.count = state.count - action.payload
        }
        
    },
   
})

export const { increment,  decrement  ,decrementValue } = counterSlice.actions

export default counterSlice.reducer;

