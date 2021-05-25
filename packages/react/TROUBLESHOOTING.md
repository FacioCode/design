# Troubleshooting

## Fixing build errors

**Given** you have gatsby website with `@faciocode/react` package installed  
**When** you run `npm start` and try to open website, and you find the following message:

```
Failed to compile
./node_modules/@faciocode/react/dist/index.umd.js
Module not found: Error: Can't resolve '@material-ui/core/Box' in 'node_modules/@faciocode/react/dist'
This error occurred during the build time and cannot be dismissed.
```

**Then** check if you have installed the latest version of `@faciocode/react`

```shell
npm install @faciocode/react@latest
```
