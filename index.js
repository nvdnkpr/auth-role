module.exports = Role;

function Role(name) {
  if (!(this instanceof Role)) {
    return new Role(name);
  }

  this.name = function() {
    return name;
  };

  this.collection = [];
};

Role.prototype.allow = function(permission) {
  this.collection.push(permission);
  return this;
};

Role.prototype.permissions = function() {
  return this.collection;
};

Role.prototype.toJSON = function() {
  return this.name();
};
