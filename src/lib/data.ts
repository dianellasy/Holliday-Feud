export interface Answer {
  text: string;
  points: number;
  revealed: boolean;
}

export interface Question {
  id: number;
  prompt: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    prompt: "What are the topics that will be on the midterm?",
    answers: [
      { text: "Script files written in bash language", points: 10, revealed: false },
      { text: "General registers", points: 10, revealed: false },
      { text: "Licenses for intellectual property", points: 10, revealed: false },
      { text: "Hardware", points: 4, revealed: false },
      { text: "Programming", points: 4, revealed: false },
      { text: "Macros", points: 4, revealed: false },
      { text: "System function (chapter 13)", points: 4, revealed: false },
      { text: "Calling functions written in assembly", points: 4, revealed: false },
      { text: "Heroes of computer science", points: 4, revealed: false },
      { text: "Unsigned integers", points: 4, revealed: false },
      { text: "Twos complement", points: 4, revealed: false },
      { text: "IEEE754", points: 4, revealed: false },
      { text: "Architecture", points: 4, revealed: false },
      { text: "Endian", points: 3, revealed: false },
      { text: "X86 Arithmetic Instructions", points: 3, revealed: false },
      { text: "X86 Other Instructions", points: 3, revealed: false },
      { text: "Library functions", points: 3, revealed: false },
      { text: "Make a function written in assembly", points: 3, revealed: false },
      { text: "Tool chain", points: 3, revealed: false },
      { text: "Compare two values", points: 3, revealed: false },
      { text: "A list of all the possible jumps for cmp and another list of jumps for ucomisd", points: 3, revealed: false },
      { text: "How to make a loop", points: 3, revealed: false },
      { text: "Know the meanings of push and pop", points: 3, revealed: false }
    ]
  },
  {
    id: 2,
    prompt: "What can a student do to better prepare himself/herself before the CPSC 240 midterm?",
    answers: [
      { text: "Study the lecture notes", points: 25, revealed: false },
      { text: "Eat breakfast", points: 25, revealed: false },
      { text: "Study with your classmates", points: 25, revealed: false },
      { text: "Volunteer to try to debug Assignment 3 written by a struggling classmate", points: 25, revealed: false }
    ]
  }
];