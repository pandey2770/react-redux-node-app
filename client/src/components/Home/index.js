import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getTasks, createTask, deleteTask, updateTask } from '../../actions';
import './styles.css';


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
    createTask({ id: 10, des, state:'NEW' });
    this.setState({
      des: '',
    });
  };

  deleteTask =(event)=>{
    const { index } = event.target.dataset;
    const { deleteTask } = this.props;    
    if (index) {
      deleteTask(parseInt(index, 10));
    }
  }

  markAsDone = (event) => {
    const { index }= event.target.dataset;
    const { updateTask } = this.props;
    updateTask(parseInt(index, 10), 'DONE');
  }

  markAsUndone = (event) =>{
    const { index }= event.target.dataset;
    const { updateTask } = this.props;
    updateTask(parseInt(index, 10), 'NEW');
  }
  render() {
    const { des } = this.state;
    return (
      <div>
        <div className="centered">
          <textarea
            className="home-input" 
            placeholder="Task"
            value={des}
            onChange={this.onDesChange}
          />
          <input 
            type="button"
            value="Task"
            onClick={this.createTask}
          />
        </div>
        <div className="centered1">
          {this.props.task.map((task, index) =>
            <div
              className={classNames('task', {
                'task_new': task.state === 'NEW',
                'task_done': task.state === 'DONE',
              })}
              key={`${index}-${task.des}`}
            >
              {task.state === 'NEW' ?
                <button data-index={index} onClick={this.markAsDone}>d</button>:
                <button data-index={index} onClick={this.markAsUndone}>ud</button>}
              <span>{task.des}</span>
              <button data-index={index} onClick={this.deleteTask} className="button-come">X</button>
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
    deleteTask: (index) => dispatch(deleteTask(index)),
    updateTask: (index, state) => dispatch(updateTask(index, state))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
