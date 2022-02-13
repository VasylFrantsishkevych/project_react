
export const createPages  = (pages: Array<number>, totalPages: number, currentPage: number) => {
    if(totalPages > 8) {
        if(currentPage > 4) {
            for (let i = currentPage-3; i <= currentPage+4; i++) {
                pages.push(i)
                if(i === totalPages) break
            }
        }
        else {
            for (let i = 1; i <= 8; i++) {
                pages.push(i)
                if(i === totalPages) break
            }
        }
    }  else {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
    }
}