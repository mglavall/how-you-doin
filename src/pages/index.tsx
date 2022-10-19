import { Home } from "../containers/Home/Home";
import axios from "axios";

export default Home;
export async function getServerSideProps() {
  const {
    data: { data },
  } = await axios.get(`/api/calendar`);
  return { props: { calendar: { days: data } } };
}
