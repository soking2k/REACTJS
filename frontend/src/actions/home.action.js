import axios from 'axios'
import {homeTypes} from '../constants/action.types'
export const getLoaisp = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:5000/loaisp')
    }
    catch (err) {
        return
    }
    dispatch(setLoaisp(res.data.data))
}

export const setLoaisp = (data) => ({
    type: homeTypes.SET_LOAISP,
    data
})


export const getSanpham = () => async (dispatch, getState) =>  {
    let res
    try {
        res = await axios.get('http://localhost:5000/sanpham')
    }
    catch (err) {
        return
    }
    dispatch(setSanpham(res.data.data))
}

export const setSanpham = (data) => ({
    type: homeTypes.SET_SANPHAM,
    data
})

