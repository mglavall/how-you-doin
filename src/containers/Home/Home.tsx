import axios from "axios";
import Text from "../../components/Text/Text";
import { Calendar } from "./components/Calendar";
import { Login } from "./components/Login";
import dayjs from "dayjs";
import { styled } from "@stitches/react";
import { useState } from "react";
import { Button } from "~/src/components/Button/Button";

const uploadMood = async (mood: string, date = dayjs()) => {
  const data = {
    rating: mood,
    date: date.format("YYYY-MM-DD"),
  };
  console.log(data, date);
  const response = await axios.post("api/calendar", data);
};

const Container = styled("div", {
  maxWidth: "1200px",
  margin: "auto",
  padding: "$5 $2",
});

const Flex = styled("div", {
  display: "flex",
  gap: "8px",
});

const MoodSelectorButton = styled("div", {
  cursor: "pointer",
  width: "calc(100%/10 - 64px/10)",
  aspectRatio: "1/1",

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
  const [selectedDate, selectDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [ratingSelected, selectRating] = useState(null);
  const [localCalendar, setCalendar] = useState(calendar);

  return (
    <Container>
      <Text size="4" fontFamily="secondary" as="h1">
        How are you feeling today?
      </Text>
      <Calendar
        days={localCalendar.days}
        onSelectDay={(dayToSelect) => {
          selectDate(dayToSelect);
        }}
        daySelected={selectedDate}
      ></Calendar>
      <Flex css={{ marginTop: "$6" }}>
        {[...new Array(10)].map((v, i) => (
          <MoodSelectorButton
            selected={ratingSelected === i + 1}
            onClick={() => selectRating(i + 1)}
            css={{ backgroundColor: `$mood${i + 1}` }}
          ></MoodSelectorButton>
        ))}
      </Flex>

      <Button
        onClick={async () => {
          await uploadMood(ratingSelected, dayjs(selectedDate, "YYYY-MM-DD"));
          const {
            data: { data },
          } = await axios.get("api/calendar");
          setCalendar({ days: data });
        }}
        css={{
          marginTop: "$6",
          "&:hover": { backgroundColor: `$mood${ratingSelected}` },
        }}
      >
        Confirm
      </Button>
    </Container>
  );
};
