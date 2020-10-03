import styled from 'styled-components';

export const Container = styled.div`
  width: 35vmax;
  height: 41vmax;
  background-color: #f1f1f1;
  display: flex;
  /* margin: 2rem auto; */
  /* border-radius: 30px; */
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.5rem;
    color: #cc0001;
    align-self: flex-start;
    margin: 12rem 0 0 0;
    position: absolute;
    font-weight: 400;
  }
  span::after {
    width: 30px;
    height: 1px;
    background-color: #cc0001;
  }
  > img {
    width: 64px;
    height: 64px;
    align-self: flex-start;
    /* justify-content: center; */
    margin: 2rem 0 0 0;
    position: absolute;
  }
  form {
    margin: 4rem 0 0 0;
    flex-wrap: wrap;
    height: 20%;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  input {
    width: 270px;
    border: 1px solid #b8c6bf;
    border-radius: 5px;
    padding: 13px;
    color: #333;
  }
  select {
    width: 100%;
    padding: 13px;
    border: 1px solid #b8c6bf;
    border-radius: 5px;
    color: #757575;
  }
  option {
    color: #333;
  }
`;
