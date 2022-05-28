import axios from "axios";
import Text from "../../components/Text/Text";
import { Login } from "./components/Login";

const uploadMood = async (mood: string) => {
    const data = {
      rating: 1,
      date: new Date(),
    }
  const response = await axios.post("api/calendar", data );
}

export const Home = ({calendar}) => {
  console.log("eehh",calendar);
  debugger;
  return (
    <Text>
      How are you feeling today?
      {calendar.days.map((days)=>{
        <div>holaaaaaa{days.rating}</div>
      })}
      
      <button onClick={()=>{uploadMood("what")
      }}>click</button>
    </Text>
  );
};
