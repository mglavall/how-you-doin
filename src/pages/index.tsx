import { Home } from "../containers/Home/Home";
import axios from "axios";

export default Home;
export async function getServerSideProps() {
    const {data:{data}} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_PATH}/api/calendar`);
    console.log(data)
    return {props:{calendar: {days: data}}}
  }
