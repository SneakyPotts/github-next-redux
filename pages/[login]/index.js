import GithubService from "../../http/GithubService";
import UserCard from "../../components/UserCard";
import {useDispatch} from "react-redux";
import {setUserData} from "../../store/UserSlice";

const UserPage = ({data}) => {
  const dispatch = useDispatch();

  dispatch(setUserData(data))

  return <UserCard/>
}

export default UserPage;

export async function getServerSideProps(context) {
  const {login} = context.params;

  const data = await GithubService.getUserByName(login);

  return {
    props: {
      data: data.data,
    }
  }
}