import React, { useEffect, useState } from "react";
import {
  Center,
  Box,
  Button,
  Text,
  UnorderedList,
  ListItem,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon,DeleteIcon } from "@chakra-ui/icons";
import { FormControl, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Todo = () => {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");

  const handlechange = () => {
    // Adding to todo with id and complete keys so that we can delete them 
    if(todo){
      const newtodo = {
        id: Date.now(),
        text: todo,
        completed: false,
      };
      setData([...data, newtodo]);
      setTodo("");
    }
   
  };

  const toggleStatus = (id) => {
    // toggling status by finding the todo from data and if we get the todo changing its state
    // if don't the todo returning the that todo
    setData((prev) =>
      prev.map((e) => {
        if (e.id === id) {
          return { ...e, completed: !e.completed };
        }
        return e;
      })
    );
  };

  const removeTodo=(id)=>{
    // removing todo by filtering 
    setData((prev)=> prev.filter((e)=>e.id!==id))
  }
const activetodos = data.filter((todo) => !todo.completed).length;
  
  return (
    <div>
      <Box ml='2cm'>
    
      </Box>
      <Box marginRight='2cm' mt='1' > 
       <Text>Activetodos:{activetodos}</Text>
       <Text>Alltodos:{data.length}</Text>
      </Box>
      <Center>
        <Box w="30%" mt="1cm" p="10px">
          <Box display="flex">
            <Input
              placeholder="Enter new todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <Button ml={4} onClick={handlechange} size="md">
              Add Todos
            </Button>
          </Box>
        </Box>
      </Center>
      <Center>
        {data.length > 0 ? (
          <Box align='left'>
            {data.map((todo, index) => (
              <Box key={todo.id} alignItems='left'>
                <Checkbox
                  isChecked={data.completed}
                  onChange={() => toggleStatus(todo.id)}
                >
                <Text key={index} fontSize="lg">
                  {todo.text}
                </Text>
                </Checkbox>
                <IconButton
                 icon={<DeleteIcon />}
                variant='ghost'
                size='sm'
                onClick={()=>removeTodo(todo.id)} >
                Delete
                </IconButton>
              </Box>
            ))}
          </Box>
        ) : (
          <Text>No todos yet!</Text>
        )}
      </Center>
    </div>
  );
};
export default Todo;
