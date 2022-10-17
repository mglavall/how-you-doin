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

const MoodSelectorButton = styled("div", {
  cursor: "pointer",
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
      <Text size="4" fontFamily="secondary" as="h1">
        How are you feeling today?
      </Text>
      <Calendar days={localCalendar.days}></Calendar>
      <Text size="3" fontFamily="secondary" as="h2">
        Choose mood for today:
      </Text>
      <Flex>
        {[...new Array(10)].map((v, i) => (
          <MoodSelectorButton
            selected={ratingSelected === i + 1}
            onClick={() => selectRating(i + 1)}
            css={{ backgroundColor: `$mood${i + 1}` }}
          ></MoodSelectorButton>
        ))}
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
