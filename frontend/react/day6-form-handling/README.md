# Form Handling

### static ways

1. Brute way
2. Better way
3. Optimized way
4. UseRef way

The problem with these static ways are the app is getting re-rendered on every input change which is an expensive operation, therefore, we will use `useRef`. It prevents unnecessary re-render on every input change. It also persists value across renders without causing re-renders.
