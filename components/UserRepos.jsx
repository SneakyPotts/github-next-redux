import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUserRepos} from "../store/UserSlice";

const UserRepos = () => {
  const dispatch = useDispatch();
  const {data, repos} = useSelector(state => state.user);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const reqObj = {
      username: data.login,
      page
    }
    dispatch(getUserRepos(reqObj));
  }, [page]);

  return (
    <section className='mt-4'>
      <ul>
        {repos?.map(repo => (
          <li key={repo.id} className='flex items-center rounded p-2 mb-1 bg-purple-700'>
            <p>{repo.name}</p>
            <span className='block ml-auto text-white border-l pl-2'>
              <p>Folow: {repo.watchers_count}</p>
              <p>Stars: {repo.stargazers_count}</p>
            </span>
          </li>
        ))}
      </ul>
      {repos.length%5 === 0 &&
        <button
          className='w-full p-2 rounded border border-purple-900 text-lg hover:border-white hover:text-white hover:bg-purple-900'
          onClick={() => setPage(prevState => prevState + 1)}
        >More...
        </button>}
    </section>
  );
};

export default UserRepos;