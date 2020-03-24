let _commentService = null;

class CommentController{
    constructor({CommentService}){
        _commentService = CommentService;
    }
    async get(req,res){
        const {commentId} = req.params;
        const comment = await _commentService.get(commentId)
        return res.send (comment);
    }

    // async getAll(req,res){
    //     const users = await _commentService.getAll();
    //     return res.send(users);
    // }
    async update(req,res){
        const {body}= req;
        const {commentId} = req.params;

        const updateUser = await _commentService.update(commentId,body);
        return res.send(updateUser)
    }
    async delete(req,res){
        const {commentId} = req.params;
        const deleteComment = await _commentService.delete(commentId);
        return res.send(deleteComment);
    }

    async getSkillComments(req,res){
        const {skillId} = req.params;
        const comments = await _commentService.getSkillComments(skillId);
        return res.send(comments);
    }
    async createComment(req,res){
        const {body}= req;
        const {skillId} = req.params;

        const createdComment = await _commentService.createdComment(skillId,body);
        return res.send(createdComment)
    }

}

module.exports = CommentController;