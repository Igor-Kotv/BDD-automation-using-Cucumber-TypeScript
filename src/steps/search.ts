import TheSearch from '../model/pages/home.page';

var module: any;
module.exports = function search() {

    this.Given(
        /^I enter Iphone in search and click go to the item page/,
        function () {
            TheSearch.open();
            TheSearch.searchField.setValue('Iphone');
            TheSearch.findButton.click();
            TheSearch.iTem.click();
            TheSearch.binAdd.click();
        } );

    this.Then(
        /^Then Iphone has been added to the bin/,
        function () {
            TheSearch.binCheck.waitForVisible();
            TheSearch.binAdd.click();
        } );
};