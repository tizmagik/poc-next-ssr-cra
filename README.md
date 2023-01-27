# poc-next-ssr-cra

This is a POC repo to demonstrate the ability to have a NextJS SSR app which falls back to a built CRA app via rewrites rule configured in next.config.js

## reproduce locally

```bash
yarn start
```

Visit:

- <http://localhost:3000> - NextJS
- <http://localhost:3000/foo> - CRA fallback
