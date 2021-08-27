export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id)
        case 'ITEM_IN_CART':
            return state.some(item => item.id === action.id)
        default:
            return state
    }
}