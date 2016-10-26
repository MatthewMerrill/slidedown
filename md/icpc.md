# ICPC
<span style="float:right;position:fixed;bottom:10vh;right:5vw;">
  <img src="https://scontent-sjc2-1.xx.fbcdn.net/t39.1997-6/p128x128/851583_499671233448713_2082326075_n.png" style="height:15vw">
</span>

 - Language Tricks
 - Best practices (in a _totally_ objective manner)
 - Example

# What it is?
 - Read in, Write out.
 - It's the in-between that's the tricky bit.

# What it is?
```Java
Scanner scn = new Scanner(System.in);
int N = scn.nextInt();
for (int n = 0; n < N; ++n)
    System.out.println(Math.pow(scn.nextInt(), 2));
```
```Java
Scanner scn = new Scanner(System.in);
IntStream.generate(scn::nextInt).limit(scn.nextInt())
  .mapToObj(i->(i*i)+"")
  .forEach(System.out::println);
```
_There are no style points, but sometimes it feels like it._

# Best Practices
 - Teaming Strategies
 - Problem Strategies
 - Having Fun

# Teaming Strategies

# Problem Strategies

# Have a Notebook / "Code Bible"
 - Basic scanner tutorial
 - Factorial
 - nCr
 - nPr
 - LCM
 - ACM
 - GCD
 - Anything you can't crank out in 5 minutes without a reference

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

# Having Fun
 - When you complete a problem, crumple it and throw it at the nearest trash can / on the floor shouting "kobe"
   - This removes clutter on your table so you're only physically looking at what you need to solve
   - Doubles as a funny intimidation tactic
   - Make sure you have no code for other problems on there!
 - Complete the practice problem in as many ridiculous ways as possible
   - (solve it once first the right way to make sure you can! :P)
 - Team costume?
   - (Remember you'll be in it for 5 hours though)
 - <a href="https://www.youtube.com/watch?v=CnbSM1Da4GA" target="_blank">Watch inspirational videos</a>