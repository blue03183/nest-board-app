import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class BoardStatusValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
