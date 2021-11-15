import styled from "styled-components";

export const InputDiv = styled.div`
  width: 100%;
  span {
    color: red;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: calc(100% - 23.5px * 2);
  border-radius: 31.75px;
  padding: 15px 23.5px;
  font-size: 15px;
  border: 0.95px solid #ddd;
  outline: none;
  color: #adadad;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  ::placeholder {
    color: #adadad;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  }
`;

export const TextArea = styled.textarea`
  width: calc(100% - 23.5px * 2) !important;
  min-height: 185.91px;
  border-radius: 31.75px;
  padding: 15px 23.5px;
  font-size: 15px;
  border: 0.95px solid #ddd;
  margin-bottom: 11px;
  outline: none;
  resize: vertical;
  color: #adadad;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  ::placeholder {
    color: #adadad;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  }
`;
