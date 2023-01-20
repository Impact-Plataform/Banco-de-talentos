export class ApiError extends Error {
	constructor(message: string, public readonly statusCode: number) {
		super(message);
	}
}

export class BadRequestError extends ApiError {
	constructor(message: string) {
		super(message, 400);
	}
}

export class NotFoundError extends ApiError {
	constructor(message: string) {
		super(message, 404);
	}
}