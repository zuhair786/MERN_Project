import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

//Since we working with async, we use try/catch.
export const signin=(formData,history)=>async (dispatch)=>{
    try{
        const {data}=await api.signIn(formData);
        dispatch({type:AUTH,data});
        history('/');
    }catch(err){
        console.log(err);
    }
}

export const signup=(formData,history)=>async (dispatch)=>{
    try{
        const {data}=await api.signUp(formData);
        dispatch({type:AUTH,data});
        history('/');
    }catch(err){
        console.log(err);
    }
}