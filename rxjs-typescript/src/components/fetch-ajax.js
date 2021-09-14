import { ajax } from "rxjs/ajax";
import { map } from 'rxjs/operators'
import { useState, useEffect } from 'react'
import List from '../UI/List'

const FetchDataAjax = () => {
  const api = `https://randomuser.me/api/?results=5&seed=rx-react&nat=us&inc=name&noinfo`;
  const getName = (user) => `${user.name.first} ${user.name.last}`;

  const names$ = ajax
    .getJSON(api)
    .pipe(map(({ results: users }) => users.map(getName)));

  const [names, setNames] = useState();
  useEffect(() => {
    const subscription = names$.subscribe(setNames);
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div className='App'>
      <h1>FetchData with ajax-Rxjs</h1>
      {names && <List items={names} />}
    </div>
  );
};

export default FetchDataAjax;
