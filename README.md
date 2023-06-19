This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
# Get Layout in root method

This is to improve the app performance by not allowing the re-render of the application on navigation to another page that uses the same layout. This is so the app can act like an SPA. When passing getLayout to page components, avoid the use of arrow functions for declaring the page as it contains context, is called every time app re-renders which results in garbage collection on previous instance and the getLayout prop in not part of the NextPage object properties. Rather use a named function.

# SVGr

This is used to aid import of svgs as components
