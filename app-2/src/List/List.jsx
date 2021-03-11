import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from 'styling/Button';
import Input from 'styling/Input';

const addToList = (item, list) => [...list, item];
const removeFromList = (list) => [...list.slice(0, -1)];

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 8.5rem 8.5rem;
  grid-template-rows: 2rem 2rem auto;

  column-gap: 1rem;
  row-gap: 1rem;

  & > ${Input} {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const Item = styled.li`
  list-style-position: inside;
`;

const List = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState();
  const inputEl = useRef(null);
  return (
    <ListContainer>
      <Input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        ref={inputEl}
      />
      <Button
        onClick={() => {
          if (!!input) {
            setList(addToList(input, list));
            setInput('');
            inputEl.current.value = '';
          }
        }}>
        Add
      </Button>
      <Button
        secondary
        onClick={() => {
          setList(removeFromList(list));
        }}>
        Remove
      </Button>
      <ul>
        {list.map((item, key) => (
          <Item key={`list-${key}`}>{item}</Item>
        ))}
      </ul>
    </ListContainer>
  );
};

export default List;
