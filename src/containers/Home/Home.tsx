import axios from "axios";
import Text from "../../components/Text/Text";
import { Login } from "./components/Login";

export const Home = () => {
  return (
    <Text>
      How are you feeling today?
      <Login></Login>
    </Text>
  );
};

export async function getServerSideProps() {
  debugger;
  console.log("HOLA?");
  const session = await axios.get("api/calendar");
  console.log(session);
}
