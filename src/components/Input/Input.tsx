import { styled } from "@stitches/react";

const StyledInput = styled("input", {
  padding: "4px 15px",
  borderColor: "#333",
});

const Input = (props) => {
  return <StyledInput {...props}></StyledInput>;
};

export default Input;
