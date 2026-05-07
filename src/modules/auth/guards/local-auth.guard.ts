import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    // By extending AuthGuard('local'), this guard automatically
    // looks for a strategy registered with the name 'local'.
}