import styled from 'styled-components';

export const Names = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1.4rem;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameSpan = styled.span`
  margin: 15px 0;
  font-size: 1.4rem;
`;

export const DeleteBtn = styled.button`
  border-radius: 50%;
  border: none;
  padding: 5px 8px;
  background-color: #981919;
  color: #fff;
`;

export const NewName = styled.input`
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
`;

export const AddNameBtn = styled.button`
  border-radius: 50%;
  border: none;
  padding: 5px 8px;
  background-color: #193f98;
  color: #fff;
  margin: 10px;
`;
