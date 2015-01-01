var assert = require('yeoman-generator').assert,
    helpers = require('yeoman-generator').test,
    os = require('os'),
    path = require('path');

describe('refluxify:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '__tests__/spec/views/main.spec.js',
      '__tests__/support/preprocessor.js',
      'assets/jsx/app.jsx',
      'assets/jsx/views/main.jsx',
      'assets/less/app.less',
      'assets/less/global.less',
      'gulp/__common__.js',
      'gulp/browserify.js',
      'gulp/build.js',
      'gulp/clean.js',
      'gulp/cssmin.js',
      'gulp/default.js',
      'gulp/jest.js',
      'gulp/jscs.js',
      'gulp/less.js',
      'gulp/uglify.js',
      '.gitignore',
      '.jscsrc',
      'gulpfile.js',
      'index.html',
      'package.json',
      'server.js'
    ]);
  });
});
