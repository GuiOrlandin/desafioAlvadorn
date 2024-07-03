import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exceptions/appExecption';

export class ActivityNotFoundException extends AppException {
  constructor() {
    super({
      message: 'Activity não encontrado',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
