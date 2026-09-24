## 📘 TypeScript Complete Syllabus
🟢 Part 1 — TypeScript Basics
1. TypeScript kya hai?
2. JavaScript vs TypeScript
3. TypeScript install & setup
4. tsconfig.json
5. Type inference
6. Type annotations
7. Primitive types
   - string
   - number
   - boolean
   - null
   - undefined
   - bigint
   - symbol
8. Arrays
9. Tuples
10. any
11. unknown
12. never
13. void

## 🟢 Part 2 — Functions
14. Function parameter types
15. Return types
16. Optional parameters ?
17. Default parameters
18. Rest parameters
19. Function type
20. Arrow functions
21. Callback functions
22. Function overloads

## 🟢 Part 3 — Objects & Custom Types
23. Object types
24. Type aliases
25. Interfaces
26. Interface vs Type
27. Optional properties
28. Readonly properties
29. Index signatures
30. Nested objects
31. Extending interfaces

**Example:**
```
interface User {
  id: number;
  name: string;
  email?: string;
}
```

## 🟡 Part 4 — Union & Intersection Types

32. Union types |
33. Intersection types &
34. Literal types
35. Type aliases with unions
36. Discriminated unions
37. Type narrowing

**Example:**
```
let id: string | number;

id = 101;
id = "ABC";
```

## 🟡 Part 5 — Enums & Advanced Types

38. Enums
39. String enums
40. Numeric enums
41. keyof
42. typeof
43. in
44. as const
45. Type assertions
46. Non-null assertion !

## 🟡 Part 6 — Generics ⭐

**This is very important for interviews and React/real projects.**

47. What are Generics?
48. Generic functions
49. Generic interfaces
50. Generic types
51. Multiple generic parameters
52. Generic constraints
53. extends
54. Generic classes
55. Practical generic examples

**Example:**
```
function getValue<T>(value: T): T {
  return value;
}
```

## 🟠 Part 7 — Classes & OOP

56. Classes
57. Constructor
58. Properties
59. Methods
60. public
61. private
62. protected
63. readonly
64. Getters & setters
65. Inheritance
66. Abstract classes
67. Implementing interfaces
68. Static members

## 🟠 Part 8 — Utility Types ⭐

**Very important for professional TypeScript.**

69. Partial<T>
70. Required<T>
71. Readonly<T>
72. Pick<T, K>
73. Omit<T, K>
74. Record<K, T>
75. Exclude<T, U>
76. Extract<T, U>
77. NonNullable<T>
78. ReturnType<T>
79. Parameters<T>

**Example:**
```
interface User {
  id: number;
  name: string;
  email: string;
}
```

type UserUpdate = Partial<User>;

## 🟠 Part 9 — Modules

80. export
81. import
82. Default export
83. Named export
84. Type-only imports
85. Module organization

## 🔵 Part 10 — TypeScript with JavaScript
86. .ts vs .tsx
87. TypeScript compilation
88. tsc
89. Source maps
90. Strict mode
91. Common tsconfig options
92. strictNullChecks
93. noImplicitAny
94. noUnusedLocals

## ⚛️ Part 11 — TypeScript with React

**Since you're learning React, this part is high priority.**
95. React + TypeScript setup
96. Typing component props
97. Optional props
98. Props with interfaces
99. children typing
100. useState typing
101. useEffect typing
102. useRef typing
103. useContext typing
104. Event typing
105. Form typing
106. Input/Change events
107. Button events
108. API response typing
109. Axios with TypeScript
110. Custom hooks with TypeScript
111. Context API with TypeScript
112. React component types
113. Generic React components

**Example:**

```
interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return <h2>{name} - {age}</h2>;
}
```

## 🔥 Part 12 — Advanced TypeScript

114. Conditional types
115. Mapped types
116. Template literal types
117. Recursive types
118. Generic constraints
119. Advanced type narrowing
120. Type predicates
121. infer
122. Declaration files
123. .d.ts
124. Third-party library typing
125. Module augmentation

## 💼 Part 13 — TypeScript for Real Projects

126. API response interfaces
127. API request types
128. Form validation types
129. Error handling
130. Environment variables
131. Authentication types
132. JWT types
133. Redux + TypeScript
134. React Query/TanStack Query + TypeScript
135. Axios + TypeScript
136. Type-safe reusable components
137. Project folder structure

## 🎯 Part 14 — TypeScript Interview Preparation

**Basic Interview Questions**

- What is TypeScript?
- TypeScript vs JavaScript?
- What is type inference?
- What is any?
- any vs unknown?
- interface vs type?
- What is a tuple?
- What is an enum?
- What is a union type?
- What is an intersection type?

**Intermediate**

- What are generics?
- What is type narrowing?
- What is type assertion?
- What is keyof?
- What is typeof?
- What are utility types?
- Partial vs Required
- Pick vs Omit
- What is never?
- What is unknown?

**Advanced**

- What are conditional types?
- What are mapped types?
- What is infer?
- What are type predicates?
- What are declaration files?
- How does TypeScript compile?
- How do you type a reusable React component?
