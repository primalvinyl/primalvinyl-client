import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useTable, usePagination } from 'react-table';
import { Link } from 'react-router-dom';
import { getArtists } from '../store/actions';
import Input from '../components/presentation/Input';
import Select from '../components/presentation/Select';
import Button from '../components/presentation/Button';
import styles from './SearchResults.module.scss';

const SearchResults = () => {
    const tableColumns = React.useMemo(() => [
        {
            Header: '',
            Cell: table => <img src={table.value} alt="" />,
            accessor: 'image_url',
        },
        {
            Header: 'Name',
            Cell: table => <Link to={`/artists/${table.row.original.id}`}>{table.value}</Link>,
            accessor: 'name',
        },
    ], []);
    const dispatch = useDispatch();
    const { pagination, results } = useSelector(state => state.artists, shallowEqual);
    const query = useSelector(state => state.query);
    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageCount,
        pageIndex,
        pageSize,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
    } = useTable({
        columns: tableColumns,
        data: results,
        manualPagination: true,
        pageSize: pagination.per_page,
        pageIndex: pagination.page,
        pageCount: pagination.pages
    }, usePagination);

    const pageHandler = () => dispatch(getArtists({ query, page: pageIndex, per_page: pageSize }));

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
                    {page.map(row => {
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

            <div className={styles.pagination}>
                <div className={styles.buttonGroup}>
                    <Button className={styles.button} disabled={!canPreviousPage} value="Start"
                        onClick={() => {
                            gotoPage(0);
                            pageHandler();
                        }} />
                    <Button className={styles.button} disabled={!canPreviousPage} value="Previous"
                        onClick={() => {
                            previousPage();
                            pageHandler();
                        }} />
                    <Button className={styles.button} disabled={!canNextPage} value="Next"
                        onClick={() => {
                            nextPage();
                            console.log(pageIndex);
                            pageHandler();
                        }} />
                    <Button className={styles.button} disabled={!canNextPage} value="End"
                        onClick={() => {
                            gotoPage(pageCount - 1);
                            pageHandler();
                        }}/>
                </div>
                <div className={styles.gotoPage}>
                    <Input
                        type="number"
                        defaultValue={1}
                        onChange={event => {
                            const value = event.target.value;
                            const page = value ? Number(value) - 1 : 0;
                            gotoPage(page);
                            pageHandler();
                        }}
                    />
                    go to
                </div>
                <div className={styles.perPage}>
                    <Select
                        value={pageSize}
                        options={[
                            {value: 15, display: 15},
                            {value: 25, display: 25},
                            {value: 50, display: 50}]}
                        onChange={event => {
                            setPageSize(Number(event.target.value));
                            console.log(event.target.value);
                            console.log(pageSize);
                            pageHandler();
                        }} />
                    per page
                </div>
                <div className={styles.currentPage}>
                    Page <strong>{pageIndex + 1} of {pageCount}</strong>
                </div>
            </div>
        </div>
    )
};

export default SearchResults;
