let _skillService = null;
// No Base Controller we missed the Scope 
class SkillController{
    constructor({SkillService}){

        _skillService = SkillService;
    }
    async get(req,res){
        const {skillId} = req.params;
        const skill = await _skillService.get(skillId)
        return res.send (skill);
    }

    async getAll(req,res){
        const skills = await _skillService.getAll();
        return res.send(skills);
    }

    async create(req,res){
        const {body} = req;
        const createdSkill = await _skillService.create(body);
        return res.status(201).send(createdSkill);
    }

    async update(req,res){
        const {body}= req;
        const {skillId} = req.params;

        const updateSkill = await _skillService.update(skillId,body);
        return res.send(updateSkill)
    }
    async delete(req,res){
        const {skillId} = req.params;
        const deleteSkill = await _skillService.delete(skillId);
        return res.send(deleteSkill);
    }
    async getUserSkills(req,res){
        const {userId} = req.params;
        const skills = await _skillService.getUserSkills(userId);
        return res.send(skills);
    }
}

module.exports = SkillController;