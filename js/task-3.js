function filterArray(numbers, value) {
    const result = [];
    for (const number of numbers) {
        if (number > value) {
          result.push(number)
        }
    }
    return result;
}