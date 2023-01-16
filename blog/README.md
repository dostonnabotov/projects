# Blog Project

Welcome to the blog project. This project uses DEV.to API to fetch the latest posts from my profile.

## Table of Contents

- [Overview](#overview)
- [What I Learned](#what-i-learned)
- [Resources](#resources)

## Overview

- [Live Site](https://blog-eta.vercel.app/)
- [Live API](https://dev.to/api/articles?username=dostonnabotov)

Built with:

- React
- TypeScript
- CSS
- DEV.to API

Tools:

- [Open Props](https://open-props.style/) - CSS props generator

## What I Learned

- How to use DEV.to API

`https://dev.to/api/articles?username=your-username`

- How to fetch data from API using `fetch()` and `useEffect()` hooks

```js
useEffect(() => {
  fetch("https://dev.to/api/articles?username=dostonnabotov")
    .then((res) => res.json())
    .then((data) => {
      setArticles(data);
    });
}, []);
```

- Most importantly, combined TypeScript with React

## Resources

- [DEV.to API](https://docs.dev.to/api/)
- [React Projects Inspirations from John Smilga](https://react-projects.netlify.app/)
- [Open Props](https://open-props.style/)
