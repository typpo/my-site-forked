var React = require('react'),
    ProjectList = require('./ProjectList'),
    Hack = require('./Hack'),
    projectData = require('./project_data.js');

if (typeof window === undefined) {
  require('../../../css/hacks.scss')
}

export default React.createClass({
  getInitialState() {
    return {
      data: projectData,
    };
  },
  render() {
    let hacks = this.state.data.filter(function(project) {
      return !!project.hackathon;
    })
   .sort(function(a, b) {
      // TODO eventually just sort by project year.
      return b.hackathon.year - a.hackathon.year;
    });

    let hackElements = hacks.map(function(project, idx) {
      return (
        <Hack data={project} key={idx} />
      );
    });
    return (
      <div className="hack-list">
        <h2>Hackathons</h2>
        {hackElements}
        <div>
          <ProjectList data={hacks} hidePostsList={true} />
        </div>
      </div>
    );
  },
});
