import { promisify } from 'util';
import download from 'download-git-repo';
import ora from 'ora';

export default async (repo, desc) => {
	const process = ora(`下载...${repo}`);
	process.start();

	try {
		await promisify(download)(repo, desc);
		process.succeed();
	} catch (error) {
    process.fail()
	}
};
