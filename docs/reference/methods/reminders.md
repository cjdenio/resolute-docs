---
sidebar_position: 2
---

# 📋 Reminders

## Fetch the authenticated user's reminders

### Information

| Request method | URL                                     | Required scope   |
| -------------- | --------------------------------------- | ---------------- |
| `GET`          | `https://useresolute.com/api/reminders` | `reminders:view` |

### Expected response

```json
[
  {
    "id": 1,
    "text": "Do something",
    "created_at": "2021-11-23T03:39:43.903Z"
  },
  {
    "id": 2,
    "text": "Do something else",
    "created_at": "2021-11-23T03:39:43.903Z"
  }
]
```

## Create a reminder

### Information

| Request method | URL                                     | Required scope     |
| -------------- | --------------------------------------- | ------------------ |
| `POST`         | `https://useresolute.com/api/reminders` | `reminders:create` |

### Request body

:::tip
See [Creating reminders](docs/quickstart/creating-reminders.md) for more information on these various fields.
:::

```json
{
  "text": "",
  "title": "",
  "author": "",
  "author_avatar": "",
  "url": ""
}
```

### Expected response

```json
{
  "text": "",
  "title": "",
  "author": "",
  "author_avatar": "",
  "url": ""
}
```
