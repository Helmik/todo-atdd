var common = [
    '--compiler js:babel-register',
    `--format ${process.env.CI ? 'progress' : 'progress-bar'}`,
    '--format usage:usage.txt'
].join(' ')

module.exports = {
    default: common,
    'node-4': common + ' --tags "not @node-6"'
}
