const path = require("path");

const modules = ["components", "lib", "pages", "type"];

function sourcePathResolve(directory) {
  return path.resolve(__dirname, "src", directory);
}

function aliasBuilder(modules) {
  return modules.reduce(
    (alias, name) => ({ ...alias, [name]: sourcePathResolve(name) }),
    {}
  );
}

module.exports = {
  resolve: {
    alias: aliasBuilder(modules),
  },
};
