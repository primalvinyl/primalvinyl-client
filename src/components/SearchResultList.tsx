import React from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';
import { SongSearchResultsType } from '../store/types';
import LazyLoadElement from './presentation/LazyLoadElement';
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

const SearchResultList = ({ searchResults }: SearchResultsProps): React.ReactElement => {
    const columns = React.useMemo(() => [
        {
            Header: '',
            Cell: (table: any) => {
                return (
                    <Link to={`/songs/${table.row.original.id}`} className={styles.itemRoot}>
                        <div className={styles.itemImage}>
                            <LazyLoadElement> 
                                {() => <img src={table.row.original.song_image_url} alt="" />}
                            </LazyLoadElement>
                        </div>
                        <div>
                            <h2>
                                {table.row.original.song_title }
                            </h2>
                            <p>
                                Performed by {table.row.original.artist_name}
                            </p>
                        </div>
                    </Link>
                );
            },
            accessor: 'song_image_url',
        } 
    ], []);

    const { results } = searchResults;

    return (
        <div className={styles.root}>
            <Table columns={columns} data={results} />
        </div>
    )
};

type SearchResultsProps = {
    readonly searchResults: SongSearchResultsType;
}

export default SearchResultList;
