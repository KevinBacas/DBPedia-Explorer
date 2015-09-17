// Action types
export const REQUEST_MAKE = 'REQUEST_MAKE';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const REQUEST_COMPLETED = 'REQUEST_COMPLETED';

// Other variables
export const REQUEST_STATUS = {
  LOADING: 'LOADING',
  FAILED: 'FAILED',
  SUCCESS: 'SUCCESS'
};

// Action creators
export function requestMake(request_string) {
  return { type: REQUEST_MAKE, request_string, request_status: REQUEST_STATUS.LOADING };
}
export function requestFailed(error_message) {
  return { type: REQUEST_FAILED, error_message, request_status: REQUEST_STATUS.FAILED };
}
export function requestCompleted(result) {
  return { type: REQUEST_COMPLETED, result, request_status: REQUEST_STATUS.SUCCESS };
}
