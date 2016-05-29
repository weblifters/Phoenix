import {
  POST_SQL_QUERY,
  UNAUTH_USER
 } from '../actions/types';

export default function(state = null, action) {

  switch (action.type) {
  case POST_SQL_QUERY:
    return action.payload;
  case UNAUTH_USER:
    return null;
  }
  
  return state;
}
