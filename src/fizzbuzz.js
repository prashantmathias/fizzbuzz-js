function fizzbuzz(n) {

  if (n%3 == 0 && n%5 != 0) {
    return "fizz";
} else if (n%5 == 0 && n%3 != 0) {
    return "buzz";
} else if ((n%3 && n%5) == 0) {
    return "fizzbuzz";
} else {
  return n ;
}

}
