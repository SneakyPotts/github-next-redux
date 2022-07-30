import SearchInput from "../components/SearchInput";
import UserList from "../components/UserList";

export default function Home() {


  return (
    <div
      className='container flex flex-col gap-0.5 w-1/3 p-4 bg-purple-600 drop-shadow-md rounded max-h-screen'
    >
      <SearchInput/>
      <UserList/>
    </div>
  )
}
