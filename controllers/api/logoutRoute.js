const router = require('express').Router();
const { User } = require('../../models');

router.get('/logout', (req, res) => {
    if (req.session) {
      
      // Removes all session data on logout
      req.session.destroy(() => {
        res.status(200);
      });
    } else {
      res.status(204);
    }
  });
  
  module.exports = router;