// Function to fetch numbers and calculate average
async function fetchAndCalculateAverage(variable) {
  let url;
  switch(variable) {
    case 'e':
      url = 'http://20.244.56.144/test/even';
      break;
    case 'p':
      url = 'http://20.244.56.144/test/primes';
      break;
    case 'f':
      url = 'http://20.244.56.144/test/fibo';
      break;
    case 'r':
      url = 'http://20.244.56.144/test/rand';
      break;
    default:
      throw new Error('Invalid variable');
  }

  // Fetch numbers
  const response = await fetch(url);
  const json = await response.json();
  const numbers = json.numbers;

  // Calculate average
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  // Return response
  return { numbers, average };
}

// Usage example
fetchAndCalculateAverage('e')
  .then(result => console.log(result))
  .catch(error => console.error(error));
