import Sequelize from 'sequelize';

import { sequelize } from '../database/database'

// IMPORT TABLE ACTION ---- 
import Action from './Action';

const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.TEXT
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Action, { foreingKey: 'projectid', sourceKey: 'id' });
Action.belongsTo(Project, { foreingKey: 'projectid', sourceKey: 'id' })


export default Project;