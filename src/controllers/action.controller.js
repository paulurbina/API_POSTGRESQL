import Action from '../models/Action';

export async function createAction(req, res) {
    const { name, done, projectid } = req.body;
    try {
        if (req.body) {
            const newAction = await Action.create({
                name,
                done,
                projectid
            }, {
                fields: [ 'name', 'done', 'projectid' ]
            });
            if (newAction) {
                res.status(200).json({
                    message: 'action has been created',
                    data: newAction
                });
            }
        }
    } catch(e) {
        res.status(500).json({
            message: 'the action can not be created',
            data: {}
        });
    }
}

export async function getAction(req, res) {
    try {
        const action = await Action.findAll({
            attributes: [ 'id', 'name', 'done', 'projectid' ],
            order: [
                ['id', 'ASC']
            ]
        });
        if (action) {
            res.json({
                message: 'all actions sent successfully',
                data: action
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'error when sending the actions',
            data: {}
        });
    }
}

export async function getOneAction(req, res) {
    const { id } = req.params;
    try {
        if(id) {
            const action = await Action.findOne({
                where: {
                    id
                },
                attributes: [ 'id', 'name', 'done', 'projectid']
            });
            res.status(200).json({
                message: 'data sent successfully',
                data: action
            });
        }
    } catch (e) {
        console.log(e);

        res.status(500).json({
            message: 'Error send data',
            data: {}
        });
    }
}

export async function deleteAction(req, res) {
    const { id } = req.params;
   try {
        if(id) {
            await Action.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'the action was eliminated',
            });
        }
   } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'the action was not eliminated',
        });
   }
}

export async function updateAction(req, res) {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    try {
        if( id && req.body ) {
            const action = await Action.findOne({
                attributes: [ 'id','name', 'done', 'projectid' ],
                where: {
                    id
                }
            });
        
            const updateAction = await Action.update({
                name, 
                done,
                projectid
            }, {
                where: {
                    id
                }
            });
        
            res.status(200).json({
                message: 'the action was successfully updated',
                data: updateAction
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'the action was successfully updated',
            data: {}
        });
    }

};

export async function getActionByProject(req, res) {
    const { projectid } = req.params;
    try {
        if (projectid) {
            const action = await Action.findAll({
                attributes: [ 'id', 'name', 'done', 'projectid' ],
                where: {
                    projectid
                }
            });
            res.status(200).json({
                message: 'this is the actions per project',
                data: action
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'no actions were found by projects',
            data: {}
        });
    }
};