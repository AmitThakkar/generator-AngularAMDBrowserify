/**
 * Created by Amit Thakkar on 05/05/15.
 */
(function (module, require) {
  'use strict';
  var yeoman = require('yeoman-generator');
  var chalk = require('chalk');
  var yosay = require('yosay');

  module.exports = yeoman.generators.Base.extend({
    initializing: function () {
      this.pkg = require('../package.json');
    },

    prompting: function () {
      var done = this.async();
      this.log(yosay('Welcome to the Angular AMD with Browserify generator!'));
      this.prompt({
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: this.appname
      }, function (answers) {
        this.log(answers.projectName);
        done();
      }.bind(this));
    },
    method1: function () {
      console.log('method 1 just ran');
    },
    method2: function () {
      console.log('method 2 just ran');
    },

    writing: {
      app: function () {
        this.fs.copy(
          this.templatePath('_package.json'),
          this.destinationPath('package.json')
        );
      },

      projectfiles: function () {
        this.fs.copy(
          this.templatePath('editorconfig'),
          this.destinationPath('.editorconfig')
        );
        this.fs.copy(
          this.templatePath('jshintrc'),
          this.destinationPath('.jshintrc')
        );
      }
    },

    install: function () {
      //this.installDependencies();
    }
  });
})(module, require);
