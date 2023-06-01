// eslint-disable-next-line no-unused-vars
import React from 'react';
import issues from './list_of_issues.json';
import Issue from './Issue';

const IssuesList = () => {
  console.log(issues);
  return (
    // <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
    <div className='mx-auto max-w-screen-2xl p-4 md:p-8 2xl:p-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 bg-gradient-to-r from-gray-700 via-gray-900 to-black items-center '>
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
    </div>
  );
};

export default IssuesList;
