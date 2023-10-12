import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { data, onClick } = props;
  const handleClick = () => {
    onClick(data.id)
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
