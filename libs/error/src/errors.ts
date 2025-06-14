import { BaseError } from './base-error.js';
import { ErrorCode } from './error-code.js';

//  General Errors
export class UnknownError extends BaseError {
  constructor(public readonly originalError?: ErrorOptions) {
    super(`An unknown error occurred.`, ErrorCode.UNKNOWN_ERROR, originalError);
  }
}

export class PermissionDeniedError extends BaseError {
  constructor(public readonly resource?: string) {
    super(
      `Permission denied${resource ? ` for resource: "${resource}"` : ''}.`,
      ErrorCode.PERMISSION_DENIED
    );
  }
}

export class UnauthorizedAccessError extends BaseError {
  constructor() {
    super(`Unauthorized access. Please log in.`, ErrorCode.UNAUTHORIZED_ACCESS);
  }
}

export class ServiceUnavailableError extends BaseError {
  constructor(public readonly serviceName?: string) {
    super(
      `The service${
        serviceName ? ` "${serviceName}"` : ''
      } is currently unavailable.`,
      ErrorCode.SERVICE_UNAVAILABLE
    );
  }
}

//  File System / IO Errors
export class FilePathIsOutOfScopeError extends BaseError {
  constructor(public readonly filepath: string) {
    super(
      `The filepath, "${filepath}", is out of scope.`,
      ErrorCode.FILE_PATH_IS_OUT_OF_SCOPE
    );
  }
}

export class FileNotFoundError extends BaseError {
  constructor(public readonly filename: string) {
    super(`The file "${filename}" was not found.`, ErrorCode.FILE_NOT_FOUND);
  }
}

export class FileReadError extends BaseError {
  constructor(
    public readonly filename: string,
    public readonly originalError?: ErrorOptions
  ) {
    super(
      `Failed to read file "${filename}".`,
      ErrorCode.FILE_READ_ERROR,
      originalError
    );
  }
}

export class InvalidFileTypeError extends BaseError {
  constructor(
    public readonly filename: string,
    public readonly expectedTypes: string[]
  ) {
    super(
      `The file "${filename}" has an invalid type. Expected types: ${expectedTypes.join(
        ', '
      )}.`,
      ErrorCode.INVALID_FILE_TYPE
    );
  }
}

//  Network / API Communication Errors
export class NetworkDisconnectedError extends BaseError {
  constructor() {
    super(
      `Network connection lost. Please check your internet connection.`,
      ErrorCode.NETWORK_DISCONNECTED
    );
  }
}

export class ApiRequestFailedError extends BaseError {
  constructor(
    public readonly endpoint: string,
    public readonly statusCode?: number
  ) {
    super(
      `API request to "${endpoint}" failed${
        statusCode ? ` with status code ${statusCode}` : ''
      }.`,
      ErrorCode.API_REQUEST_FAILED
    );
  }
}

export class ApiTimeoutError extends BaseError {
  constructor(public readonly endpoint: string) {
    super(`API request to "${endpoint}" timed out.`, ErrorCode.API_TIMEOUT);
  }
}

//  Invalid Input / Validation Errors
export class InputIsRequiredError extends BaseError {
  constructor(public readonly fieldName: string) {
    super(`The field "${fieldName}" is required.`, ErrorCode.INPUT_IS_REQUIRED);
  }
}

export class InvalidInputFormatError extends BaseError {
  constructor(
    public readonly fieldName: string,
    public readonly expectedFormat?: string
  ) {
    super(
      `The field "${fieldName}" has an invalid format${
        expectedFormat ? `. Expected: ${expectedFormat}` : ''
      }.`,
      ErrorCode.INVALID_INPUT_FORMAT
    );
  }
}

export class DuplicateEntryError extends BaseError {
  constructor(
    public readonly entryType: string,
    public readonly identifier: string
  ) {
    super(
      `A ${entryType} with identifier "${identifier}" already exists.`,
      ErrorCode.DUPLICATE_ENTRY
    );
  }
}

export class StringIsTooLongError extends BaseError {
  constructor(
    public readonly fieldName: string,
    public readonly maxLength: number
  ) {
    super(
      `The string for "${fieldName}" is too long. Max length is ${maxLength} characters.`,
      ErrorCode.STRING_IS_TOO_LONG
    );
  }
}

export class NumberIsOutOfRangeError extends BaseError {
  constructor(
    public readonly fieldName: string,
    public readonly min: number,
    public readonly max: number
  ) {
    super(
      `The number for "${fieldName}" is out of range. Must be between ${min} and ${max}.`,
      ErrorCode.NUMBER_IS_OUT_OF_RANGE
    );
  }
}

export class InvalidEmailFormatError extends BaseError {
  constructor(public readonly email: string) {
    super(
      `The email address "${email}" has an invalid format.`,
      ErrorCode.INVALID_EMAIL_FORMAT
    );
  }
}

//  Authentication & Authorization Errors
export class InvalidCredentialsError extends BaseError {
  constructor() {
    super(`Invalid username or password.`, ErrorCode.INVALID_CREDENTIALS);
  }
}

export class SessionExpiredError extends BaseError {
  constructor() {
    super(
      `Your session has expired. Please log in again.`,
      ErrorCode.SESSION_EXPIRED
    );
  }
}

export class UserNotFoundError extends BaseError {
  constructor(public readonly identifier: string) {
    super(
      `User with identifier "${identifier}" not found.`,
      ErrorCode.USER_NOT_FOUND
    );
  }
}

//  Resource / Data Errors
export class ResourceNotFoundError extends BaseError {
  constructor(
    public readonly resourceType: string,
    public readonly identifier: string
  ) {
    super(
      `The ${resourceType} with identifier "${identifier}" was not found.`,
      ErrorCode.RESOURCE_NOT_FOUND
    );
  }
}

export class ResourceAlreadyExistsError extends BaseError {
  constructor(
    public readonly resourceType: string,
    public readonly identifier: string
  ) {
    super(
      `The ${resourceType} with identifier "${identifier}" already exists.`,
      ErrorCode.RESOURCE_ALREADY_EXISTS
    );
  }
}

//  Business Logic Errors
export class InsufficientFundsError extends BaseError {
  constructor(
    public readonly requiredAmount: number,
    public readonly availableAmount: number
  ) {
    super(
      `Insufficient funds. Required: $${requiredAmount.toFixed(
        2
      )}, Available: $${availableAmount.toFixed(2)}.`,
      ErrorCode.INSUFFICIENT_FUNDS
    );
  }
}

export class ItemOutOfStockError extends BaseError {
  constructor(public readonly itemName: string) {
    super(
      `The item "${itemName}" is currently out of stock.`,
      ErrorCode.ITEM_OUT_OF_STOCK
    );
  }
}

//  Frontend Specific Errors
export class ComponentRenderFailedError extends BaseError {
  constructor(
    public readonly componentName: string,
    public readonly originalError?: ErrorOptions
  ) {
    super(
      `Failed to render component: "${componentName}".`,
      ErrorCode.COMPONENT_RENDER_FAILED,
      originalError
    );
  }
}

export class RouteNotFoundError extends BaseError {
  constructor(public readonly path: string) {
    super(
      `The requested route "${path}" was not found.`,
      ErrorCode.ROUTE_NOT_FOUND
    );
  }
}
