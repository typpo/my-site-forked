var React = require('react'),
    Project = require('./Project'),
    PostList = require('./PostList'),
    projectData = require('./project_data.js');

if (typeof window === undefined) {
  require('../../../css/projects.scss')
  require('../../../css/genericlist.scss')
}

var ProjectList = React.createClass({
  getInitialState() {
    return {
      data: this.props.data || projectData,
    };
  },
  render() {
    var projects = this.state.data.filter(function(project) {
      return !project.hideInProjectsView && project.imgurl;
    }).map(function(project, idx) {
      return (
        <Project data={project} key={idx} />
      );
    });

    var textProjects = this.state.data.filter(function(project) {
      return !project.hideInProjectsView && !project.imgurl;
    }).map(function(project, idx) {
      return (
        <li key={idx}><a href={project.url}>{project.title}</a> - {project.desc}</li>
      );
    });

    let textProjectsElements = ''
    if (textProjects.length > 0) {
      textProjectsElements = (
        <div className="text-project-list generic-list">
          <h3>Other Projects</h3>
          <ul>
          {textProjects}
          </ul>
        </div>
      );
    }

    let postsListElements = '';
    if (!this.props.hidePostsList) {
      postsListElements = <PostList/>
    }

    return (
      <div>
        <div className="project-list flex-container">
          {projects}
        </div>
        {textProjectsElements}
        {postsListElements}
      </div>
    );
  },
});

module.exports = ProjectList;
