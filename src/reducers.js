import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
		}  from './constants.js'

const initialStateSearch = {
	searchField : ''
}


export const searchRobots = (state=initialStateRobots, action={}) => {

	switch(action.type) {
		case  CHANGE_SEARCH_FIELD:
			return Object.assign({}, state , { searchField: action.payload });
		default:
			return state;
	}
}
const initialStateRobots ={
	isPedding :false , 
	robots : [],
	error: ''
}

export const requestRobots =(state = initialStateRobots , action = {}) => {
	switch (action.type){
		case REQUEST_ROBOTS_PENDING:
			return Object.assign({} , state , {isPedding :true})
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign({} , state , {robots : action.payload , isPedding : false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign({}, state, {error: action.payload , isPedding: false})	
		default :
			return state;
	}
}