module.exports = Role;

function Role(name) {
  if (!(this instanceof Role)) {
    return new Role(name);
  }

  this.name = name;
  this.permissions = [];
};

Role.prototype.allow = function(permission) {
  this.permissions.push(permission);
  return this;
};
