import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {
    state = {
        todos: [],
    };

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios
            .get('/api/todos')
            .then((res) => {
                if (res.data) {
                    this.setState({
                        todos: res.data,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    deleteTodo = (id) => {
        axios
            .delete(`/api/todos/${id}`)
            .then((res) => {
                if (res.data) {
                    this.getTodos();
                }
            })
            .catch((err) => console.log(err));
    };

    render() {
        let { todos } = this.state;

        return (
            <div className="text-dark mt-5">
                <h1>Enter an item to add to your list</h1>
                <Input getTodos={this.getTodos} />
                <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
                <h2>Or click an item to delete it</h2>
            </div>
        );
    }
}

export default Todo;