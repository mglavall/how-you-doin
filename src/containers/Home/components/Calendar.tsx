import { styled } from "@stitches/react";
import { Tooltip } from "~/src/components/Tooltip/Tooltip";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 20px)",
  gap: "$1",
  "& div": {},
});

const Day = styled("div", {
  height: "20px",
  borderRadius: "$3",
});

export const Calendar = ({ days }) => {
  console.log(days);
  return (
    <Grid>
      {days.map((day) => (
        <Tooltip content={day.date}>
          <Day
            key={day.id}
            css={{
              backgroundColor: day.rating ? `$mood${day.rating}` : `$moodNone`,
            }}
          ></Day>
        </Tooltip>
      ))}
    </Grid>
  );
};
