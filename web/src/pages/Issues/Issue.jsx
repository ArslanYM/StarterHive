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
    <div className="border-2 bg-purple-950 bg-opacity-10 border-gray-800 rounded-lg hover:shadow-sm  hover:border-slate-700 transition-all w-11/12 lg:w-3/4">
      <div className="p-2  shadow-lg ">
        <h1 className="text-lg font-bold text-gray-100">{issue_title} <span className={`px-2 text-sm font-semibold rounded-full border ${statusClassName}`}>{status}</span></h1>
        <div className="flex justify-between">
          <h3 className="text-gray-300 font-mono font-semibold">Repo:  <span className="italic font-normal">{repo_name}</span></h3>
          <div className="flex gap-2">
            <div className="border border-gray-700 rounded-lg px-2"><span className="border-r h-full border-gray-500 pr-1 text-gray-300 font-medium text-sm">Fork</span><span className="text-gray-300 ml-1 bg-gray-700 rounded-full px-1 font-mono">{forks}</span></div>
            <div className="border border-gray-700 rounded-lg px-2"><span className="border-r h-full border-gray-500 pr-1 text-gray-300 font-medium text-sm">Star</span><span className="text-gray-300 ml-1 bg-gray-700 rounded-full px-1 font-mono">{stars}</span></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 mt-2">
        <div>
          <h2 className="text-md text-gray-300 font-semibold">Languages</h2><br />
          <div className="flex gap-2">
            {languages.map((item) => {
              return <span className="text-white font-mono text-base bg-slate-500 rounded-lg px-1" key={item}>{item}</span>
            })}
          </div>
        </div>
        <div className="pr-4">
          <h2 className="text-sm text-gray-400 font-semibold">Framework/Libraries</h2><br />
          <div className="flex gap-2">
            {libraries.map((item) => {
              return <span className="text-white font-mono text-base border border-slate-500 rounded-lg px-1" key={item}>{item}</span>
            })}
          </div>
        </div>
      </div>
      <div className="px-2 mt-2 border-t border-gray-700">
        <div className="flex gap-2 mt-2 justify-center">
          {issue_labels.map((item) => {
            return <span className="text-gray-100 text-sm borde rounded-full px-1 bg-yellow-600" key={item}>{item}</span>
          })}
        </div>
      </div>
      <div className="flex justify-between px-4 py-2">
        <h3 className="text-md font-mono text-white">Created by: { createdBy}</h3>
        <button className="text-blue-500 font-semibold hover:text-gray-500 hover:scale-90 px-1 transition-all"><a href={issue_url}>View Issue</a></button>
      </div>
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
