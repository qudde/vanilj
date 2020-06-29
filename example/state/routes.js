import Navigo from "navigo";
import { pageState } from "../state/pageState";

let root = null;
let useHash = true; // Defaults to: false
let hash = "#"; // Defaults to: '#'
let router = new Navigo(root, useHash, hash);

router
  .on("/home", function () {
    pageState.setPageIndex(0);
  })
  .on("/resources", function () {
    pageState.setPageIndex(1);
  })
  .on("/widgets", function () {
    pageState.setPageIndex(2);
  })
  .on("/help", function () {
    pageState.setPageIndex(3);
  })
  .on(function () {
    pageState.setPageIndex(0);
  })
  .resolve();

export default router;
