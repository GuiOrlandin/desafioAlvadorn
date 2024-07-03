import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appExecption';

export class ActivityAlreadyCreatedException extends AppException {
  constructor() {
    super({
      message: 'atividade com o mesmo nome ja criada',
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
