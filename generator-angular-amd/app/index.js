/**
 * Created by Amit Thakkar on 05/05/15.
 */
(function (module, require) {
    'use strict';
    var generators = require('yeoman-generator').generators;
    var chalk = require('chalk');
    var yosay = require('yosay');
    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);
            this.argument('appname', {type: String, required: false});
        },
        initializing: function () {
            this.pkg = require('../package.json');
        },
        prompting: function () {
            var done = this.async();
            this.log(yosay('Welcome to the Angular AMD with Browserify generator!'));
            if (this.appname) {
                done();
            } else {
                this.prompt({
                    type: 'input',
                    name: 'projectName',
                    message: 'Your project name',
                    default: this.appname,
                    store: true
                }, function (answers) {
                    this.log("Project Name: ", answers.projectName);
                    done();
                }.bind(this));
            }
        },
        writing: {
            app: function () {
                this.fs.copy(
                    this.templatePath('sample/sample.controller.js'),
                    this.destinationPath('app/sample/sample.controller.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.html'),
                    this.destinationPath('app/sample/sample.html')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.main.js'),
                    this.destinationPath('app/sample/sample.main.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.service.js'),
                    this.destinationPath('app/sample/sample.service.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.spec.js'),
                    this.destinationPath('app/sample/sample.spec.js')
                );
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