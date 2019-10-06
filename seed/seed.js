const faker = require('faker');
const winston = require('winston');

const Slot = require('./slot');
const User = require('./user');
const Wish = require('./Wish');


(async () => {
  const userSeed = new User();
  const slotSeed = new Slot();
  const wishSeed = new Wish();

  const userData = await userSeed.seed(50);
  const slotData = await slotSeed.seed(4);
  const userIds = await userData.map(({ _id }) => _id);
  const slotIds = await slotData.map(({ _id }) => _id);

  wishSeed.wipe();

  await Promise.all(
    userIds.map(async id => {
      wishSeed.update(
        slotIds[faker.random.number({ min: 0, max: 3 })],
        id,
      );

      return wishSeed.seed(faker.random.number(1, 4), false);
    }),
  );
})()
  .then(winston.log)
  .catch(winston.error)
  .finally(process.exit);
