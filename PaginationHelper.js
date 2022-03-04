function subArrays(array, ipp) {
  if (ipp < 1) throw "Number of items per page invalid!";
  const result = [];
  const number_of_blocks = Math.ceil(array.length / ipp);
  for (let i = 0, j = 0; i < number_of_blocks; i++, j += ipp) {
    result.push(array.slice(j, j + ipp));
  }
  return result;
}

function PaginationHelper(collection, itemsPerPage) {
  this.pages = subArrays(collection, itemsPerPage);
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return this.pages.length;
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const page = this.pages[pageIndex];
  return page ? page.length : -1;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  const item = this.collection[itemIndex];
  return this.pages.findIndex((x) => x.includes(item));
};
