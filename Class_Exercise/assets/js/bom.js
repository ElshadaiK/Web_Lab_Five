/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 

const location_info = document.querySelectorAll('.collection')[0];  
const browser_info = document.querySelectorAll('.collection')[1];  
const screen_info = document.querySelectorAll('.collection')[2];  
const history_info = document.querySelectorAll('.collection')[3];  


// Display the BOM Information on the innerHTML of the elements
location_info.children[0].firstElementChild.textContent = window.location.href
location_info.children[1].firstElementChild.textContent = window.location.protocol
location_info.children[2].firstElementChild.textContent = window.location.host
location_info.children[3].firstElementChild.textContent = window.location.port
location_info.children[4].firstElementChild.textContent = window.location.hostname

browser_info.children[0].firstElementChild.textContent = navigator.appName
browser_info.children[1].firstElementChild.textContent = navigator.appVersion
browser_info.children[2].firstElementChild.textContent = navigator.platform
browser_info.children[3].firstElementChild.textContent = navigator.language
browser_info.children[4].firstElementChild.textContent = navigator.cookieEnabled

screen_info.children[0].firstElementChild.textContent = window.screen.height
screen_info.children[1].firstElementChild.textContent = window.screen.width
screen_info.children[2].firstElementChild.textContent = window.screen.pixelDepth

history_info.children[0].firstElementChild.textContent = window.history.length
history_info.children[1].firstElementChild.textContent = window.history.state