import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class VerifyTokenDto {
    [key: string]: string | undefined;
    [key: symbol]: string | undefined;

    @ApiProperty({
        description: "Token of the user",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    token: string;

    @ApiProperty({
        description: "new password of the user",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    newPassword: string;


  }