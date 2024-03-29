import React from 'react';
import PropTypes from 'prop-types';
import { Container, Repository } from './styles';

const CompareList = ({ tech }) => {
  return (
    <Container>
      {tech.map(repository => (
        <Repository key={repository.id}>
          <header>
            <img src={repository.owner.avatar_url} alt="" />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>
          <ul>
            <li>
              {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              {repository.lastCommit} <small>Last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  );
};

CompareList.propTypes = {
  tech: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string
      })
    })
  ).isRequired
};

export default CompareList;
