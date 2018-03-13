const express = require('express');
const app = express();
const router = express.Router();

const log = console.log;

router.route('/')
.get((req, res) => {
  res.send('List of product. Get method');
})
.post((req, res) => {
  res.send('Product created. Post method');
});
router.route('/:id')
  .get((req, res) => {
    res.send(`Product ${req.params.id}`);
  });
app.use('/products', router);
app.get('/', (req, res) => res.send('Main page'));
app.listen(8080, () => {
  log(`server start`);
});