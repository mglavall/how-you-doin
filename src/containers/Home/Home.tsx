import axios from "axios";
import Text from "../../components/Text/Text";
import { Calendar } from "./components/Calendar";
import { Login } from "./components/Login";
import dayjs from "dayjs";
import { styled } from "@stitches/react";

const uploadMood = async (mood: string) => {

    const data = {
      rating: 1,
      date: dayjs(new Date()).add(5,"day").toDate(),
    }
  const response = await axios.post("api/calendar", data );
}

const Container = styled('div', {
  maxWidth: "1200px",
  margin: "auto"
});
export const Home = ({calendar}) => {
  return (
    <Container>
      How are you feeling today?
      <Calendar days={calendar.days}></Calendar>
      <button onClick={()=>{uploadMood("what")
      }}>click</button>
    </Container>
  );
};
