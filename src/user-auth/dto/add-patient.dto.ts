import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AddPatientDto {
    [key: string]: string | undefined;
    [key: symbol]: string | undefined;

    @ApiProperty({
        description: "Patient name",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        description: "number of Patient",
        required: true
    })
    @IsNotEmpty()
    @IsEmail()
    number: string;
    
    @ApiProperty({
        description: "Address of Patient",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    address: string;
}