export const API_KEY = "AIzaSyD5StG-KSNrdX3PQWWauvAhM1NtHbx7pOI";

export const updateObject = ( oldObj, newObj )=>{
    return {
    ...oldObj,
    ...newObj
    };
};