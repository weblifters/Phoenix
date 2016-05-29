import { combineReducers }   from 'redux';
import CurrentSqlQuery       from './current_sql_query';
import SqlQueryResults       from './sql_query_results';
import RecentQueries         from './recent_queries';
import { reducer as form }   from 'redux-form';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  currentSqlQuery: CurrentSqlQuery,
  sqlQueryResults: SqlQueryResults,
  form,
  recentQueries: RecentQueries,
  auth: authenticationReducer
});

export default rootReducer;
