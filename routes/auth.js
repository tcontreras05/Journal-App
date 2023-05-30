const express = require('express')
const router = express.Router()
const passport = require('passport')


//@desc auth with goolde
// @route GET /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile']}))

//@desc google oauth callback
// @route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/'}),
(req, res) => {
    console.log(req.user)
    res.redirect('/dashboard')
}
)

//@desc logout user
// @route GET /auth/logout
router.get('/logout', (req,res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/')
      })
})


module.exports = router