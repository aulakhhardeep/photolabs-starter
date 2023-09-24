import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';
//import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForTopicListItem = {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  };
  return (
    <div className="App">
      {/*{Array.from(Array(3)).map((_, index) => (
        <TopicListItem key={index} data={sampleDataForTopicListItem} />
      ))} */}
      <TopicList />
      <PhotoList />
      <PhotoFavButton />

    </div>
  );
};

export default App;
