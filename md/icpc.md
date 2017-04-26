# ICPC
<span style="float:right;position:fixed;bottom:10vh;right:5vw;">
  <img src="img/hacking.png" style="height:15vw">
</span>

- What it is?
- Java Walkthrough

# What it is?
- 3/4 hour competition with a pizza break intermission.
- Solving a problem earns you a balloon.
- Team who solves the most problems wins!
- If there's a tie, lower penalty score is better.
  - Penalty is sum of:
     - 20 * # incorrect submissions for problems you solved
     - Successful submission time in minutes.
- Solving questions:
  - Read input, Print answer.
  - It's the in-between that's the tricky bit.

# What it is?
### Sample Problem:

The first line will contain a single integer *N*, the number of integers to follow.
The second line will contain *N* integers. Print each of the *N* integers raised to the second power on its on line.

Example:
<pre>
3                | 1
1 2 3            | 4
                 | 9
</pre>

# Java Walkthrough
<span style="float:right;position:fixed;bottom:5vh;right:5vh;">
  <img src="img/newclassexample.png" style="height:45vw">
</span>

1. Make a new Java Project
   - Name doesn't matter.
2. Make a new class
   - **NO PACKAGE**

# Java Walkthrough
## java.util.Scanner
```Java
Scanner scn = new Scanner(System.in);

int i = scn.nextInt(); // reads next integer
double d = scn.nextDouble(); // reads next double
String word = scn.next(); // reads next word

String line = scn.nextLine(); // reads next line. Don't mix with the others!
int i2 = Integer.parseInt(scn.nextLine());
double d2 = Double.parseDouble(scn.nextDouble());
```

# Java Walkthrough
## Sending Output

```
Scanner scn = new Scanner();

int i = scn.nextInt();
int res = i*i;

// Only print what they ask for!
System.out.println(res);
```

Only print what they ask for! **Do not prompt.** ("Enter Name: ")



# What it is?
### Sample Problem:

The first line will contain a single integer *N*, the number of integers to follow.
The second line will contain *N* integers. Print each of the N integers raised to the second power on its on line.

Example:
<pre>
3                | 1
1 2 3            | 4
                 | 9
</pre>


# What it is?
```Java
Scanner scn = new Scanner(System.in);
int N = scn.nextInt();
for (int n = 0; n < N; n++) {
    int i = scn.nextInt();
    System.out.println(i*i);
}
```

# What it is?
```Java
Scanner scn = new Scanner(System.in);
int N = scn.nextInt();
for (int n = 0; n < N; n++) {
    int i = scn.nextInt();
    System.out.println(i*i);
}
```
```Java
Scanner scn = new Scanner(System.in);
IntStream.generate(scn::nextInt).limit(scn.nextInt())
  .map(i -> i*i).forEach(System.out::println);
```
_There are no style points, but sometimes it feels like it._


# Best Practices
 - Teaming Strategies
 - Problem Strategies
 - Having Fun

# Teaming Strategies
- Diverse Strengths
- Time Management
  - Bring Paper!

# Problem Strategies
- Messy code is hard to debug code
  - But if it works, it works.
- Wrong answer but you're confident in strategy:
  - Integer Overflow
  - 0/1 indexing

# Have a Notebook / "Code Bible"
- Basic Scanner tutorial
- Eclipse Hotkeys
  - Auto-Import: Ctrl+Shift+O
  - Send "End Of File" to Console: Ctrl+D
- Math utilities
  - Factorial
  - nCr/nPr
  - LCM/ACM/GCD
- Graph Algorithms
  - BFS/DFS/Max Flow/Min Spanning/Shortest Path
- Anything you can't mindlessly code in 2 minutes without a reference
- You might be able to find Stanford's/Berkeley's online.
  - Be familiar with the algorithms you bring before the competition!

# Collections Tricks
 - asList(T...)
 - nCopies
 - sort (with and without lambdas)

# House Example

```
   *
  * *
 *   *
*******
*     *
*     *
*     *
*     *
*******
```

# Lambda Example
 - <a href="http://www.acmicpc-pacnw.org/ProblemSet/2015/Statements/div1.pdf" target="_blank">PacNW - Classy</a>
 - <a href="https://github.com/MatthewMerrill/ICPC/blob/master/CSUSCC/java/Classy.java" target="_blank">Classy Answer</a>

# Having Fun
 - Pop other teams' balloons ("Who has more now?!?")
 - Skip the pizza during the break and take the opportunity to break the leading team's semicolon fingers (...or tab fingers, if they're weird python people).
 - Pick a team about your skill level and make it your personal vendetta, at any cost, to make certain that you reign absolutely and algorithmically supreme over them; proving dominance and ensuring they'll think twice about taking you on next semester.
 - Use chrome dev tools to find where the PC^2 server is running, ssh into it, run a fork bomb, eat more pizza in the resulting aftermath.

# Having Fun<strike markdown="1">
 - Pop other teams' balloons ("Who has more now?!?")
 - Skip the pizza during the break and take the opportunity to break the leading team's semicolon fingers (...or tab fingers, if they're weird python people).
 - Pick a team about your skill level and make it your personal vendetta, at any cost, to make certain that you reign absolutely and algorithmically supreme over them; proving dominance and ensuring they'll think twice about taking you on next semester.
 - Use chrome dev tools to find where the PC^2 server is running, ssh into it, run a fork bomb, eat more pizza in the resulting aftermath.
</strike>