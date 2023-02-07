import fs from 'fs';

function main() {
  const log = filterLog();

  writeOutput(log);
}

function filterLog() {
  try {
    const logfile = fs.readFileSync('./build.log', 'utf-8');

    const rows = logfile.split('\n');

    const jsoutput = rows.filter((row) => row.includes('.js'));

    return jsoutput.join('\n\n');
  } catch (error) {
    throw new Error('No log file found');
  }
}

function writeOutput(data: string) {
  fs.writeFileSync('README.md', `# framework-comp\n\n${data}\n`);
}

main();
