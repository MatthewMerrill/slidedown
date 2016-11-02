# Baby Names
<span style="float:right;position:fixed;bottom:10vh;right:5vw;">
  <img src="https://scontent-sjc2-1.xx.fbcdn.net/t39.1997-6/p128x128/851583_499671233448713_2082326075_n.png" style="height:15vw">
</span>

 - The Problem
 - I/O
 - My Approach

# The Problem

Given a list of people with name and male/female info...
1. Print the 5 highest occurring male names
1. Print the 5 highest occurring female names.

Edge cases:
1. If there are not enough M/F, fill the missing slots with 'null'
1. If names tie, sort alphabetically (lexographically)


# I/O

<pre style="font-size:1.7vw">
John Doe M                                      | John
Amanda Lee F                                    | Alex
John Pierce M                                   | Eric
Kevin Jackson M                                 | Kevin
Jessica Reid F                                  | Diego
Sheldon Cooper M                                | Jennifer
Alex Kane M                                     | Alice
Alice Freeman F                                 | Amanda
John Perez M                                    | Ashley
Kevin Wong M                                    | Jessica
Tiffany Coleman F                               |
Eric Thompson M                                 | 
John Cook M                                     | 
Eric Jobs M                                     | 
Alex Johnson M                                  |
Mohammad Khan M                                 |
Jennifer Green F                                |
Diego Garcia M                                  |
Ashley Morgan F                                 |
-1                                              |
</pre>

# I/O

<pre style="font-size:1.7vw">
John Doe M                                      | John
Barbara Smith F                                 | null
Amanda Lee F                                    | null
-1                                              | null
                                                | null
                                                | Amanda
                                                | Barbara
                                                | null
                                                | null
                                                | null
                                                |
</pre>

# My Approach
```
For both M/F:
  Store occurrence counts in Map name -> count
  Copy names into a list
  Sort list by map value/alphabetically to resolve conflicts
  For i from 0 to 5
    If i < list.size() print list[i], else 'null'
```

# Counting Occurrences
```
Scanner scn = new Scanner(System.in);
Map<String, Integer> occM = new HashMap<String, Integer>();
Map<String, Integer> occF = new HashMap<String, Integer>();
String line;

// While we have a next line, set "line" and check it's not -1.
while (scn.hasNextLine() && !(line=scn.nextLine()).equals("-1")) {
  String[] split = line.split(" "); // ["Matthew", "Merrill", "M"]
  Map<String, Integer> occ = split[2].equals("M") ? occM : occF; // occM for maless
  int val = (occ.containsKey(split[0])) ? occ.get(split[0]) : 0;
  occ.put(split[0], val);
}
```

# Sort
```
ArrayList<String> lsM = new ArrayList<String>();
lsM.addAll(occM.keySet());

lsM.sort((a,b) -> {
  // Sort by decreasing count
  int cmp = Integer.compare(occM.get(b), occM.get(a));

  // If counts are different, return compare value
  if (cmp != 0) return cmp;

  // If conflict, sort alphabetically
  return a.compareTo(b);
});
```

# Print
```
for (int i = 0; i < 5; i++)
  System.out.println((i < lsM.size()) ? lsM.get(i) : "null");
```