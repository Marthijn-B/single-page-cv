import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
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
      <div className="item" key={`exp_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title"
              title={this.state.expand ? "Click to minimise" : "Click to see details"}
              onClick={this.expandDetails}>{item.title}
            </h3>
            <div className="time">{item.date}</div>
          </div>
          {this.renderCompanySection(item.company, item.companyLink, item.companyShortDetail)}
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
  renderCompanySection(company, companyLink, companyShortDetail) {
    if (company && companyLink) {
      return (<div className="company"> <a href={companyLink} target="_blank">{company}</a> {companyShortDetail || ''}</div>);
    }
    return null;
  }
  renderExperiencePoints(points) {
    return (
      <div>
        {points.map((txt,i) => <li key={i}>{txt}</li>)}
      </div>
    )



  }
  renderPoint(point) {
    return <li>point</li>
  }

  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="experieces-section"
        icon={icon || 'briefcase'}
        title={sectionTitle || 'Experiences'}
        id="experiences"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Experiences.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string,
  points:PropTypes.array
};
