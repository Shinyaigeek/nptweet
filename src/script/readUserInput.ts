export const readUserInput = (question: string) :Promise<string>=> {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });


  return new Promise((resolve, reject) => {
    readline.question(question, (answer:string) => {
      resolve(answer);
      readline.close();
    });
  });
};
