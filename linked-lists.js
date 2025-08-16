const numbers = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};

numbers.next = numbers.next.next;
console.log("distorted numbers: ", numbers);
