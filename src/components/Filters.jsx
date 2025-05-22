import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { Link } from "react-router";
import { SortBy } from "./SortBy";
import { Order } from "./Order";
import { ClearFiltersButton } from "./ClearFiltersButton.jsx";

export const Filters = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicList(topics);
    });
  }, []);

  return (
    <div className="filterBar">
      <h3 className="filterHeading">Filters</h3>
      <p className="topicHeading">Topics</p>
      <div className="topicFlex">
        {topicList.map((topic) => {
          return (
            <Link className="topicButton" to={"/" + `?topic=${topic.slug}`}>
              <button key={topic.slug}>{topic.slug}</button>
            </Link>
          );
        })}
      </div>

      <p className="sortHeading">Sort by</p>
      <div className="sortFlex">
        <SortBy />
      </div>

      <p className="orderHeading">Order</p>
      <div className="orderFlex">
        <Order />
      </div>
      <ClearFiltersButton />
    </div>
  );
};
