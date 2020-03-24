const {Router } = require('express');

module.exports = function ({SkillController}){
const router = Router();

router.get('/',SkillController.getAll);
router.get('/:skillId',SkillController.get);
router.get('/:userId/all',SkillController.getUserSkills);
router.post('',SkillController.create);
router.patch('/:skillId',SkillController.update);
router.delete('/:skillId',SkillController.delete);

return router;

}