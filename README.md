# basket

Explanation
====

I assumed basket is a json object like

```javascript
{
  productA: amount,
  productB: amount,
  ...
}
```

I assumed not all products will be sent to the backend.

I created just one model and prices as an object. In the wild, that would be different,
probably model with name column and cost column, setter/getter (so the cost is not fixed) and so on.

All the assumptions have been taken for the sake of the simplicity to this exercise.

There has to be better ways to calculate the total, I thought one that worked 
for the scenarios in the test and any other scenario given that restrictions.

Test
====
In order to run the test
```bash
  $ npm test
```
That command will run the tests and linter right after  
No grunt tasks have been implemented to keep exercise as simple as possible.


Linter
====
In order to run the linter
```bash
  $ npm run lint
```




