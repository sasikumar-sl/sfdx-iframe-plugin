import styled from 'styled-components';

export const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 200px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
