import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  
  const photoComponents = [];
  for (let i = 0; i < 3; i++) {
    photoComponents.push(
    <div key={i}>
      <PhotoFavButton />
      <PhotoListItem data={sampleDataForPhotoListItem} />
      
    </div>
  );
}


  return (
    <div className="App">
      {photoComponents}
    </div>
  );
};

export default App;
