import React from "react";
const Pagination = ({ postPerPage, totalPosts, Paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="pagination"
      >
        {pageNumbers.map((number) => (
          <div>
            <a
              style={{ marginLeft: 10 }}
              onClick={() => Paginate(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
