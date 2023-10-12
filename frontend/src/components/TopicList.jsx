import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick }) => {
  const handleClick = (topicId) => {
    onTopicClick(topicId); 
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topicData) => (
        <TopicListItem
          key={topicData.id}
          data={topicData}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
