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


# Hello friends helping test!
 - Try swiping/typing left/right
   - Is this easy to use?
   - Do the inputs register on your first attempt?
 - Does the site "fit" on the page?
   - Expands to full width/height (excluding black bars)
   - Does it flow off a little bit making awkward scrollbars?
 - Is there any annoying flashing between slides?