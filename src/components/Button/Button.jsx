import PropTypes from 'prop-types';

export function Button({ loadMore }) {
  return (
    <>
      <button type="button" className="Button" onClick={loadMore}>
        Load more
      </button>
    </>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
