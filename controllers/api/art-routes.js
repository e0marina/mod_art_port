const router = require('express').Router();
const { Art } = require('../../models');
// The `/api/artwork` endpoint
router.get('/', (req, res) => {
  Art.findAll({})
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  Art.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((artwork) => res.json(artwork))
    .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  Art.create(req.body)
    .then((artwork) => res.status(200).json(artwork))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Art.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((artwork) => res.status(200).json(artwork))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  Art.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((artwork) => res.status(200).json(artwork))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
