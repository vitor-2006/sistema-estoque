const { bootstrapTest } = require('../src/__tests__/testUtils.js');
const User = require('../src/models/user.model.js').default;

let dbInstance;
let mongoServer;

beforeAll(async () => {
  const bootstrap = await bootstrapTest();
  dbInstance = bootstrap.dbInstance;
  mongoServer = bootstrap.mongoServer;
  global.app = bootstrap.app;
});

afterEach(async () => {
  await User?.deleteMany({});
});

afterAll(async () => {
  await dbInstance?.close();
  await mongoServer?.stop();
});