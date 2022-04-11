export function fisherYates(inputArray) {
    const output = [].concat(inputArray);
    for (let i = output.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = output[i];
      output[i] = output[j];
      output[j] = temp;
    }
    return output;
  }
