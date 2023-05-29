// eslint-disable-next-line no-unused-vars
import React from "react";
import issues from "./list_of_issues.json";
import Issue from "./Issue";

const IssuesList = () => {
  console.log(issues);
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black items-start">
      {issues.map((issue) => (
        <Issue
          key={issue.issue_id}
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
      ))}
    </div>
  );
};

export default IssuesList;
