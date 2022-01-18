export default (home=[],action)=>{
    switch(action.type){
        case 'SET_BLUR':
            return action.payload
        default:
            return home
    }
}