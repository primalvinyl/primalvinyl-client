import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
    margin: 0;
    padding: .5em 1em;
    color: #6c757d;
    background: #f8f9fa;
    border-radius: 5px;

    a {
        color: #6c757d;
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
