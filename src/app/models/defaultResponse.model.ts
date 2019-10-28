export interface DefaultResponse<T> {
    message: string;
    result: T;
    status: number;
}