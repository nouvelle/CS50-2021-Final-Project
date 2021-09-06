unsigned long result[];

unsigned long fiboMain(int n) {
  int i;

  result[1] = 1;
  result[2] = 1;

  for (i = 3; i <= n; i++)
      result[i] = result[i - 1] + result[i - 2];

  return result[n];
}


