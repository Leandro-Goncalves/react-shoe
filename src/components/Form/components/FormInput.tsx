import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Label = styled.div`
  font-size: 25.2px;
  font-weight: 700;
  line-height: "37.8px";
  margin-left: 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid black;
  border-radius: 16px;
  background-color: transparent;
  font-size: 24px;
  padding-left: 8px;
`;

interface FormInputProps {
  label: string;
}

export const FormInput = ({ label }: FormInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input />
    </Container>
  );
};
