const addHoverBoardButton = document.getElementById('add');
addHoverBoardButton.addEventListener("click", function() {
     addHoverBoard()
});
function addHoverBoard() {
     browser.tabs.executeScript(null,{file:"hoverBoard.js"});
}
