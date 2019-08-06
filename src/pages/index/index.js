import React from 'react';
import { connect } from 'react-redux';
import  add_store from '../../actions'
import './index.scss'

class Index extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // 订阅更改
    // console.log('componentDidMount')
  }

  componentWillUnmount() {
    // 清除订阅
    console.log('componentWillUnmount')
  }

  componentWillReceiveProps () {
    console.log('change')
  }

  handleClick () {
    this.props.onClick()
  }

  render() {
    return (
      <div onClick={ this.handleClick.bind(this) }>
        {  this.props.example.count }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    example: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      return dispatch(add_store(id))
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps )(Index);