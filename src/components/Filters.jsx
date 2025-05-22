import { useState, useEffect } from "react";
import { getTopics } from "../api";
import { SortBy } from "./SortBy";
import { Order } from "./Order";
import { ClearFiltersButton } from "./ClearFiltersButton.jsx";
import { Topics } from "./Topics.jsx";

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
      <Topics topicList={topicList} />

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
