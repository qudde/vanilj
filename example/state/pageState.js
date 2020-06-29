import { observable, action } from "mobx";

let pageState = observable({
  pageIndex: 0,
  setPageIndex: action(function setPageIndex(i) {
    this.pageIndex = i;
  })
});

export { pageState };
