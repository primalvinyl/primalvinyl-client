import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
    const tableColumns = React.useMemo(() => [
        {
            Header: '',
            Cell: table => <img src={table.value} alt="" />,
            accessor: 'song_image_url',
        },
        {
            Header: 'Song',
            Cell: table => <Link to={`/songs/${table.row.original.id}`}>{table.value}</Link>,
            accessor: 'song_title',
        },
        {
            Header: 'Artist',
            accessor: 'artist_name',
        },
    ], []);

    const { results } = useSelector(state => state.songSearchResults, shallowEqual);
    
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows
    } = useTable({
        columns: tableColumns,
        data: results
    });

    return (
        <div className={styles.root}>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}> 
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default SearchResults;
