const lintResolves = (config, name, { resolved }) => {
  const server = config.server || 'https://registry.npmjs.org';

  if (resolved && resolved.indexOf(server) !== 0) {
    return `Illegal resolve: ${resolved}`;
  }

  return null;
};

module.exports = lintResolves;
