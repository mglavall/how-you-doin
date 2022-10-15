import axios from "axios";
import Text from "../../components/Text/Text";
import { Calendar } from "./components/Calendar";
import { Login } from "./components/Login";
import dayjs from "dayjs";
import { styled } from "@stitches/react";
import { useState } from "react";

const uploadMood = async (mood: string) => {
  const data = {
    rating: mood,
    date: dayjs(new Date()).toDate(),
  };
  const response = await axios.post("api/calendar", data);
};

const Container = styled("div", {
  maxWidth: "1200px",
  margin: "auto",
});

const Flex = styled("div", {
  display: "flex",
  gap: "8px",
});

const Good = styled("div", {
  backgroundColor: "#3cb043",
  width: "100px",
  height: "100px",
  variants: {
    selected: {
      true: {
        border: "2px solid black",
      },
      false: {
        border: "none",
      },
    },
  },
});

const Bad = styled("div", {
  backgroundColor: "#b90e0a",
  width: "100px",
  height: "100px",
  variants: {
    selected: {
      true: {
        border: "2px solid black",
      },
      false: {
        border: "none",
      },
    },
  },
});
export const Home = ({ calendar }) => {
  const [ratingSelected, selectRating] = useState(null);
  const [localCalendar, setCalendar] = useState(calendar);
  const showButton = dayjs().isSame(
    localCalendar.days[localCalendar.days.length - 1]?.date
  );
  console.log(showButton);
  return (
    <Container>
      How are you feeling today?
      <Calendar days={localCalendar.days}></Calendar>
      Choose mood for today:
      <Flex>
        <Good selected={ratingSelected === 5} onClick={() => selectRating(5)}>
          hola
        </Good>
        <Bad selected={ratingSelected === 1} onClick={() => selectRating(1)}>
          hola
        </Bad>
      </Flex>
      <button
        onClick={async () => {
          await uploadMood(ratingSelected);
          const {
            data: { data },
          } = await axios.get("api/calendar");
          setCalendar({ days: data });
        }}
      >
        Confirm
      </button>
    </Container>
  );
};
