const Accountreducers  = (state = 0,action) => {
    switch(action.type) {
        case 'Deposit': return state + action.payload
        case 'Withdraw': return state - action.payload
        case 'Reset':return (state = action.payload)
        default: return state
        
    }
}
export default Accountreducers