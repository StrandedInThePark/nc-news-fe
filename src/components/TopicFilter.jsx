import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { Link } from "react-router";

export const TopicFilter = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <>
      <p>Filter by topic</p>
      {topicList.map((topic) => {
        return (
          <Link to={"/" + `?topic=${topic.slug}`}>
            <button key={topic.slug}>{topic.slug}</button>
          </Link>
        );
      })}
    </>
  );
};
