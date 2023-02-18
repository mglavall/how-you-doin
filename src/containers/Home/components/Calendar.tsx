import { styled } from "@stitches/react";
import { Tooltip } from "~/src/components/Tooltip/Tooltip";
import dayjs from "dayjs";

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
const MonthDivider = styled("div", {
  height: `20px`,
  gridColumn: `1 / span 7`,
});

export const Calendar = ({ days, daySelected, onSelectDay }) => {
  return (
    <Grid>
      {days.reduce((acc, day) => {
        const isFirstDayOfMonth = dayjs(day.date).format("DD") === "01";
        const NormalDay = (
          <Tooltip content={day.date}>
            <Day
              key={day.id}
              css={{
                backgroundColor: day.rating
                  ? `$mood${day.rating}`
                  : `$moodNone`,
                border: daySelected === day.date && "2px solid $slate8",
              }}
              onClick={() => {
                onSelectDay(day.date);
              }}
            ></Day>
          </Tooltip>
        );

        if (isFirstDayOfMonth) {
          return [
            ...acc,
            <MonthDivider>{dayjs(day.date).format("MMMM")}</MonthDivider>,
            NormalDay,
          ];
        }
        return [...acc, NormalDay];
      }, [])}
    </Grid>
  );
};
