import { styled } from "@stitches/react";
import { Tooltip } from "~/src/components/Tooltip/Tooltip";

const Grid = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(7,20px)",
  gridTemplateColumns: "repeat(auto-fill,20px)",
  gridAutoFlow: "column",
  gap: "$1",
});

const Day = styled("div", {
  height: "20px",
  borderRadius: "$3",
  cursor: "pointer",
  "&:hover": {
    border: "2px solid $slate8",
  },
});

export const Calendar = ({ days, daySelected, onSelectDay }) => {
  return (
    <Grid>
      {days.map((day) => (
        <Tooltip content={day.date}>
          <Day
            key={day.id}
            css={{
              backgroundColor: day.rating ? `$mood${day.rating}` : `$moodNone`,
              border: daySelected === day.date && "2px solid $slate8",
            }}
            onClick={() => {
              onSelectDay(day.date);
            }}
          ></Day>
        </Tooltip>
      ))}
    </Grid>
  );
};
