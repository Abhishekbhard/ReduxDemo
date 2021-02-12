import * as actions from './actionsType'
let lastId = 0;
export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADDED) {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false

            }

        ]
    } 
    else if (action.type === actions.BUG_RESOLVED) {
        console.log(action.type);
        return state.map(bug => bug.id!==action.payload.id?bug:{...bug,resolved:true});
           

        

    }
    return state;
}
