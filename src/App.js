import React from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  var initialData = {
    userInfo:{
      name:'Ana Junior',
      id:'Ann1987',
      headImg:'https://cdn.pixabay.com/photo/2020/07/14/15/43/church-5404699_1280.jpg',
      address:'Chicago',
      gender:'Female',
      email:'xxxxx@gmail.com'
    },
    cardContent:{
      sendTime:'Jan 15',
      message:'Just enjoy it.',
      cardPicture:'https://cdn.pixabay.com/photo/2020/07/14/15/43/church-5404699_1280.jpg',
      cardTitle:'Tourist Around Castle',
      cardDescription:'It is a beautiful castle which belongs to Queen ...',
      commentList:['It\'s a good place!','I have visited it 2 years ago~']
    }
  };
  return (
    <div className="App">
      <Card data={initialData}/>
    </div>
  );
}

export default App;
