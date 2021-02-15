import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import styles from '../../styles/partials/_variables.module.scss';

const Wrapper = styled.nav`
    margin: 0;
    padding: .5em 1em;
    color: ${styles.gray600};
    background: ${styles.gray100};
    border-radius: 5px;

    a {
        color: ${styles.gray600};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const BreakCrumbs = ({ currentPage, previousPages }: BreakCrumbsProps): React.ReactElement => {
    const breadCrumbList = previousPages.map(listItem => (
        <span key={listItem.link}>
            <Link to={listItem.link}>{listItem.title}</Link>
            {currentPage !== '' &&
                <span>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</span>
            }
        </span>
    ));
    
    return (
        <Wrapper>
            {currentPage === '' &&
                <span>&lt;&nbsp;&nbsp;</span>
            }
            {breadCrumbList}
            {currentPage !== '' &&
                <span>{currentPage}</span>
            }
        </Wrapper>
    );
};

type previousPagesItem = {
    title: string;
    link: string;
};

type BreakCrumbsProps = {
    currentPage?: string;
    previousPages: previousPagesItem[];
};

BreakCrumbs.defaultProps = {
    currentPage: '',
    previousPages: [{ title: '', link: '' }]
};

export default BreakCrumbs;
