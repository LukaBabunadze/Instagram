import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://jsonplaceholder.typicode.com"

export const getAllPosts = async() => {
    const result = await axios.get(`${URL}/albums/1/photos`)
    .then(res => res.data)
    .catch(err => console.log(err.message));
    return result;     
}

export const getPostComments = async(id) => {
    const result = await axios.get(`${URL}/posts/${id}/comments`)
    .then(res => res.data)
    .catch(err => console.log(err.message))
    return result;
}




