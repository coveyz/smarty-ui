import fs from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';
import handlebars from 'handlebars';
import clone from '../utils/clone.js';

const log = (...args) => console.log(chalk.green(...args));

/**
 * 编译模版文件
 * @param {*} meta 数据定义
 * @param {*} filePath 目标文件路径
 * @param {*} templatePath 模版文件路径
 */
function compile(meta, filePath, templatePath) {
	if (fs.existsSync(templatePath)) {
		const content = fs.readFileSync(templatePath).toString();
		const result = handlebars.compile(content)(meta);
		fs.writeFileSync(filePath, result);
		log(`📚 ${filePath} 修改成功`);
	} else {
		log(`❌ ${filePath} 修改失败`);
	}
}

export default async () => {
	const { name } = await inquirer.prompt([
		{
			type: 'input',
			message: '项目名称',
			name: 'name',
		},
	]);

	log('🚌 创建项目:' + name);
	// 从github克隆项目到指定文件夹
	await clone('github:smarty-team/smarty-ui-app-js-template', name);

  compile(
    {name},
    `./${name}/package.json`,
    `./${name}/template/package.hbs.json`
  )

	log(`
  👌 安装完成：
  To get Start:
  ===========================
  cd ${name}
  npm i
  npm run dev
  ===========================
              `);
};
