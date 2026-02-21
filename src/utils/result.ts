export interface Success<TData> {
  success: true;
  data: TData;
}

export interface Failure<TError = string> {
  success: false;
  error: TError;
}

export type Result<TData, TError = string> = Success<TData> | Failure<TError>;

export function ok<TData>(data: TData): Success<TData> {
  return { success: true, data };
}

export function fail<TError = string>(error: TError): Failure<TError> {
  return { success: false, error };
}
