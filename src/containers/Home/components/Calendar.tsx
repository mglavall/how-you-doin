import { styled } from "@stitches/react";
import { Tooltip } from "~/src/components/Tooltip/Tooltip";

const MOBILE_DAY_SIZE = "35px";
const DESKTOP_DAY_SIZE = "20px";

const Grid = styled("div", {
  display: "grid",
  gridTemplateRows: `repeat(auto-fill,minmax(1fr, ${MOBILE_DAY_SIZE}))`,
  gridTemplateColumns: `repeat(7, minmax(20px, ${MOBILE_DAY_SIZE}))`,
  gridAutoFlow: "row",
  gap: "$1",
  justifyContent: "center",
  "@media(min-width: 620px)": {
    gridTemplateRows: "repeat(7,20px)",
    gridTemplateColumns: "repeat(auto-fill,20px)",
    gridAutoFlow: "column",
  },
});

const Day = styled("div", {
  height: `${MOBILE_DAY_SIZE}`,
  borderRadius: "$3",
  cursor: "pointer",
  "&:hover": {
    border: "2px solid $slate8",
  },
  "@media(min-width: 620px)": {
    height: "20px",
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
