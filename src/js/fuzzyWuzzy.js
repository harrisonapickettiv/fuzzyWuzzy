// get the values from the page
const getValues = () => {
  const start = parseInt(document.querySelector("#startValue").value);
  const end = parseInt(document.querySelector("#endValue").value);

  const validated =
    Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end >= 0;

  return validated ? { start, end } : { error: true, start, end };
};

// generate numbers from startvalue to the endValue
const genNumbers = (start, end) => {
  const numbers = [];

  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }

  return numbers;
};

// display the numbers and mark even numbers bold
const displayNumbers = (numbers) => {
  let html = "";

  for (const i of numbers) {
    html += `<tr><td class="${i % 2 === 0 ? "even" : "odd"}">${i}</td></tr>`;
  }

  document.querySelector("#results").innerHTML = html;
};

// display a pretty error
const displayError = () => {
  document.querySelector("#results").innerHTML = `
    <div class="bg-danger text-light">
      <h2 class="text-light">Error:</h2>
      <p>Start and end values must both be a positive integer.</p>
    </div>
  `;
};

// put it all together in a single controller
const fuzzyWuzzy = () => {
  const { start, end, error } = getValues();

  if (error) {
    return displayError();
  }

  const numbers = genNumbers(start, end);
  displayNumbers(numbers);
};

export { getValues, genNumbers, displayNumbers, displayError, fuzzyWuzzy };
