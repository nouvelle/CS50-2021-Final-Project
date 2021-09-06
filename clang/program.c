unsigned long fiboMain(int n) {
  unsigned long f; 

  switch (n) {
    case 1:
    case 2:
      f = 1;
      break;
    default:
      f = fiboMain(n - 1) + fiboMain(n - 2);
      break;
  }
  return f;
}
