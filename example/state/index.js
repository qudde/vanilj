import { observable, action } from "mobx";

let appState = observable({
  pageIndex: 0,
  setPageIndex: action(function setPageIndex(i) {
    this.pageIndex = i;
  })
});

export { appState };
