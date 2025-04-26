const infiList = document.getElementById('infi-list');
let count = 1;

// Function to add list items
function addListItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    infiList.appendChild(li);
    count++;
  }
}

// Initially add 10 items
addListItems(10);

// Event listener for infinite scrolling
infiList.addEventListener('scroll', () => {
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addListItems(2);
  }
});
