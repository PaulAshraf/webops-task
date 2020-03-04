import { createSlice } from '@reduxjs/toolkit'

const pageSlice = createSlice({
  name: 'page',
  initialState: 0,
  reducers: {
    next: state => state + 1,
    prev: state => {
        if(state > 0)
            return( state - 1)
        else
            return( state )
    }
  }
})

export const { next, prev } = pageSlice.actions

export default pageSlice.reducer