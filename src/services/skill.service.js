const BaseService = require('./base.service');

let _skillRepository = null;
class SkillService extends BaseService {
    constructor({SkillRepository}) {
        super(SkillRepository);
        _skillRepository = SkillRepository;
    }

   async getUserSkills(developer){
        if(!developer){
                const error = new Error();
                error.status= 400;
                error.message = 'UserId must be sent';
                throw error;
        }
        return await _skillRepository.getUserSkills(developer);
    }

}

module.exports = SkillService;