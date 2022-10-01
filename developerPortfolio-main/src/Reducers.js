import {createReducer} from "@reduxjs/toolkit";
const initial  ={
lod:false
}



export const customReducer=createReducer(initial,{
loadingTrue:(state)=>{
    state.lod=true;

},


loadingFalse:(state)=>{
    state.lod=false;

}

})