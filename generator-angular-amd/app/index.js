/**
 * Created by Amit Thakkar on 05/05/15.
 */
(function(module, require) {
    var generators = require('yeoman-generator');
    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);
        },
        prompting: function () {
            var done = this.async();
            this.prompt({
                type    : 'input',
                name    : 'name',
                message : 'Your project name',
                default : this.appname // Default to current folder name
            }, function (answers) {
                this.log(answers.name);
                done();
            }.bind(this));
        },
        method1: function () {
            console.log('method 1 just ran');
        },
        method2: function () {
            console.log('method 2 just ran');
        }
    });
})(module, require);