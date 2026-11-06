# @lp-labs/geometric-distribution

Failures-before-first-success geometric probability.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/geometric-distribution
```

## Working example

```js
import { geometricPmf } from '@lp-labs/geometric-distribution';
if (Math.abs(geometricPmf(2, 0.5) - 0.125) > 1e-12) throw new Error('Probability');
```

CommonJS: `const api = require('@lp-labs/geometric-distribution')`.

## Behavior, customization and limits

Ideal mathematical probability model,not inference,fitting,random sampling or a guarantee about real observations. Negligible floating-point probabilities may underflow0 explicitly. geometricPmf(k,p) counts failures before first success; k safe integer0..1e6,p(0,1]. geometricCdf(k,p) uses -expm1((k+1)*log1p(-p)); geometricMoments uses mean(1-p)/p and variance(1-p)/p^2,throws when unrepresentable. Constant time. p=0 is unsupported,not a proper finite distribution.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function geometricPmf(k: number, p: number): number;
export declare function geometricCdf(k: number, p: number): number;
export declare function geometricMoments(p: number): {
  mean: number;
  variance: number;
};
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
