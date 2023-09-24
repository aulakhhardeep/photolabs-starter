import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
//import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';
import TopicListItem from 'components/TopicListItem';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForTopicListItem = {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  };
  return (
    <div className="App">
      <TopicListItem data={sampleDataForTopicListItem}/>
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList />

    </div>
  );
};

export default App;
