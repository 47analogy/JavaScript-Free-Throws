// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const totalPages = this.pageCount();

  if (pageIndex + 1 > totalPages) {
    return -1;
  } else if (
    pageIndex + 1 === totalPages &&
    this.collection.length % this.itemsPerPage > 0
  ) {
    return this.collection.length % this.itemsPerPage;
  } else {
    return this.itemsPerPage;
  }
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let page = 0;

  for (let i = 0; i < this.collection.length; i++) {
    let index = i;
    if (index % 4 === 0) page++;
    if (index === itemIndex) return --page;
  }
  return -1;
};

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper);
console.log(helper.pageCount());
console.log(helper.itemCount());
console.log(helper.pageItemCount(1));
console.log(helper.pageIndex(5));
