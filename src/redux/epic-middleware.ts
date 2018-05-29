import {createEpicMiddleware, ofType} from 'redux-observable';
import {map} from 'rxjs/operators';

const somethingEpic = (action$: any) =>
  action$.pipe(
    ofType('TYPE'),
    map(() => 'nytype')
  );


const epicMiddleware = createEpicMiddleware(somethingEpic);

export default epicMiddleware;
