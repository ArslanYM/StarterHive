// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import issues from "./list_of_issues.json";
import Issue from "./Issue";
import { ThemeContext } from "../../Context/ThemeContext";
import { useInterectionObserver } from "../../hooks/useInterectionObserver";
import { Fab } from "../../components/Fab/Fab";

const IssuesList = () => {
  const [status, setStatus] = useState("");
  const { theme } = useContext(ThemeContext);
  const { observerRef, isIntersecting } = useInterectionObserver("200px");

  console.log(issues);
  return (
    // <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
    <div className="mx-auto min-h-screen max-w-screen-2xl p-4 md:p-8 2xl:p-10">
      <span className={`text-gray-300 ${theme.text_Color} font-mono font-semibold`}>Filter </span>
      <select
        className={`border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 ${theme.text_Color}`}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginBottom: 20 }}
        ref={observerRef}
      >
        <option value="" className="text-black-400">ALL</option>
        <option value="open" className="text-black-400">OPEN</option>
        <option value="assigned" className="text-black-400">ASSIGNED</option>
        <option value="closed" className="text-black-400">CLOSED</option>
      </select>
      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 ${theme.bg_Selected} items-center`}
      >
        {issues.length
          ? issues.map((issue, key) =>
              issue.status === status || status === "" ? (
                <Issue
                  key={key}
                  repo_name={issue.repo_name}
                  issue_url={issue.issue_url}
                  issue_title={issue.issue_title}
                  issue_labels={issue.issue_labels}
                  status={issue.status}
                  languages={issue.languages}
                  libraries={issue.libraries}
                  stars={issue.stars}
                  forks={issue.forks}
                  createdBy={issue.createdBy}
                />
              ) : (
                ""
              )
            )
          : "Sorry there are no issues..."}
      </div>
      <Fab isVisible={isIntersecting} />
    </div>
  );
};

export default IssuesList;
