function getOptimalPath(path: any[]): number {
  const optimalPath: any[] = path.reverse().reduce((acc: any, current: any) => {
    return current.map((value: any, index: any) => {
      return value + Math.min(acc[index], acc[index + 1]);
    });
  });

  return optimalPath.pop();
}