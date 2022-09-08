#!/usr/bin/env node
import { promisify } from 'util';
import figlet from 'figlet';
import clear from 'clear';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
import inquirer from 'inquirer';

clear();

const log = (content) => console.log(chalk.green(content));

const opt = {
	'SmartyUI应用模版(Vite)': 'smarty-ui-vite',
	SmartyAdmin模版: 'admin',
	组件库脚手架: 'uitemplate',
	组件库文档网站: 'uitemplate',
	退出: 'quit',
};

const question = [
	{
		type: 'rawlist', // 选择狂
		message: '请选择要创建的项目?',
		name: 'operation',
		choices: Object.keys(opt),
	},
];

const logo = figlet.textSync('Smarty UI!', {
	// font: "Ghost",
	horizontalLayout: 'default',
	verticalLayout: 'default',
	width: 80,
	whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);

const query = async () => {
	const answer = await inquirer.prompt(question);
	console.log('query-answer=>', answer);

	if (answer.operation === '退出') return;
	const { default: op } = await import(`../lib/operation/${opt[answer.operation]}.js`);
	await op();
};

setTimeout(() => {
	rainbow.stop(); // Animation stop
	query();
}, 500);
