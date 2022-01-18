export const blurBackground=(value)=>async(dispatch)=>{
    dispatch({type: 'SET_BLUR',payload: value})
}