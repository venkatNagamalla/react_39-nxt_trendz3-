/* eslint-disable jsx-a11y/control-has-associated-label */
// import {CiSearch} from 'react-icons/ci'
import {FaSearch} from 'react-icons/fa'
import './index.css'

const FiltersGroup = props => {
  const {
    options,
    ratingsList,
    clearFilters,
    getCategory,
    category,
    getRating,
    rating,
    searchInput,
  } = props

  const renderCategory = () => (
    <ul className="options-container">
      {options.map(eachOption => {
        const changeCategory = () => getCategory(eachOption.categoryId)

        const checkingCategory = category === eachOption.categoryId

        const categoryStyle = checkingCategory
          ? 'options-button active'
          : 'options-button'

        return (
          <li key={eachOption.name} className="option">
            <p onClick={changeCategory} className={categoryStyle} type="button">
              {eachOption.name}
            </p>
          </li>
        )
      })}
    </ul>
  )

  const getInputFromUser = event => {
    const {getSearchInput} = props
    getSearchInput(event.target.value)
  }

  const enterBtnClicked = event => {
    const {onEnterInput} = props
    if (event.key === 'Enter') {
      onEnterInput()
    }
  }

  const renderRating = () => (
    <ul className="options-container">
      {ratingsList.map(eachRating => {
        const changeRating = () => getRating(eachRating.ratingId)

        const checkingRating = rating === eachRating.ratingId
        const ratingStyle = checkingRating
          ? 'rating-text-active'
          : 'rating-text'

        return (
          <li
            key={eachRating.ratingId}
            className="rating-btn"
            onClick={changeRating}
          >
            <img
              className="rating-img"
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
            />
            <p className={ratingStyle}>& up</p>
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className="filters-group-container">
      <div className="input-search-container">
        <input
          onChange={getInputFromUser}
          onKeyDown={enterBtnClicked}
          value={searchInput}
          placeholder="Search"
          className="input-element"
          type="search"
        />
        <FaSearch className="search-icon" />
      </div>
      <div>
        <h1 className="category-heading">Category</h1>
        {renderCategory()}
      </div>
      <div>
        <h1 className="category-heading">Rating</h1>
        {renderRating()}
      </div>
      <button onClick={clearFilters} type="button" className="clear-filter-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
