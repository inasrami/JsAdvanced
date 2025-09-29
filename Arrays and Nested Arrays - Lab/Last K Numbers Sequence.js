function LastKNumbersSequence(n, k){
   let sequence = [1];

  for (let i = 1; i < n; i++) {
    let start = Math.max(0, i - k);
    let sum = sequence.slice(start, i).reduce((a, b) => a + b, 0);

    sequence.push(sum);
  }

  return sequence;
  
}
LastKNumbersSequence(6, 3)