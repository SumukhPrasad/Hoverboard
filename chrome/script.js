const addHoverBoardButton = document.getElementById('add');
addHoverBoardButton.addEventListener("click", function() {
     addHoverBoard()
});
function addHoverBoard() {
     chrome.tabs.executeScript(null,{file:"hoverBoard.js"});
}
