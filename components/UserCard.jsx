import React, {useEffect} from 'react';
import UserInfo from "./UserInfo";
import UserRepos from "./UserRepos";
import {resetUser} from "../store/UserSlice";
import {useDispatch} from "react-redux";

const UserCard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetUser());
    }
  }, []);


  return (
    <div className='container flex flex-col gap-0.5 w-1/3 p-4 bg-purple-600 drop-shadow-md rounded'>
      <UserInfo/>
      <UserRepos/>
    </div>
  );
};

export default UserCard;