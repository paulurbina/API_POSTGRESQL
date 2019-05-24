import Project from '../models/Project';

export async function getProjects(req, res) {
    const projects = await Project.findAll();
    try {
        if(projects) {
            res.status(200).json({
                message: 'data sent successfully',
                data: projects
            });
        }
    } catch(e) {
        res.status(500).json({
            message: 'problem when getting the data!',
            data: {}
        });
    }
    
};

export async function createProject (req, res) {
    const { name, priority, description, deliverydate} = req.body;
   try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if(newProject) {
            return res.json({
                message: 'Project create succesfully!',
                data: newProject
            });
        }
   } catch(e) {
        console.log(e);
       
        res.status(500).json({
            message: 'there is no data to show',
            data: {}
        });
   }
}   

//************* */ GETTING THE ID OF A PROJECT

export async function getOneProjects(req, res) {
    const { id } = req.params;
    try {
        if(id) {
            const project = await Project.findOne({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'data sent successfully',
                data: project
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

export async function deleteProjects(req, res) {
    const { id } = req.params;
    try {
        if (id) {
            const deleteRowCount = await Project.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({
                message: 'project successfully removed',
                count: deleteRowCount
            });
        }
    }catch(e) {
        console.log(e);

        res.status(500).json({
            message: 'could not be deleted'
        });
    }
};

export async function updateProjects (req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    try {
        if(id && req.body) {
            const projects = await Project.findAll({
                attributes: [ 'id', 'name', 'priority', 'description', 'deliverydate' ],
                where: {
                    id
                }
            });
        
            if(projects.length > 0) {
                projects.forEach(async project => {
                    await project.update({
                        name, 
                        priority,
                        description,
                        deliverydate
                    });
                });
            }
        
            return res.status(200).json({
                message: 'the data was updated successfully',
                data: projects
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: 'the project could not be updated',
            data: {}
        });
    }
};