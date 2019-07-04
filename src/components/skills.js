import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Skills extends Component {
    constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.expandDetails = this.expandDetails.bind(this);
  }

  expandDetails() {
    this.setState ({
      expand: !this.state.expand
    });
    console.log(this.state.expand);
  }

  renderListItem(item, i) {
    return (
      <div className="item" key={`skill_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="skills">{item.title}</h3>
          </div>
        </div>
        <div className="details">
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
          <ul>
            {this.state.expand &&
              this.renderExperiencePoints(item.points)
            }
          </ul>
        </div>
      </div>
    );
  }

  renderExperiencePoints(points) {
    return (
      <div>
        {points.map((txt,i) => <li key={i}>{txt}</li>)}
      </div>
    )
  }

  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="skills-section"
        icon={icon || 'check'}
        title={sectionTitle || 'Skills'}
        id="skills"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Skills.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string,
  points:PropTypes.array
};
