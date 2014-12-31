var assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test,
    os = require('os'),
    path = require('path');

describe('refluxify:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .on('method', function (method) {
        console.log(method);
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});
