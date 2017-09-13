import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getTasks, addTask, deleteTask, markTaskCompleted, markTaskunCompleted } from '../../actions';
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

  addToTask = () => {
    const { addTask } = this.props;
    const { des } = this.state;
    addTask({ des, state:'NEW' });
    this.setState({
      des: '',
    });
  };

  delet =(event)=>{
    const { index } = event.target.dataset;
    const { deleteTask } = this.props;    
    if (index) {
      deleteTask(parseInt(index, 10));
    }
  }
  done =(event)=>{
    const { index }= event.target.dataset;
    const { markTaskCompleted } = this.props;
    markTaskCompleted(parseInt(index, 10));
  }

  undone =(event)=>{
    const { index }= event.target.dataset;
    const { markTaskunCompleted } = this.props;
    markTaskunCompleted(parseInt(index, 10));
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
            onClick={this.addToTask}
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
              <button data-index={index} onClick={this.done}>d</button>
              <button data-index={index} onClick={this.undone}>ud</button>
              <span>{task.des}</span>
              <button data-index={index} onClick={this.delet} className="button-come">X</button>
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
    addTask: (text) => dispatch(addTask(text)),
    deleteTask: (index) => dispatch(deleteTask(index)),
    markTaskCompleted: (index) => dispatch(markTaskCompleted(index)),
    markTaskunCompleted: (index) => dispatch(markTaskunCompleted(index))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
