import React from 'react';
import {useSelector} from "react-redux";
import Loader from "./Loader";
import Link from "next/link";

const UserList = () => {
  const {list, isLoading} = useSelector(state => state.search);
  const {total_count, items} = list;

  return (
    <div  className='mt-2 text-lg overflow-y-auto flex flex-col items-center'>
      {isLoading && <Loader/>}
      {!isLoading &&
        (total_count >= 1
          ? <>
              <p
                className='text-white w-full text-center bg-purple-600 sticky top-0'
              >{total_count === 1 ? `${total_count} user found` : `${total_count} users found`}</p>
              <ul className='w-full'>
                {items?.map(user => (
                  <li
                    key={user.id}
                  >
                    <Link href={`/${user.login}`}>
                      <a className='flex rounded p-2 mb-1 bg-purple-700 hover:bg-purple-900 hover:text-white'>
                        {user.login}<p className='pl-4 ml-auto border-l'>Repo ##</p>
                      </a>
                    </Link>
                  </li>
                ))}
                </ul>
            </>
          : <p className='text-gray-800 pt-1'>Users list is empty...</p>)
      }
    </div>
  );
};

export default UserList;