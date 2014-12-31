'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.log(yosay(
      'Welcome to the ace' + chalk.red('Refluxify') + ' generator!'
    ));
  },

  writing: {
    app: function () {
      var done = this.async();

      this.remote(this.pkg.src, function (err, remote, files) {
        var directories = [
              '__tests__',
              'assets',
              'gulp'
            ],
            files = [
              '.gitignore',
              '.jscsrc',
              'gulpfile.js',
              'index.html',
              'package.json',
              'server.js',
            ];

        if (err) {
          return done(err);
        }

        directories.forEach(function (directory) {
          remote.directory(directory, directory);
        });

        files.forEach(function (file) {
          remote.copy(file, file);
        });

        done();
      }.bind(this));
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
