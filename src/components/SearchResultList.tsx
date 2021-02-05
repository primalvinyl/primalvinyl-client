import React from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import styles from './SearchResultList.module.scss';

const Table = ({ columns, data }: any) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows
    } = useTable({
        columns,
        data
    });
    
    return (
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
    )
}

const SearchResultList = ({ list }: SearchResultsProps): React.ReactElement => {
    const columns = React.useMemo(() => [
        {
            Header: '',
            Cell: (table: any) => <img src={table.value} alt="" />,
            accessor: 'song_image_url',
        },
        {
            Header: 'Song',
            Cell: (table: any) => <Link to={`/songs/${table.row.original.id}`}>{table.value}</Link>,
            accessor: 'song_title',
        },
        {
            Header: 'Artist',
            accessor: 'artist_name',
        },
    ], []);

    return (
        <div className={styles.root}>
            <Table columns={columns} data={list} />
        </div>
    )
};

type SearchResultsProps = {
    readonly list: any;
}

export default SearchResultList;
