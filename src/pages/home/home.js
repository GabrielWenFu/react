import React from 'react';
import style from './home.module.scss'

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // 订阅更改
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    // 清除订阅
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div className={ style.huangbiao }>
        home
      </div>
    );
  }
}

export default Home;