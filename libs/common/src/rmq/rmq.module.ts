import { Module } from "@nestjs/common";
import { RmqService } from '@app/common';

@Module({
    imports: [],
    controllers: [],
    providers: [RmqService],
    exports: [RmqService],
})
export class RmqModule {}