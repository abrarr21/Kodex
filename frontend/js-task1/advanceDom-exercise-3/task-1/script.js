function aboveAverage(num = []) {
    const avg = num.reduce((sum, n) => sum + n, 0) / num.length;

    const greater = num.filter((g) => g > avg);

    return greater;
}

console.log(aboveAverage([1, 2, 3, 4, 10, 100]));
