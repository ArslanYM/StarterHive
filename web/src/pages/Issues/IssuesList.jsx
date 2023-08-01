// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import issues from "./list_of_issues.json";
import Issue from "./Issue";
import { ThemeContext } from "../../Context/ThemeContext";
import { useInterectionObserver } from "../../hooks/useInterectionObserver";
import { Fab } from "../../components/Fab/Fab";

const IssuesList = () => {
  const [status, setStatus] = useState("");
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [status]);

  const { observerRef, isIntersecting } = useInterectionObserver("200px");

  const ITEMS_PER_PAGE = 6;
  const PAGE_RANGE = 3;

  const filteredIssues = issues.filter(
    (issue) => issue.status === status || status === ""
  );

  const totalPages = Math.ceil(filteredIssues.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - Math.floor(PAGE_RANGE / 2));
    const endPage = Math.min(totalPages, startPage + PAGE_RANGE - 1);

    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="mr-2 bg-blue-300 px-3 py-1 rounded-md"
        >
          Previous
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mr-2 ${i === currentPage ? "bg-blue-600 text-white" : "bg-blue-300"
            } px-3 py-1 rounded-md`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-blue-300 px-3 py-1 rounded-md"
        >
          Next
        </button>
      );
    }

    return buttons;
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentIssues = filteredIssues.slice(startIndex, endIndex);

  console.log(issues);
  return (
    // <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
    <div className="mx-auto min-h-screen max-w-screen-2xl p-4 md:p-8 2xl:p-10">
      <span
        className={`text-gray-300 ${theme.text_Color} font-mono font-semibold`}
      >
        Filter{" "}
      </span>
      <select
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginBottom: 20 }}
        ref={observerRef}
      >
        <option value="">ALL</option>
        <option value="open">OPEN</option>
        <option value="assigned">ASSIGNED</option>
        <option value="closed">CLOSED</option>
      </select>
      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 ${theme.bg_Selected} items-center`}
      >
        {currentIssues.length ? (
          currentIssues.map((issue, key) => (
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
          ))
        ) : (
          <p>Sorry, there are no issues...</p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {renderPaginationButtons()}
      </div>
      <Fab isVisible={isIntersecting} />
    </div>
  );
};

export default IssuesList;
