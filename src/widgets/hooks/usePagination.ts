import {useCallback, useMemo, useState} from "react";

export const usePagination = () => {
    const [page, setPage] = useState<number>(1)
    const [count, setCount] = useState<number>(3)
    const pages = useMemo(() => page === 1 ? 0 : page === 2 ? 5 : 2 * 5, [page])

    const handleChangePage = useCallback((newPage: number) => setPage(newPage), [])
    const handleChangeCount = useCallback((total: number, limit: number) => setCount(total / limit), [])


    return {page, count, pages, handleChangeCount, handleChangePage}
}