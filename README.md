# auth-role

Create named collections of
[permissions](https://github.com/alexmingoia/auth-permission).

## Installation

### Node

```sh
npm install auth-role
```

### Browser

```sh
component install alexmingoia/auth-role
```

## Example

```javascript
var Permission = require('auth-permission');
var Role = require('auth-role');

var role = new Role('member');

role
  .allow(Permission('read', 'forum'))
  .allow(Permission('create', 'thread'));
```

## API

### Role(name)

Create a new Role with given `name`.

### role.allow(permission)

Allow given [permission](https://github.com/alexmingoia/auth-permission).

### role.name()

Return the name of the role.

### role.permissions()

Return the role's allowed permissions.

## MIT Licensed
