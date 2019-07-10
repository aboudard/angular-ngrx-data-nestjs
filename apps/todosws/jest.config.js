module.exports = {
  name: 'todosws',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todosws',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
