const BaseService = require('./base.service');

let _commentRepository = null;
let _skillRepository = null;

class SkillService extends BaseService {
    constructor({ CommentRepository, SkillRepository }) {
        super(CommentRepository, SkillRepository);
        _commentRepository = CommentRepository;
        _skillRepository = SkillRepository;
    }

    async getSkillComments(skillId) {
        if (!skillId) {
            const error = new Error();
            error.status = 400;
            error.message = 'skillId must be sent';
            throw error;
        }
        const skill = await _skillRepository.get(skillId);

        if (!skill) {
            const error = new Error();
            error.status = 404;
            error.message = 'skill  does not  exist';
            throw error;
        }
        const { comments } = skill;
        return comments;
    }

    async createComment(comment, skillId) {
        if (!skillId) {
            const error = new Error();
            error.status = 400;
            error.message = 'skillId must be sent';
            throw error;
        }
        const skill = await _skillRepository.get(skillId);

        if (!skill) {
            const error = new Error();
            error.status = 404;
            error.message = 'skill  does not  exist';
            throw error;
        }
        const createComment = await _commentRepository.create(comment);
        skill.comments.push(createComment);
        return await _skillRepository.update(skillId,{comments:skill.comments})
    }

}

module.exports = SkillService;