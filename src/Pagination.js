import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentPage } from './store/pagination';
import { getCurrentPage } from './store';
import UsersTable from './UsersTable';

const Pagination = ({ currentPage, setCurrentPage, tableData, withInfo }) => {
  const perPage = 5;
  const startPage = 1;

  const handleClick = e => {
    const { value } = e.target;

    if (currentPage !== +value) {
      setCurrentPage(+value);
    }
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(tableData.length / perPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <>
      <UsersTable users={tableData.slice(indexOfFirstItem, indexOfLastItem)} />
      <div className="pagination__container">
        <div>
          {withInfo && (
            <span className="pagination__info">
              {`From ${indexOfFirstItem + 1} to ${
                indexOfLastItem > tableData.length
                  ? tableData.length
                  : currentPage * perPage
              } of ${tableData.length}`}
            </span>
          )}
        </div>
        <ul className="pagination">
          <li>
            <button
              type="button"
              className={cn('pagination__page', {
                'pagination__page--disabled': currentPage === startPage,
              })}
              onClick={goToPrevPage}
              disabled={currentPage === startPage}
            >
              Previous
            </button>
          </li>

          {pageNumbers.map(number => (
            <li key={number}>
              <button
                className={cn('pagination__page', {
                  'pagination__page--active': currentPage === number,
                })}
                type="button"
                key={number}
                value={number}
                onClick={handleClick}
              >
                {number}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              className={cn('pagination__page', {
                'pagination__page--disabled':
                  currentPage === pageNumbers.length,
              })}
              disabled={currentPage === pageNumbers.length}
              onClick={goToNextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  currentPage: getCurrentPage(state),
});

export default connect(mapStateToProps, { setCurrentPage })(Pagination);

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  withInfo: PropTypes.bool,
};

Pagination.defaultProps = {
  withInfo: false,
};
