const adapters =
[8,
131,
91,
35,
47,
116,
105,
121,
56,
62,
94,
72,
13,
82,
156,
102,
12,
59,
31,
138,
46,
120,
7,
127,
126,
111,
2,
123,
22,
69,
18,
157,
75,
149,
88,
81,
23,
98,
132,
1,
63,
142,
37,
133,
61,
112,
122,
128,
155,
145,
139,
66,
42,
134,
24,
60,
9,
28,
17,
29,
101,
148,
96,
68,
25,
19,
6,
67,
113,
55,
40,
135,
97,
79,
48,
159,
14,
43,
86,
36,
41,
85,
87,
119,
30,
108,
80,
152,
158,
151,
32,
78,
150,
95,
3,
52,
49]

//part 1
const joltDiff = adapters.sort((a,b)=> a > b? 1: -1)
    .map((v, i, a) => v - (a[i - 1] || 0));
const solution = joltDiff.filter(item => item === 1).length * (joltDiff.filter(item => item === 3).length +1);

console.log(solution);

//part 2



