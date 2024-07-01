import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const getAllUsers:any=createAsyncThunk("user/getAllUser", async () => {
    let response = await axios.get("http://localhost:8080/users")
    return response.data
})
// ham xoa thong tin user
export const deleteUser:any = createAsyncThunk(
    "user/deleteUser", async (id:number) => {
    let response = await axios.delete(`http://localhost:8080/users/${id}`)
    return id;
})

const userReducer = createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        // setUser:(state,action)=>{
        //     state.users=action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUsers.pending, (state,action)=>{
            // trong trang thai cho call api
        })
        .addCase(getAllUsers.fulfilled, (state,action)=>{
            // trong trang thai lay du lieu thanh cong
            state.users=action.payload
        })
        .addCase(getAllUsers.rejected, (state,action)=>{
            // neu lay du lieu that bai
        })
    }
})
export default userReducer.reducer;