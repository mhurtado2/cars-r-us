const database = {
    orderBuilder: {},
    paints: [
        { id: 1, color: "Silver", price: 500},
        { id: 2, color: "Midnight Blue", price: 500},
        { id: 3, color: "Firebrick Red", price: 500},
        { id: 4, color: "Spring Green", price: 500}
    ],
    fabrics: [
        { id: 1, fabric: "Beige Fabric", price: 300},
        { id: 2, fabric: "Charcoal Fabric", price: 300},
        { id: 3, fabric: "White Leather", price: 600},
        { id: 4, fabric: "Black Leather", price: 600}
    ],
    technology: [
        { id: 1, tech: "Basic Package (basic sound system)", price: 1000},
        { id: 2, tech: "Navigation Package (includes integrated navigation controls)", price: 2000},
        { id: 3, tech: "24K GoldVisibility Package (includes side and reat cameras)", price: 3000},
        { id: 4, tech: "Ultra Package (includes navigation and visibility packages)", price: 4000}
    ],
    wheels: [
        { id: 1, wheel: "17 inch Pair Radial", price: 350},
        { id: 2, wheel: "17 inch Pair Radial Black", price: 350},
        { id: 3, wheel: "18 inch Pair Spoke Silver", price: 400},
        { id: 4, wheel: "18 inch Pair Spoke Black", price: 400}
    ],
    customOrders: [
        {
            id: 1,
            colorId: 3,
            fabricId: 2,
            techId: 3,
            wheelId: 4,
            timeStamp: 16895837301
        }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getFabrics = () => {
    return database.fabrics.map(fabric => ({...fabric}))
}
export const getTechnology = () => {
    return database.technology.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}



// funcs that set state
export const setPaint = (id) => {
    database.orderBuilder.colorId = id
}

export const setFabric = (id) => {
    database.orderBuilder.fabricId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}


// custom order func
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
