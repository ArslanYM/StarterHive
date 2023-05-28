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
      ? "text-green-600"
      : status === "assigned"
      ? "text-orange-500"
      : status === "closed"
      ? "text-red-600"
      : "white";

  return (
    <div className="basis-8 text-gray-400 hover:bg-purple-300 rounded px-8 py-4 hover:translate-x-4 transition-all">
      <p>
        <span className="text-yellow-500 mr-2">Repo Name:</span> {repo_name}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">URL:</span>{" "}
        <a
          href={issue_url}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-purple-100"
        >
          {issue_url}
        </a>
      </p>
      <p>
        <span className="text-yellow-500 mr-2">Title:</span> {issue_title}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">Labels:</span> {issue_labels.join(", ")}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">Current status:</span>{" "}
        <span className={statusClassName}>{status}</span>
      </p>
      <p>
        <span className="text-yellow-500 mr-2">Languages used:</span>{" "}
        {languages.join(", ")}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">
          libraries and frameworks used:
        </span>{" "}
        {libraries.join(", ")}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">stars:</span> {stars}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">forks:</span> {forks}
      </p>
      <p>
        <span className="text-yellow-500 mr-2">Contributed by:</span>{" "}
        {createdBy}
      </p>
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
