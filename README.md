# GraphQL Combo Query

### Combine Your GraphQL Queries

Inspired by: https://github.com/apollographql/graphql-tag/issues/169#issuecomment-568752182

## Usage

`npm install @leveluptuts/comboquery`

```tsx
// Import your queries OR write them separately with gql``
import SINGLE_POST_QUERY from './graphql/SinglePost.graphql';
import USER_QUERY from './graphql/UserQuery.graphql';

const SomeComponent = () => {
  const { slug } = useParams();
  const COMBO_QUERY = comboQuery([SINGLE_POST_QUERY, USER_QUERY]);

  // This example is using Apollo React Hooks
  const { loading, data, error } = useQuery(COMBO_QUERY, {
    variables: { slug },
  });

  // ... the rest of your stuffs
  return ();

};
```

## Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers

## Syntax

https://syntax.fm/

A Tasty Treats Podcast for Web Developers.
