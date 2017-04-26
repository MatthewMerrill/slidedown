# ICPC
<span style="float:right;position:fixed;bottom:10vh;right:5vw;">
  <img src="img/hacking.png" style="height:30vw">
</span>

- What it is?
- Java Walkthrough
- House Example



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
The second line will contain *N* integers. Print each of the *N* integers raised to the second power on its own line.

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
Scanner scn = new Scanner(System.in);

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
  - Integer Overflow --> Long/BigInteger
  - 0/1 indexing
  - Negative inputs?
  - Integer divide?
  - Ints/Doubles
  - Double precision?



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

Constraints:
- 3 <= W, H <= 15
- W is odd

```
7 4       |    *
          |   * *
          |  *   *
          | *******
          | *     *
          | *     *
          | *******
```



# House Example
## Bass Man, Break It Down

- Read W, H
- Point of roof
- Roof Slope
- Base of roof
- Walls of house
- Base of house 

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
    *
   * *
  *   *
 *******
 *     *
 *     *
 *******
```
</div>



# House Example
## Read W, H

Use Scanner to read in two integers

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
Scanner scn = new Scanner(System.in);
int W = scn.nextInt();
int H = scn.nextInt();
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
    *
   * *
  *   *
 *******
 *     *
 *     *
 *******
```
</div>



# House Example
## Point of roof

One _\*_, halfway into width...

W/2 spaces, 1 \*.

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
for (int i = 0; i < W/2; i++)
  System.out.print(" "); // print, not println!
System.out.println("*");
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
    *
   * *
  *   *
 *******
 *     *
 *     *
 *******
```
</div>



# House Example
## Repeated String Utility

```Java  
public static String repeat(String str, int n) {
  String ret = "";
  for (int i = 0; i < n; i++) {
    ret += str;
  }
  return ret;
}
```


# House Example
## Point of roof

One _\*_, halfway into width...

W/2 spaces, 1 \*.

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
System.out.println(repeat(" ", W/2) + "*");
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
    *
```
</div>



# House Example
## Roof Slope

- What does spacing start as? How does it change?

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
int leftPad = W/2-1;
int middleSpacing = 1;
while (leftPad > 0) {
  System.out.print(repeat(" ", leftPad)+"*");
  System.out.println(repeat(" ", middleSpacing)+"*");
  leftPad -= 1;
  middleSpacing += 2;
}
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
   *
  * *
 *   *
```
</div>



# House Example
## Roof Base

Just a \* repeated W times!

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
System.out.println(repeat("*", W));
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
   *
  * *
 *   *
*******
```
</div>



# House Example
## House Walls

Just a \* repeated W times!

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
String walls = "*" + repeat(" ", W-2) + "*";
System.out.print(repeat(walls + "\n", H-2));
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
   *
  * *
 *   *
*******
*     *
*     *
```
</div>



# House Example
## House Base

Just a \* repeated W times!

<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;left:5vh;width:70vw;">
```Java
System.out.println(repeat("*", W));
```
</div>
<div markdown="1" style="position:absolute;margin:0;padding:0;bottom:5vh;right:5vh;width:20vw;">
```
   *
  * *
 *   *
*******
*     *
*     *
*******
```
</div>



# Good Luck!