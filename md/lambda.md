# Java Lambdas

 - What they are
 - Why they are
 - How to use

# What they are

<div style="float:left" markdown="1">
```Java
Runnable r = new Runnable() {
	public void run() {
	}};
Consumer<String> c = new Consumer<String>(arg) {
	public void accept(String arg) {
		System.out.println(arg);
	}}
Supplier<String> s = new Supplier<String>() {
	public String get() {
		return "Returned Value!"
	}}
Function<String, Integer> f = new Function<String, Integer>() {
	public Integer apply(String in) {
		return in.length();
	}}
```
</div>

<div style="float:right" markdown="1">
```Java
Runnable r = () -> {}

Consumer c = (arg) -> {}

Supplier s = () -> {
	return "Returned Value!"
}

Function f = (in) -> {
	return out;
}
```
</div>