import React from 'react';
import Image from "next/image";
import {useSelector} from "react-redux";

const UserInfo = () => {
  const {data} = useSelector(state => state.user);

  const date  = new Date(data.created_at).toLocaleString("ua-UA");

  return (
    <section className='flex flex-wrap justify-evenly'>
      <Image src={data.avatar_url} width={140} height={140} alt='user avatar' className='w-3/8 rounded'/>
      <ul className='w-5/8'>
        <li>Username: <span className='font-semibold'>{data.login}</span></li>
      <li>Email: <span className='font-semibold'>{data.email || '-//-'}</span></li>
      <li>Location: <span className='font-semibold'>{data.location || '-//-'}</span></li>
      <li>Created at: <span className='font-semibold'>{date}</span></li>
      <li>Followers: <span className='font-semibold'>{data.followers}</span></li>
      <li>Following: <span className='font-semibold'>{data.following}</span></li>
      </ul>
      {data.bio && <p className='w-full text-center my-2'>{data.bio}</p>}
    </section>
  );
};

export default UserInfo;