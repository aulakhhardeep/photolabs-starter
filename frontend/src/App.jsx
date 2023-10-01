import React from 'react';

import HomeRoute from 'components/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
     <HomeRoute photos={photos} topics={topics} />
     <PhotoDetailsModal />
      {/*{Array.from(Array(3)).map((_, index) => (
        <TopicListItem key={index} data={sampleDataForTopicListItem} />
      ))} */}

    </div>
  );
};

export default App;
