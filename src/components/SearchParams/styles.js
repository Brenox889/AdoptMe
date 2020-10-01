import styled from 'styled-components';

export const Container = styled.div`
  width: 35vmax;
  height: 41vmax;
  background-color: #f1f1f1;
  display: flex;
  /* margin: 2rem auto; */
  /* border-radius: 30px; */
  /* justify-content: center; */
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    align-self: flex-start;
    /* justify-content: center; */
    margin: 2rem 0 0 12rem;
    position: absolute;
  }
  input {
    width: 320px;
  }
`;
