const catlogs = [
    {
        id: "odghgd",
        title: "All Categories"
    },
    {
        id: "12fsfjoij",
        title: "Deals"
    },
    {
        id: "shfhfnkf",
        title: "Amazon Device"
    },
    {
        id: "owiwogjfk",
        title: "Baby"
    },
    {
        id: "oiwfwlkfnwf",
        title: "Apps & Games"
    }
]

export const getCatlogs = function () {
    return catlogs
}

export const getCatlog = function (id) {
    return catlogs.find(catlog => catlog.id === id)
}


