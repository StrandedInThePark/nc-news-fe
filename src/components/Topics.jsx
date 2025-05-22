import { useQueryUpdate } from "../hooks/UseQueryUpdate";

export const Topics = ({ topicList }) => {
  const updateQuery = useQueryUpdate();

  return (
    <div className="topicFlex">
      {topicList.map((topic) => {
        return (
          <button
            onClick={() => updateQuery("topic", `${topic.slug}`)}
            key={topic.slug}
          >
            {topic.slug}
          </button>
        );
      })}
    </div>
  );
};
