'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
  welcome() {
    this.log(`Welcome to ${chalk.green('gulp-starter-project')} generator!`);
    this.log(`${chalk.green.bold('Generating files ... 🍜')}`);
  }

  writing() {
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('.eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );
    this.fs.copy(
      this.templatePath('.gitattributes'),
      this.destinationPath('.gitattributes')
    );
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('LICENSE.txt'),
      this.destinationPath('LICENSE.txt')
    );
    this.fs.copy(
      this.templatePath('package-lock.json'),
      this.destinationPath('package-lock.json')
    );
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    this.fs.copy(this.templatePath('src'), this.destinationPath('src'));
  }

  Install() {
    this.npmInstall();
  }

  end() {
    this.log(' ');
    this.log(`${chalk.blue.bold('Generating project has finished! 🚀')}`);
    this.log('Project was generated from 🔻 ');
    this.log('https://github.com/empun/gulp-starter-project');
    this.log(
      `run ${chalk.green.bold('npm run dev')} to start development server`
    );
    this.log(' ');
  }
};
