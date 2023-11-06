// Sorting movies by most recent year first
function sortYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

// Sorting movies alphabetically by title, ignoring “A”, “An”, or “The”
function sortTitle(movies) {
  return movies.sort((a, b) => {
    let titleA = a.title.replace(/^(The |A |An )/, '');
    let titleB = b.title.replace(/^(The |A |An )/, '');
    return titleA.localeCompare(titleB);
  });
}

module.exports = {
  sortYear,
  sortTitle
};
