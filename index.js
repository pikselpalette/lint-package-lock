const fs = require('fs');
const path = require('path');
const glob = require('glob');
const args = require("args-parser")(process.argv);

const ruleFiles = glob.sync(path.join(__dirname, 'rules', '**', '*.js'));
const rules = ruleFiles.map(r => require(r));

const file = args.file || path.join(process.cwd(), 'package-lock.json');
const configFile = path.join(process.cwd(), args.config || '.lint-package-lock');

console.log(`Using config file ${configFile} if it exists`);

const config = fs.existsSync(configFile)
  ? JSON.parse(fs.readFileSync(configFile).toString())
  : {};

const lock = JSON.parse(fs.readFileSync(file).toString());

let failed = false;

console.log(`Running package-lock linting on ${file}`);

const enforceResolves = (modules) =>
  Object.entries(modules).forEach(([name, module]) => {
    rules.forEach((rule) => {
      const error = rule(config, name, module);

      if (error) {
        console.error(`Error for module ${name}: ${error}`);

        failed = true;
      }
    });

    if (module.dependencies) {
      enforceResolves(module.dependencies);
    }
  });

enforceResolves(lock.dependencies);

if (failed) {
  console.error('Failed');
  process.exit(1);
}

console.log('All dependencies passed');
