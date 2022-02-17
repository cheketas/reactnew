export const GetPagecount = (total,limit) => {
    return Math.ceil(total/limit);
}