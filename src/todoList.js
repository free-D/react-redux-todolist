import React from 'react';
import { connect } from 'react-redux'

const TodoList = props => {
  const { inputVal, list, handleInputChange, handleBtnClick, handleItemDelete } = props;
  return(
    <div>
      <div>
        <input value={inputVal} onChange={handleInputChange}/>
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li 
                key={index}  
                onClick={(index) => handleItemDelete(index)}
              >
                {item}
              </li>)
          })
        }
      </ul>
    </div>
  )
}·

const mapStateToProps = state => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick() {
      const action = {
        type: 'add_listItem'
      }
      dispatch(action)
    },
    handleItemDelete(index) {
      const action = {
        type: 'delete_listItem',
        index: index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
