import { HttpStatus } from '@nestjs/common';
import { AppException } from '../../../exceptions/appExecption';

export class ActivityNotFoundException extends AppException {
  constructor() {
    super({
      message: 'Nenhuma actividade foi encontrada',
      status: HttpStatus.NOT_FOUND,
    });
  }
}
