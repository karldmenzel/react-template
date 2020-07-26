import {exampleService} from './services.js';

export const serviceSuccessful = data => {
    return {
        type: "SERVICE_CALL_SUCCESS",
        data: data
    }
}

export const serviceFailure = () => {
    return {
        type: "SERVICE_CALL_FAILURE"
    }
}

export const exampleServiceAction = () => {
    return dispatch => {
        return exampleService()
            .then(
                response => {
                    dispatch(serviceSuccessful(response.data));
                },
                error => {
                    dispatch(serviceFailure())
                }
            );
    }
}