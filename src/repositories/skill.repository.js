const BaseRepository = require('./base.repository');

let _skill = null;

class SkillRepository extends BaseRepository{
    constructor({Skill}){
        super(Skill);
        _skill = Skill;
    }

    async getUsersSkills(developer){
        return await _skill.find({developer});
    }
}

module.exports = SkillRepository;
