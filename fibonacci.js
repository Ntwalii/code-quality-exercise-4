const fibonacci = (number) => {
  if (number === 0) return [0];
  const sequence = [0, 1];
  while (sequence[sequence.length - 1] < number) {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  return sequence;
};
