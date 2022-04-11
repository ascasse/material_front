import { fisherYates } from './service';

it('Fisher-Yates', () => {
    const testArray = [1, 2, 3, 4, 5];
    const output = fisherYates(testArray);
    expect(output.length === testArray.length);
    testArray.forEach(element => {
        expect(output.includes(element));
    });
  });