import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { getTasks, createTask, deleteTask, updateTask } from '../../actions';
import Header from '../Header';


class Home extends Component {
  state = {
  };

  componentWillMount() {
    this.props.getTasks();
  }

  onDesChange = (event) => {
    this.setState({
      des: event.target.value,
    });
  }

  createTask = () => {
    const { createTask } = this.props;
    const { des } = this.state;
    createTask({ des, state:'NEW' });
    this.setState({
      des: '',
    });
  };

  deleteTask =(event)=>{
    const { id } = event.target.dataset;
    const { deleteTask } = this.props;    
    if (id) {
      deleteTask(id);
    }
  }

  markAsDone = (event) => {
    const { id }= event.target.dataset;
    const { updateTask } = this.props;
    updateTask(id, 'DONE');
  }

  markAsUndone = (event) =>{
    const { id }= event.target.dataset;
    const { updateTask } = this.props;
    updateTask(id, 'NEW');
  }
  render() {
    const { history, location } = this.props;        
    const { des } = this.state;
    return (
      <div>
        <Header history={history} location={location} />
        <div className="centered">
          <textarea
            className="home-input" 
            placeholder="Task"
            value={des}
            onChange={this.onDesChange}
          />
          <input 
            type="button"
            value="Add Task"
            onClick={this.createTask}
            className="tasks"
          />
        </div>
        <div className="centered1">
          {this.props.task.map(task =>
            <div
              className={classNames('task', {
                'task_new': task.state === 'NEW',
                'task_done': task.state === 'DONE',
              })}
              key={task.id}
            >
              {task.state === 'NEW' ?
                <button data-id={task.id} onClick={this.markAsDone}>d</button>:
                <button data-id={task.id} onClick={this.markAsUndone}>ud</button>}
              <span>{task.des}</span>
              <button data-id={task.id} onClick={this.deleteTask} className="button-come">X</button>
            </div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  task: state.task
});
  
const mapDispatchToProps = (dispatch) => {
  return {
    getTasks: () => dispatch(getTasks()),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (id) => dispatch(deleteTask(id)),
    updateTask: (id, state) => dispatch(updateTask(id, state))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
