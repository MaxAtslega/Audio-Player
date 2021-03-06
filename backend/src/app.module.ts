import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { JwtConfigService } from './util/JwtConfigService';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { audioProvider } from './provider/audio.provider';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AudioService } from './audio/audio.service';
import { AudioController } from './audio/audio.controller';
import { JwtStrategy } from './auth/ jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './api',
    }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    PassportModule,
    DatabaseModule,
  ],
  controllers: [AuthController, AudioController],
  providers: [...audioProvider, AuthService, AudioService, JwtStrategy],
})
export class AppModule {}
