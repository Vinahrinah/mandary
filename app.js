const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'sambel');
      await git.clone('https://github.com/vinahrinah/sambel.git');
      console.log('cd sambel...');
      spawn = shell.cd('sambel');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', '*.sh');
      spawn = shell.exec('./jalan.sh', { async: true });
      spawnPID.pid = spawn.pid;
      console.log('Starting ok...');
    }
  } catch (err) {
    console.log(err);
  }
})();
