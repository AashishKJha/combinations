// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const array = ['(', ')'];

const permutation = (len, val, target, array, list) => {
  if (len == 0) {
    list.push(val);
    return;
  } else {
    array.forEach((ele, index) => {
      val = val + array[index];
      if(val.length == target) permutation(len - 1, val , target, array, list);
    });
  }
};

const combo = (array = [], list = [], length) => {
  array.forEach((ele, index) => {
    permutation(length - index, '', length, array, list);
  });

  return list;
};

const items = combo(array, [], 4);

console.log(items)
