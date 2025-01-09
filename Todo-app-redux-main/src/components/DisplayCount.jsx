import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCount = ({todos}) => {
  return (
    <Card className='shadow-sm border border-0'>
      <Card.Body>
        <h4>Number of Todos: {todos.length}</h4>
      </Card.Body>
    </Card>
  )
}


const mapStateToProps = (state) =>{
  return {todos:state.todoReducer}
}
export default connect(mapStateToProps) (DisplayCount)
