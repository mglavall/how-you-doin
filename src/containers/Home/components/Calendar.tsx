import { styled } from "@stitches/react";


const Grid = styled('div', {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 200px)",
    gap: "$1",
    '& div': {

      },
  });


  const Day = styled('div', {
    backgroundColor: "$tertiary",
    height: "200px",
    borderRadius: "$3",
    variants: {
      rating: {
        1: {
          backgroundColor: '$tertiary',
        },
        2: {
          backgroundColor: 'blue',
        },
        3: {
          backgroundColor: 'green',
        },
      }
    }
  });


export const Calendar = ({days})=>{
    return (<Grid>
    {days.map((day)=>(
       <Day key={day.id} rating={day.rating}> {console.log(day)}{day.rating}</Day>
     ))}
    </Grid>)
}