const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "I told my code to stop running... but it just kept throwing exceptions.",
  "To understand recursion, you must first understand recursion.",
];

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
console.log(`> ${randomJoke}`);

