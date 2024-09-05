const express = require('express');
const router = express.Router();
const users = require('../../MOCK_DATA (2).json');
const { validator, idschema, userSchema } = require('../controllers/usercontrollers');

router.get('/users',(req,res)=>{
    const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name} ${user.last_name}  ${user.gender}  ${user.email}</li>`).join('')}
    </ul>`;
    res.send(html);
})

router.get('/users/:id',validator.params(idschema), (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    
    if (user) {
        const html = `
        <ul>
          <li>${user.first_name} ${user.last_name} "Gender: "${user.gender} ${user.email}</li>
        </ul>`;
        res.send(html);
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;