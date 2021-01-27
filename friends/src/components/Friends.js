import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Friends extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(res)
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err.response.data.error)
    })
  }


}


export default Friends;