---
sidebar_position: 1
---

# 👤 Users

## Fetch the authenticated user

### Information

| Request method | URL                              | Required scope |
| -------------- | -------------------------------- | -------------- |
| `GET`          | `https://useresolute.com/api/me` | _none_         |

:::info
You'll need the `user:email` scope to view a user's email address.
:::

### Expected response

```json
{
  "id": 1,
  "email": "hi@hi.hi"
}
```
