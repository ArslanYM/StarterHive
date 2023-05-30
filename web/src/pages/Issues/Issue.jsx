// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";

const Issue = ({
  repo_name = "",
  issue_url = "",
  issue_title = "",
  issue_labels = [],
  status = "",
  languages = [],
  libraries = [],
  stars,
  forks,
  createdBy = "",
}) => {
  const statusClassName =
    status === "open"
      ? "text-green-700 border-green-500"
      : status === "assigned"
        ? "text-orange-700 border-orange-500"
        : status === "closed"
          ? "text-red-700 border-red-500"
          : "white";

  return (
    <div className="border  border-gray-800 rounded-lg hover:shadow-sm hover:shadow-purple-900 hover:border-gray-700 transition-all w-11/12 lg:w-3/4">
      <div className="p-2  shadow-lg ">
        <h1 className="text-lg font-bold text-gray-300">{issue_title} <span className={`px-2 text-sm font-semibold rounded-full border ${statusClassName}`}>{status}</span></h1>
        <div className="flex justify-between">
          <h3 className="text-gray-400 font-mono font-semibold">Repo:  <span className="italic">{repo_name}</span></h3>
          <div className="flex gap-2">
            <div className="border border-gray-700 rounded-lg px-2"><span className="border-r h-full border-gray-500 pr-1 text-gray-300 font-medium">Fork</span><span className="text-gray-300 ml-1 bg-gray-900 rounded-full px-1 font-mono">{forks}</span></div>
            <div className="border border-gray-700 rounded-lg px-2"><span className="border-r h-full border-gray-500 pr-1 text-gray-300 font-medium">Star</span><span className="text-gray-300 ml-1 bg-gray-900 rounded-full px-1 font-mono">{stars}</span></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 mt-2">
        <div>
          <h2 className="text-sm text-white font-semibold">Languages</h2><br />
          <div className="flex gap-2">
            {languages.map((item) => {
              return <span className="text-white font-mono text-base bg-slate-500 rounded-lg px-1" key={item}>{item}</span>
            })}
          </div>
        </div>
        <div>
          <h2 className="text-sm text-white font-semibold">Framework/Libraries</h2><br />
          <div className="flex gap-2">
            {libraries.map((item) => {
              return <span className="text-white font-mono text-base border border-slate-500 rounded-lg px-1" key={item}>{item}</span>
            })}
          </div>
        </div>
      </div>
      <div>Lables</div>
      <div>Created by</div>
      <div>URL</div>
    </div>
  );
};

export default Issue;

Issue.propTypes = {
  repo_name: PropTypes.string,
  issue_url: PropTypes.string,
  issue_title: PropTypes.string,
  issue_labels: PropTypes.array,
  status: PropTypes.string,
  languages: PropTypes.array,
  libraries: PropTypes.array,
  stars: PropTypes.number,
  forks: PropTypes.number,
  createdBy: PropTypes.string,
};
