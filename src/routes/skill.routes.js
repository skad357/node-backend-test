const {Router } = require('express');
const { ParseIntMiddleware} = require('../middlewares');

module.exports = function ({SkillController}){
const router = Router();

router.get('/', ParseIntMiddleware,SkillController.getAll);
router.get('/:skillId',SkillController.get);
router.get('/:userId/all',SkillController.getUserSkills);
router.post('',SkillController.create);
router.patch('/:skillId',SkillController.update);
router.delete('/:skillId',SkillController.delete);

return router;

}