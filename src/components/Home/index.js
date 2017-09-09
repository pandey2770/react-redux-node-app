import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { addTask, removeTask, doneTask} from '../../actions';
import './styles.css';


class Home extends Component {
  state = {
  };

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
    const { removeTask } = this.props;    
    if (index) {
      removeTask(parseInt(index, 10));
    }
  }
  done =(event)=>{
    const { index }= event.target.dataset;
    const { doneTask } = this.props;
    doneTask(parseInt(index, 10));
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
    addTask: (text) => dispatch(addTask(text)),
    removeTask: (index) => dispatch(removeTask(index)),
    doneTask: (index) => dispatch(doneTask(index))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
