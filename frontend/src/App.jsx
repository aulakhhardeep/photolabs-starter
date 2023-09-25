import React from 'react';
import './App.scss';
import HomeRoute from 'components/HomeRoute';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForTopicListItem = {
    id: "1",
    slug: "topic-1",
    label: "Nature",
  };
  return (
    <div className="App">
     <HomeRoute />
      {/*{Array.from(Array(3)).map((_, index) => (
        <TopicListItem key={index} data={sampleDataForTopicListItem} />
      ))} */}

    </div>
  );
};

export default App;
