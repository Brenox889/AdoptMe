import styled from 'styled-components';

export const Container = styled.div`
  width: 35vmax;
  height: 41.5vmax;
  background-color: #f1f1f1;
  display: flex;
  /* margin: 2rem auto; */
  /* border-radius: 30px; */
  justify-content: center;
  align-items: center;

  label {
    font-size: 0.9rem;
    color: #a3a3a3;
    /* margin-right: 4rem; */
    align-self: baseline;
  }
  span {
    font-size: 1.5rem;
    color: #cc0001;
    align-self: flex-start;
    margin: 10rem 0 0 0;
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
    width: 70%;
    height: 35%;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
  }
  input {
    width: 90%;
    border: 1px solid #b8c6bf;
    border-radius: 5px;
    padding: 13px;
    color: #333;
    margin-bottom: 1rem;
  }
  select {
    width: 100%;
    padding: 13px;
    border: 1px solid #b8c6bf;
    margin-bottom: 1rem;
    border-radius: 5px;
    color: #757575;
  }
  option {
    color: #333;
  }
  button {
    background-color: #c03440;
    color: #f1f1f1;
    font-weight: 300;
    border-radius: 12px;
    border-style: none;
    width: 150px;
    padding: 10px;
    /* height: 35px; */
    margin: 0.4rem 0 0 0;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: #942e3a;
    }
  }
`;

export const Result = styled.div``;
