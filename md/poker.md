# Poker
<span style="float:right;position:fixed;bottom:10vh;right:5vw;">
  <img src="https://scontent-sjc2-1.xx.fbcdn.net/t39.1997-6/p128x128/851583_499671233448713_2082326075_n.png" style="height:15vw">
</span>

 - The Problem
 - I/O
 - My Approach

# The Problem

Four players hold 5 cards each. Given the sum of each player's card, how many ways could the cards have been arranged?


# I/O

<pre style="font-size:1.7vw">
51 57 63 69           | 1

{
  {{10,10,10,10,J},{J,J,J,Q,Q},{Q,Q,K,K},{K,A,A,A,A}}
}
</pre>

# I/O

<pre style="font-size:1.7vw">
51 57 63 69           | 5

{
  {{10,10,10,10,J},{J,Q,A,A,A},{J,J,Q,Q,Q},{K,K,K,K,A}},
  {{10,10,10,10,J},{J,K,K,A,A},{J,J,Q,Q,Q},{Q,K,K,A,A}},
  {{10,10,10,10,J},{Q,Q,K,A,A},{J,J,J,Q,K},{Q,K,K,A,A}},
  {{10,10,10,10,J},{Q,K,K,K,A},{J,J,J,Q,K},{Q,Q,A,A,A}},
  {{10,10,10,10,J},{Q,K,K,K,A},{J,J,Q,Q,Q},{J,K,A,A,A}},
}
</pre>

# My Approach
```
For each player, find set of hands they could have

counter = 0

For each of A's possible hands
  For each of B's possible hands
    For each of C's possible hands
      For each of D's possible hands
        if A+B+C+D is valid, increment counter

print counter
```

# Finding Hands from Sum
```
public static HashSet<List<Integer>> ways(int sum) {
    if (mem.containsKey(sum)) return mem.get(sum);
    HashSet<List<Integer>> ret = new HashSet<>();
    for (int d : new int[]{10,11,12,13,14}) {
        int remaining = sum-d;
        if (remaining == 0) { ret.add(Collections.singletonList(d)); continue; }
        else if (remaining < 0) continue;
        for (List<Integer> way : ways(remaining)) {
            ArrayList<Integer> clone = new ArrayList<>();
            clone.add(d);
            clone.addAll(way);
            Collections.sort(clone);
            ret.add(clone);
    }}
    mem.put(sum, ret);
    return ret;
}
```

# Validating Hands/Dealings
```
public static boolean isValid(List<Integer> list) {
    for (int d : new int[]{10,11,12,13,14}) {
        ArrayList<Integer> checker = new ArrayList<>();
        checker.addAll(list);
        checker.retainAll(Collections.singletonList(d));
        if (checker.size() > 4)
            return false;
    }
    return true;
}

public static List<Integer> union(List<Integer>... lists) {
    return Arrays.stream(lists).reduce(new ArrayList<>(), (a,b) ->
        new ArrayList<Integer>(){{addAll(a);addAll(b);}});
}
```

# Combining Hands/Counting
```
int count = 0;

for (List<Integer> wayA : waysA) {
    if (wayA.size() != 5 || !isValid(wayA))
        continue;
    for (List<Integer> wayB : waysB) {
        if (wayB.size() != 5 || !isValid(union(wayA, wayB)))
            continue;
        for (List<Integer> wayC : waysC) {
            if (wayC.size() != 5 || !isValid(union(wayA, wayB, wayC)))
                continue;
            for (List<Integer> wayD : waysD) {
                if (wayD.size() != 5 || !isValid(union(wayA, wayB, wayC, wayD)))
                    continue;
                count++;
}}}}
System.out.println(count);
```

# Ways to optimize?
 - Find valid pairings of A & B, C & D then merge?
 - Remove all hands not of size 5 before going jumping into Inception?
 - I think the hand generator might be redundant?
   - I think hands can be generated more than once, but because we use a Set of ordered lists it is handled.
 - Combinatorics/Math?
   - How do we handle cases where more than 4 of a card is used?
 - Other ideas?