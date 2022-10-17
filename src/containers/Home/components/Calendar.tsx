import { styled } from "@stitches/react";

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
        <Day
          key={day.id}
          css={{
            backgroundColor: day.rating ? `$mood${day.rating}` : `$moodNone`,
          }}
        ></Day>
      ))}
    </Grid>
  );
};
