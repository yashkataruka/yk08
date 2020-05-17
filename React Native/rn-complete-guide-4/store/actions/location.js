export const FIRST_LOCATION = "FIRST_LOCATION";

export const firstLocation = (initialLocation) => {
    return {
        type: FIRST_LOCATION,
        initialLocation: initialLocation
    }
}