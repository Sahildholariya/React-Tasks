import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import DisplayCount from "./DisplayCount";
import { addTodo } from "../redux/actions/todo";
import { connect } from "react-redux";
import { v4 } from "uuid";

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  
  const hendleSubmit =(event)=>{
    event.preventDefault();
    //add todo in store 
    addTodo({...todo,id:v4()})
    console.log(todo)
    setTodo({
      title:'',
      description:'',
      id:''
    })
  } 

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3> Add Todo here !!</h3>
              <DisplayCount/>

              {/* Form */}
              <Form onSubmit={hendleSubmit}>
                {/* Title */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control 
                    type="text"
                    placeholder="Enter here.." 
                    value={todo.title}
                    onChange={event=>setTodo({...todo,title:event.target.value})}
                  />
                </Form.Group>

                {/* Description */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter here.."
                    value={todo.description}
                    onChange={event=>setTodo({...todo,description:event.target.value})}
                  />
                </Form.Group>

                <Container className="text-center mt-3">
                  <Button disabled={todo.title.length <= 5 || todo.description.length <= 5} type="submit" variant="primary">Add Todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state)=>({})
const mapDispatchToProps = (dispatch)=>({
  addTodo:(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
